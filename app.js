const a = 4;
const screen = document.getElementById('screen')
let buttons = document.getElementsByClassName('btn');

const allClear = document.getElementById('ac') 
const equalBtn = document.getElementById('equal')
let result = '';


const returnValue=(e)=>{
    screen.value += e.target.value;
     result+=e.target.value;
    
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', returnValue)     
}

allClear.addEventListener('click',()=>{
    result='';
    screen.value = '';
});

equalBtn.addEventListener('click',()=>{
result=eval(result);     
screen.value =result;
})


