function sum() {
    const num1 = 100;
    const num2 = 40;
    const answer = num1 + num2;
    console.log("The sum is ", answer);
}

function calculateGrades() {

    let Grade1 = parseInt(document.getElementById('grade1').value) || 0;
    let Grade2 = parseInt(document.getElementById('grade2').value) || 0;
    let Grade3 = parseInt(document.getElementById('grade3').value) || 0;
    let Grade4 = parseInt(document.getElementById('grade4').value) || 0;
    let Grade5 = parseInt(document.getElementById('grade5').value) || 0;

    let total = grade1 + grade2 + grade3 + grade4 + grade5;

    let grades = [grade1, grade2, grade3, grade4, grade5];
    grades.sort((a,b) => a - b);

    document.getElementById('total').innerText = "Total: " + total;
    document.getElementById('arranged').innerText = "Arranged Grades: " + grades.join(', ');
}