const {playService} = require('../../services');

module.exports = async (req, res, next) => {
    if (req.user) {
        playService.getById(req.params.playId)
            .then((play) => {
                res.locals.isCreator = play.creator._id.toString() === req.user.id.toString();
                res.locals.isLiked = play.usersLiked.some(value => {
                    return value._id.toString() === req.user.id.toString();
                });
            });
    }

    next();
}