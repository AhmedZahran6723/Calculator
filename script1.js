function multiply()
{
    var x=window.text.value;
    var y=window.text1.value;
    var z=x*y;
    document.getElementById("write").innerHTML=z;
}
function addition()
{
    var x=window.text.value;
    var y=window.text1.value;
    var z=+x + +y;/* convert a string to a number by using the unary + operator.*/
    document.getElementById("write").innerHTML=z;
}
function divition()
{
    var x=window.text.value;
    var y=window.text1.value;
    var z=x/y;
    document.getElementById("write").innerHTML=z;
}
function subtraction()
{
    var x=window.text.value;
    var y=window.text1.value;
    var z=x-y;
    document.getElementById("write").innerHTML=z;
}
/************************************************************/ 
function backspace()
{
    var prevalue=formclass.answer.value;
    formclass.answer.value=prevalue.substr(0,prevalue.length-1);
}
function fnsin()
{
    formclass.answer.value=Math.sin(formclass.answer.value);
}
function fncos()
{
    formclass.answer.value=Math.cos(formclass.answer.value);
}
function fntan()
{
    formclass.answer.value=Math.tan(formclass.answer.value);
}
function sqrt()
{
    formclass.answer.value=Math.sqrt(formclass.answer.value,0.5);
}
function square()
{
    formclass.answer.value=Math.pow(formclass.answer.value,2);
}
document.querySelectorAll('input[type=button]').forEach(function(e) {
    e.addEventListener('click', function() {
      this.style.backgroundColor = "#676713";
      this.style.color="#000";
    })
  });
