function Participant(pName,age,studyFiled){

return({
  //Task1 
    pName,
    age,
    studyFiled,

   
    

//Task2s
   displayInfo()
    {
        console.log("Using Normal function")
        console.log(`${this.pName},${this.age},${this.studyFiled}`);
    },

    //TAsk3

  //We can't use shorthand method in an Arrow function.
  


});

}
const  participantObject=new Participant('Divya',12,'Computer');
participantObject.displayInfo();


//Task4
function updateInfo(pName,propertyValue)
{
return(
{
    [pName] : propertyValue,
    [propertyValue] : pName
    
});
}

