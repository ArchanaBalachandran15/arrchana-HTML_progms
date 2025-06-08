
function validation(){
var name=document.forms["myform"]["name"];
var address=document.forms["myform"]["Address"]
var email=document.forms["myform"]
var x=email.value
var atpos=x.indexOf('@')
var dotpos=x.lastIndexOf('.')
var pwd=document.forms["myform"]["Password"]
var cpwd=document.forms["myform"]["CPassword"]
var sub=document.forms["myform"]["Subject"]
var phn=document.forms["myform"]["Phno"]
var p=phn.value
var gender=document.forms["myform"]["Gender"]
var m=document.forms["myform"]["Gender"][0]
var f=document.forms["myform"]["Gender"][1]


if (name.value==""){
	alert("Name Required")
	name.focus()
	return false;
}
if (address.value==""){
	alert("Address Required")
	address.focus()
	return false;
}
if (pwd.value.length<5){
	alert("Password should contain atleast 5 characters")
	pwd.focus()
	return false;
}
if(cpwd.value!=pwd.value){
	alert("Password mismatch")
	cpwd.focus()
	return false;
}
//a@g.com/in   
if(atpos<1||dotpos<atpos+2||dotpos+3>x.length){
	alert("Please enter a valid email")
	email.focus()
	return false;
}
if ((m.checked==false)&&(f.checked==false))
{
	alert("Please select one gender")
	return false;
}

if (sub.selectedIndex<1){
	alert("Please choose atleast one option")
sub.focus()
	return false;
}
if(p.length!=10)
 {
	alert("Please enter valid number")
	phn.focus()
	return false;
}

}