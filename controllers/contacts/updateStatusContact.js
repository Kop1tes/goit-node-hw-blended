const { HttpError } = require('../../helpers');
const { Contact } = require('../../models/contact')

const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;

    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });

    if (!result) {
        throw HttpError(404, 'Not found')
    }
    res.status(200).json(result);
};

module.exports = {
    updateStatusContact,
};