alert("hello world!!!");

console.log("hello javascript!!");

var a=prompt("Enter number:");
if(a==45){
    console.log("You have entered number 45.");
}
else{
    console.log("You haven't entered number 45.");
}

var bg=confirm("Click OK if you want to change background color red.");
if(bg){
    document.body.style.backgroundColor="red";
    console.log("changed")
}