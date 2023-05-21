const express = require('express')
const {isValidId} = require('../../middlewares/isValidId');

const router = express.Router()

const ctrl = require('../../controllers/index');
const { validateBody } = require('../../middlewares');
const {schemas} = require('../../models/contacts');

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getContactById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.delete('/:contactId', ctrl.deleteContact);

router.put('/:contactId', validateBody(schemas.addSchema), ctrl.update);

router.patch('/:contactId/favorite', isValidId, validateBody(schemas.updateSchema), ctrl.updateStatusContact);

module.exports = router;
