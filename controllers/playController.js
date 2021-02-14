const {Router} = require('express');
const {playService} = require('../services');
const {isLogged, isCreator, validate} = require('../middlewares');

const router = Router();

router.get('/', (req, res, next) => {
    playService.getAll(req.query, res.locals.isLogged)
        .then((plays) => {
            res.render('home/home', {plays, asd: 'asd'});
        })
        .catch(next);
});

router.get('/create', isLogged, (req, res) => {
    res.render('plays/create');
});

router.post('/create', isLogged, validate.play.create, (req, res, next) => {
    playService.create(req.body, req.user.id)
        .then(() => {
            res.redirect('/');
        })
        .catch(next);
});

router.get('/details/:playId', isLogged, isCreator, (req, res, next) => {
    playService.getById(req.params.playId)
        .then((play) => {
            res.render('plays/details', {...play});
        })
        .catch(next)

});

router.get('/edit/:playId', isLogged, (req, res, next) => {
    playService.getById(req.params.playId)
        .then((play) => {
            res.render('plays/edit', {...play});
        })
        .catch(next);
})

router.post('/edit/:playId', isLogged, validate.play.edit, (req, res, next) => {
    playService.edit(req.params.playId, req.body)
        .then((play) => {
            res.redirect(`/plays/details/${play._id}`);
        })
        .catch(next);
});

router.get('/delete/:playId', isLogged, (req, res, next) => {
    playService.remove(req.params.playId)
        .then(() => {
            res.redirect('/');
        })
        .catch(next);
});

router.get('/like/:playId', isLogged, (req, res, next) => {
    playService.like(req.params.playId, req.user.id)
        .then((play) => {
            res.redirect(`/plays/details/${play._id}`);
        })
        .catch(next);
});

module.exports = router;