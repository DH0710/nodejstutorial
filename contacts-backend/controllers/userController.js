
// @desc Register a user
// @route POST /api/users/register
// @access public 


const registerUser = asyncHandler (async (req, res) => {
    res.json({ message: "Register the user"})
});


// @desc Register a user
// @route POST /api/users/login
// @access public 

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login the user"})
});

module.exports = {registerUser, loginUser }