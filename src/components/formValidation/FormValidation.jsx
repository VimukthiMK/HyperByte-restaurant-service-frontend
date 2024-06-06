

const FormValidation = (name,address,telephone) => {
        const errors = {}
        if (!name || name.length < 3 || name.length > 100) {
            errors.name = 'Name must be between 3 and 100 characters.'
        }
        if (!address || address.length < 10 || address.length > 200) {
            errors.address = 'Address must be between 10 and 200 characters.'
        }
        const phonePattern = /^[0-9]{10,15}$/
        if (!telephone || !phonePattern.test(telephone)) {
            errors.telephone = 'Telephone must be a valid number between 10 and 15 digits.'
        }
        return errors
 
}

export default FormValidation
