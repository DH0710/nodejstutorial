const asyncHandler = require("express-async-handler");


// @desc Get all contacts
// @route GET /api/contacts
// @access public 


const getContacts = asyncHanlder(async (req, res) => {
    res.status(200).json ({message: "Get all contacts"});
});


// @desc Get a single contact
// @route GET /api/contacts/:id
// @access public 


const getSingleContact = async (req, res) => {
    res.status(200).json ({message: `Get Contact for ${req.params.id}`});
};


// @desc Create New contacts
// @route POST /api/contacts
// @access public

const createContact = async (req, res) => {
    console.log("The request body is :", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone ) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    res.status(201).json ({message: "Create new contact"});
};


// @desc Update Contact
// @route PUT /api/contacts/:id
// @access public

const updateContact = async (req, res) => {
    res.status(200).json ({message: `Update Contact for ${req.params.id}`});
};

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// @access public

const deleteContact = async (req, res) => {
    res.status(200).json ({message: `Delete Contact for ${req.params.id}`});
};





module.exports = { getContacts, createContact, getSingleContact, updateContact, deleteContact};