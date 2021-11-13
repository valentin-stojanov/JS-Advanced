const submitBtn = document.getElementById('submit');
const formElement = document.getElementById('form');
const tBodyElement = document.querySelector("#results > tbody");

formElement.addEventListener('submit', onSubmit);
window.addEventListener('load', onLoad);
submitBtn.addEventListener('click', onSubmit)

async function onLoad() {
    //get student info
    const students = await getStudentsInfo();
    // display student info
    tBodyElement.replaceChildren();
    students.forEach(s => tBodyElement.innerHTML += (makeTableRow(s)));
}

async function onSubmit(event) {
    event.preventDefault();

    //get data from input fields
    const fieldsInfo = new FormData(formElement);

    //create studentInfo
    let isCorrectInformation = true;
    const student ={};
    [...fieldsInfo.entries()]
        .forEach(arr => {
            const prop = arr[0];
            const value = arr[1].trim();
            if (value === ''){
                isCorrectInformation = false;
                alert(`${prop} cannot be empty!`);
            }
            student[prop] = value;
        });

    if (isCorrectInformation) {
        await postStudentInfo(student);
        await onLoad();
    }
}

async function postStudentInfo(student){
    const url = 'http://localhost:3030/jsonstore/collections/students';

    const res = await fetch(url, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(student)
    });
}

async function getStudentsInfo() {
    const url = 'http://localhost:3030/jsonstore/collections/students';

    const res = await fetch(url);
    const data = await res.json();

    return Object.values(data);
}

function makeTableRow(student) {
    return document.createElement('tr').innerHTML =
        `<th>${student.firstName}</th>` +
        `<th>${student.lastName}</th>` +
        `<th>${student.facultyNumber}</th>` +
        `<th>${student.grade}</th>`
}
