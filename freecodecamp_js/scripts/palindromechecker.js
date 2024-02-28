const input=document.getElementById('text-input');
const result=document.getElementById('result');
const validInput=document.getElementById('check-btn').addEventListener('click',()=>{
    if(input.value===""){
    alert("Please input a value");
    }
    const cleaninput=input.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseinput=cleaninput.split('').reverse().join('');
    // console.log(cleaninput);
    // console.log(reverseinput);
    if(cleaninput===reverseinput){
        result.innerText=`${input.value} is a palindrome`;
    }
    else{
        result.innerText=`${input.value} is not a palindrome`;
    }
})
