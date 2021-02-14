const {Play} = require('../models');

function getAll(query, isLogged) {

    if (!isLogged) {
        // List the top three (3) public plays ordered by the count of likes in descending order.
        return Play.aggregate()
            .match({isPublic: true})
            .addFields({likes: {$size: '$usersLiked'}})
            .sort({likes: -1})
            .limit(3);
    } else {
        // List all public plays sorted in descending order by the created time
        if (!query.hasOwnProperty('sort')) {
            return Play.aggregate()
                .match({isPublic: true})
                .sort({createdAt: -1});
        } else {
            return Play.aggregate()
                .match({isPublic: true})
                .addFields({likes: {$size: '$usersLiked'}})
                .sort({[query.sort]: -1});
        }
    }
}

function getById(playId) {
    return Play.findById(playId).lean();
}

function create(data, userId) {
    let play = new Play(data);
    play.isPublic = data.isPublic === 'on';
    play.creator = userId;
    return play.save();
}

function edit(playId, data) {
    data.isPublic = data.isPublic === 'on';
    return Play.findByIdAndUpdate(playId, data);
}

function remove(playId) {
    return Play.findByIdAndDelete(playId);
}

function like(playId, userId) {
    return Play.findById(playId)
        .then((play) => {
            play.usersLiked.push(userId);
            return play.save();
        })
}

module.exports = {
    getAll,
    getById,
    create,
    edit,
    remove,
    like,
}