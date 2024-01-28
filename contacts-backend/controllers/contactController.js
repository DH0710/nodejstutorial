// @desc Get all contacts
// @route GET /api/contacts
// @access public 


const getContacts = (req, res) => {
    res.status(200).json ({message: "Get all contacts"});
};


// @desc Get a single contact
// @route GET /api/contacts/:id
// @access public 


const getSingleContact = (req, res) => {
    res.status(200).json ({message: `Get Contact for ${req.params.id}`});
};


// @desc Create New contacts
// @route POST /api/contacts
// @access public

const createContact = (req, res) => {
    console.log("The request body is :", req.body);
    const {name, email, phone} = req.body;
    if {}
    res.status(201).json ({message: "Create new contact"});
};


// @desc Update Contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = (req, res) => {
    res.status(200).json ({message: `Update Contact for ${req.params.id}`});
};

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// @access public

const deleteContact = (req, res) => {
    res.status(200).json ({message: `Delete Contact for ${req.params.id}`});
};





module.exports = { getContacts, createContact, getSingleContact, updateContact, deleteContact};