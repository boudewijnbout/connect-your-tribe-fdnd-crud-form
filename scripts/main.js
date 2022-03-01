// Define Elements
const studentTable = document.querySelector('table');

const apiUrl = 'https://tribe.api.fdnd.nl/v1/member';

// Active Functions
fillStudentTable()

fetch(apiUrl)
    .then((res) => {
        return res.json();
    });

async function fillStudentTable(res) {
    res.forEach(member => {
        console.log(member);
    })
}