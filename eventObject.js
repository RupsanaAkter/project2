/*------------------
const input=document.querySelector('input');
input.addEventListener('change',changHandler);

function changHandler(e){
console.log('changed');
}
--------------------*/


/*----------------
const programs=document.querySelectorAll('input[name=program]');
Array.from(programs).map((program)=>{
    program.addEventListener("change",programHandler);
});

function programHandler(e){
if (e.target.checked){
    console.log(e.target.value);
}
}
---------------------*/



const department=document.getElementById('department');
department.addEventListener('change',handleDepartment);
function handleDepartment(e){
console.log(e.target.value);
}