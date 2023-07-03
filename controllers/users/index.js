const {register} = require('./newUser')
const { login } = require('./loginUser');
const { logout } = require('./logout');
const {updateSubscription} = require('./updateSubscription')
const { currentUser } = require('./currentUser');
const { ctrlWrapper } = require('../../helpers/ctrlWrapper')
const {updateAvatar} = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail');

module.exports = {
    currentUser: ctrlWrapper(currentUser),
    login: ctrlWrapper(login),
    logout: ctrlWrapper(logout),
    register: ctrlWrapper(register),
    updateSubscription: ctrlWrapper(updateSubscription),
    updateAvatar: ctrlWrapper(updateAvatar),
    verifyEmail: ctrlWrapper(verifyEmail),
    resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};