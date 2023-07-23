let button = document.getElementById("btn");
button.addEventListener("click",function(){
    let d= document.getElementById("dateofbirth").value;
   
    if(d===""){
        alert("please enter the date of birth");
    }
    else{
        let currentdate = new Date();
        let dateofbirth = new Date(d);
       let month1=currentdate.getMonth()-dateofbirth.getMonth();
    
       let year1= currentdate.getFullYear()-dateofbirth.getFullYear();
       if(month1<0){
        month1=month1*(-1);
       }
       document.getElementById("result").innerHTML=`You Are ${year1} Years and ${month1} Months Old `;
       
    }

});