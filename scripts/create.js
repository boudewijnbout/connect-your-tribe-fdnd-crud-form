/* Define Elements */
const createStudentForm = document.querySelector('#createStudentForm');
const apiUrl = 'https://tribe.api.fdnd.nl/v1/member';

createStudentForm.addEventListener('submit', function (e) {

    e.preventDefault();

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