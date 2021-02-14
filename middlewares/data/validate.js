const {constants, msg} = require('../../config/constants');

module.exports = {
    user: {
        register(req, res, next) {
            const {username, password, repeatPassword} = req.body;

            let user = {
                errors: [],
            };

            if (username.trim().length === 0 || username.trim().length < constants.USERNAME_MIN_LENGTH) {
                user.errors.push(msg.USERNAME_MIN_LENGTH);
            } else {
                user.username = username.trim();
            }

            if (!constants.USERNAME_REGEX.test(username.trim())) {
                user.errors.push(msg.USERNAME_ONLY_ALPHABETICAL);
                user.username = undefined;
            }

            if (password.trim().length === 0 || password.trim().length < constants.PASSWORD_MIN_LENGTH) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH);
            }

            if (password.trim() !== repeatPassword.trim()) {
                user.errors.push(msg.CONFIRMATION_PASSWORD_ERROR);
            }

            if (!constants.PASSWORD_REGEX.test(password.trim())) {
                user.errors.push(msg.PASSWORD_ONLY_ALPHABETICAL);
            }

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/register', {...user, message: user.errors.shift()});

        },
        login(req, res, next) {
            const {username, password} = req.body;

            let user = {
                errors: [],
            };

            if (username.trim().length === 0 || username.trim().length < constants.USERNAME_MIN_LENGTH) {
                user.errors.push(msg.USERNAME_MIN_LENGTH);
            } else {
                user.username = username.trim();
            }

            if (!constants.USERNAME_REGEX.test(username.trim())) {
                user.errors.push(msg.USERNAME_ONLY_ALPHABETICAL);
                user.username = undefined;
            }

            if (password.trim().length === 0 || password.trim().length < constants.PASSWORD_MIN_LENGTH) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH);
            }

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/login', {...user, message: user.errors.shift()})
        },
    },
    play: {
        create(req, res, next) {
            const {title, description, imageUrl, isPublic} = req.body;

            let play = {
                errors: [],
            };

            if (title.trim().length === 0) {
                play.errors.push(msg.TITLE_MIN_LENGTH);
            } else {
                play.title = title.trim();
            }

            if (description.trim().length === 0 || description.trim().length > constants.DESCRIPTION_MAX_LENGTH) {
                play.errors.push(msg.DESCRIPTION_LENGTH);
            } else {
                play.description = description.trim();
            }

            if (imageUrl.trim().length === 0) {
                play.errors.push(msg.IMAGE_URL_MIN_LENGTH);
            } else {
                play.imageUrl = imageUrl.trim();
            }

            if (isPublic) {
                play.isPublic = true;
            }

            if (!play.errors.length) {
                next();
                return;
            }
            res.render('plays/create', {...play, message: play.errors.shift()});

        },
        edit(req, res, next) {
            const {title, description, imageUrl, isPublic} = req.body;

            let play = {
                errors: [],
            };

            if (title.trim().length === 0) {
                play.errors.push(msg.TITLE_MIN_LENGTH);
            } else {
                play.title = title.trim();
            }

            if (description.trim().length === 0 || description.trim().length > constants.DESCRIPTION_MAX_LENGTH) {
                play.errors.push(msg.DESCRIPTION_LENGTH);
            } else {
                play.description = description.trim();
            }

            if (imageUrl.trim().length === 0) {
                play.errors.push(msg.IMAGE_URL_MIN_LENGTH);
            } else {
                play.imageUrl = imageUrl.trim();
            }

            if (isPublic) {
                play.isPublic = true;
            }

            if (!play.errors.length) {
                next();
                return;
            }

            res.render('plays/edit', {...play, message: play.errors.shift()});
        }
    }
}