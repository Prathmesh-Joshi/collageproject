// JavaScript to preview uploaded profile image
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const output = document.getElementById('profilePic');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
    function previewImage(event) {
        const reader = new FileReader();
        reader.onload = function () {
            const output = document.getElementById('profilePic');
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    // Validation function for the form
    function validateForm() {
        let isValid = true;

        // Get all form elements
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const contactNumber = document.getElementById('contactNumber');
        const city = document.getElementById('city');
        const state = document.getElementById('state');

        // Reset previous error messages
        clearErrors();

        // First Name Validation
        if (firstName.value.trim() === '') {
            showError(firstName, 'First Name is required');
            isValid = false;
        }

        // Last Name Validation
        if (lastName.value.trim() === '') {
            showError(lastName, 'Last Name is required');
            isValid = false;
        }


        // Contact Number Validation (accepts digits and optional + for international numbers)
        const contactPattern = /^[\d+]{10,15}$/;
        if (contactNumber.value.trim() === '') {
            showError(contactNumber, 'Contact Number is required');
            isValid = false;
        } else if (!contactPattern.test(contactNumber.value.trim())) {
            showError(contactNumber, 'Invalid contact number format');
            isValid = false;
        }

        // City Validation
        if (city.value.trim() === '') {
            showError(city, 'City is required');
            isValid = false;
        }

        // State Validation
        if (state.value.trim() === '') {
            showError(state, 'State is required');
            isValid = false;
        }
        return isValid;
    }

    // Show error message for a specific input
    function showError(inputElement, message) {
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error');
        errorMessage.textContent = message;
        inputElement.parentElement.appendChild(errorMessage);
    }

    // Clear previous error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(error => {
            error.remove();
        });
    }

    // Add event listener for form submission
    document.querySelector('.save-btn').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        if (validateForm()) {
            alert('Profile saved successfully');
            // You can add additional logic for saving the profile data here
        }
    });