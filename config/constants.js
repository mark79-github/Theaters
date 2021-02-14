module.exports = {
    constants: {
        USERNAME_MIN_LENGTH: 3,
        PASSWORD_MIN_LENGTH: 3,
        DESCRIPTION_MAX_LENGTH: 50,
        USERNAME_REGEX: /^[A-Za-z0-9]+$/,
        PASSWORD_REGEX: /^[A-Za-z0-9]+$/,
    },
    msg: {
        USERNAME_MIN_LENGTH: "Username must be at least 3 characters",
        PASSWORD_MIN_LENGTH: "Password must be at least 3 characters",
        TITLE_MIN_LENGTH: "Title must be at least 1 character",
        DESCRIPTION_LENGTH: "Description must be between 1 and 50 characters",
        IMAGE_URL_MIN_LENGTH: "ImageUrl must be at least 1 character",
        USERNAME_ONLY_ALPHABETICAL: "Username must contains only digits and/or latin letters",
        CONFIRMATION_PASSWORD_ERROR: "Your password and confirmation password do not match",
        PASSWORD_ONLY_ALPHABETICAL: "Password must contains only digits and/or latin letters",
        WRONG_CREDENTIALS: "Wrong username and/or password",
        USERNAME_IS_IN_USE: (username) => {
            return `Username ${username} is already taken ...`
        },
        DB_CONNECTED: (host, name) => {
            return `Successfully connected to ${host} : db -> ${name}`
        },
        DB_CONNECTION_ERROR: "Connection error: ",
        APPLICATION_RUNNING: (port) => {
            return `Application is up & listening on port ${port} ...`;
        },
    }
}
