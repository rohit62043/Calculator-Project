let button=document.getElementsByClassName("button");
let display=document.getElementById("textDisplay");
let operator=null;
let operand1=0;
let operand2=null;
// display.innerText=0;

for (var i=0;i<button.length;i++) {
      button[i].addEventListener('click',function(){
             let value=this.getAttribute('data-value');
             let text=display.textContent.trim();
             if (value=='+') {
                operator='+';
                operand1=parseFloat(text);
                display.innerText="";
             }
             else if (value=='-') {
                operator='-';
                operand1=parseFloat(text);
                display.innerText="";
             }
             else if (value=='/') {
                operator='/';
                operand1=parseFloat(text);
                display.innerText="";
             }
             else if (value=='*') {
                operator='*';
                operand1=parseFloat(text);
                display.innerText="";
             }
             else if (value=='%') {
                operand1=parseFloat(text);
                operand1=operand1/100;
                display.innerText=operand1;
             }
             else if (value=='.') {
                if(text.length && !text.includes('.')){
                    text=text+'.';
                    display.innerText=text;
                }
             }
             else if (value=='=') {
                operand2=parseFloat(text);
                if (operator=='/' && operand2==0) {
                    display.innerText="Error";
                }else{
                let result=eval(operand1+" "+operator+" "+operand2);
                display.innerText=result;
                }

                if (result) {
                    display.textContent = result;
                    operand1 = result;
                    operand2 = null;
                    operator = null;
                }
             }
             else if (value=='sign') {
                operand1 = parseFloat(text);
                operand1 = -1 * operand1;
                display.innerText = operand1;

             }
             else if (value=='AC') {
                display.innerText="";
             }
             else{
                display.innerText+= value;
             }

      });
}