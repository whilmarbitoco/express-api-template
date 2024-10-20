async function validateUsername(username) {
    return username != null && username.length > 0
}

async function validatePassword(password) {
    return password != null && password.length > 0
}

async function validateEmail(email) {
    return email != null && email.length > 0
}

async function validate(username, email, password) {
    return await validateUsername(username) && await validateEmail(email) && await validatePassword(password)
    
}

module.exports = {
   validate,
   validateUsername,
   validateEmail,
   validatePassword
}