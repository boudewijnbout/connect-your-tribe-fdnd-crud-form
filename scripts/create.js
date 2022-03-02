/* Define Elements */
const createStudentForm = document.querySelector('#createStudentForm');
const apiUrl = 'https://tribe.api.fdnd.nl/v1/member';

// Create a submnit listener
createStudentForm.addEventListener('submit', function (e) {

    e.preventDefault();

    // Create a data object with data from the create form.
    let data = {
        "squadId": parseInt(document.querySelector('#squadId').value),
        "type": document.querySelector('#type').value,
        "nickname": document.querySelector('#nickname').value,
        "name": document.querySelector('#name').value,
        "prefix": document.querySelector('#prefix').value,
        "surname": document.querySelector('#surname').value,
        "avatar": document.querySelector('#avatar').value,
        "bio": document.querySelector('#bio').value,
        "githubHandle": document.querySelector('#githubHandle').value,
        "url": document.querySelector('#url').value,
    }

    // Send the form data to the API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(function (res) {
        return res.json;
    }).catch(
        error => console.log(error)
    )
})