let text=document.getElementById('text');
buttons=document.querySelectorAll('button');
let screenValue='';
for (item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if (buttonText=='=') {
            text.value=eval(screenValue)
        }
        else if (buttonText=='C') {
            screenValue='';
            text.value=screenValue;
        }
        else if (buttonText=='x') {
            screenValue+='*'
            text.value=screenValue;
        }
        else{
            screenValue+=buttonText;
            text.value +=buttonText;
        }
        
    })
}