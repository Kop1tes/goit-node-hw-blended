const { getAll } = require('./getAll');
const { getContactById } = require('./getContactById');
const { add } = require('./addContacts');
const { deleteContact } = require('./deleteContact');
const { update } = require('./updateContact');
const { updateStatusContact } = require('./updateStatusContact');
const { ctrlWrapper } = require('../helpers/ctrlWrapper');

module.exports = {
    getAll: ctrlWrapper(getAll),
    getContactById: ctrlWrapper(getContactById),
    add: ctrlWrapper(add),
    deleteContact: ctrlWrapper(deleteContact),
    update: ctrlWrapper(update),
    updateStatusContact: ctrlWrapper(updateStatusContact),
};