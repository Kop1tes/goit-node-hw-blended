const { currentUser } = require('./currentUser');
const { login } = require('./loginUser');
const { logout } = require('./logout');
const {register} = require('./newUser')
const {updateSubscription} = require('./updateSubscription')
const { ctrlWrapper } = require('../../helpers/ctrlWrapper')
const {updateAvatar} = require('./updateAvatar');

module.exports = {
    currentUser: ctrlWrapper(currentUser),
    login: ctrlWrapper(login),
    logout: ctrlWrapper(logout),
    register: ctrlWrapper(register),
    updateSubscription: ctrlWrapper(updateSubscription),
    updateAvatar: ctrlWrapper(updateAvatar),
};