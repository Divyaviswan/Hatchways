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

  //You cannot rebind this in an arrow function. It will always be defined as the context in which it was defined. If you require this to be meaningful you should use a normal function.




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

