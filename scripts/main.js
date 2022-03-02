// Define Elements
const studentTable = document.querySelector('table');

const apiUrl = 'https://tribe.api.fdnd.nl/v1/member';
const tribeId = 1;

fetch(apiUrl)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const students = data.data.filter((student) => student.squadId === 1);

        // Call Functions
        fillStudentTable(students);
    })

function fillStudentTable(students) {
    students.forEach(student => {

        studentTable.insertAdjacentHTML('beforeend',
            `
            <tr>
            <td>
                <img src="${student.avatar}">
           </td>
           <td>
                <a href="#">${student.name}</a>
            </td>
            <td>
                <a href="#">${student.surname}</a>    
            </td>
            <td>
                <p>></p>
            </td>
            </tr>
        `
        )
    })
}
