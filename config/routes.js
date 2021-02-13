const {Router} = require('express');
const router = Router();

const {userController, homeController, errorController, playController} = require('../controllers');

router.use('/', homeController);
router.use('/users', userController);
router.use('/plays', playController);
router.use('*', errorController);

module.exports = router;
