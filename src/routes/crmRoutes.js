import { addNewContact, getContacts, getContactWithId, updateContact, deleteContact } from "../controllers/crmController"

const routes = (app) => {
    app.route('/contact')
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next()
    }, getContacts)

    // create a new contact
    .post(addNewContact)

    // get specific contact
    app.route("/contact/:contactId")
    .get(getContactWithId)

    // update a specific contact
    app.route('/contact/:contactId')
    .put(updateContact)

    // delete a specific contact
    .delete(deleteContact)
}

export default routes;
