 const subtotal = document.getElementById('subtotal');
 const getTotalClassPrice = totalClassPrice;
 console.log(getTotalClassPrice);
 function updateClass (isIncrease){
     const updateFirstClass = document.getElementById('update-first-class');
     let updateInputValue =  updateFirstClass.value;
     if(isIncrease == true){
          updateInputValue = parseInt(updateInputValue) + 1 ;
     }
     else if(updateInputValue > 0 ){
          updateInputValue = parseInt(updateInputValue) - 1;

     }
     updateFirstClass.value = updateInputValue;
     const totalClassPrice = updateInputValue * 150;
     return totalClassPrice;
      
 }
 

 document.getElementById('first-class-increment').addEventListener('click', function(){
      updateClass(true);
       updateSubtotal();
 })
 
 document.getElementById('first-class-decrement').addEventListener('click', function(){
      updateClass(false);
 })

 function updateEconomy(isIncrease){
      const updateEconomy = document.getElementById('update-economy');
     let updateEconomyValue =  updateEconomy.value;
     if(isIncrease == true){
          updateEconomyValue = parseInt(updateEconomyValue) + 1 ;
     }
     else if(updateEconomyValue > 0 ){
          updateEconomyValue = parseInt(updateEconomyValue) - 1;

     }
     updateEconomy.value = updateEconomyValue;
     subtotal.innerText = updateEconomyValue * 100;
      
 }
 document.getElementById('economy-class-increment').addEventListener('click', function(){
      updateEconomy(true);
      
 })
  document.getElementById('economy-class-decrement').addEventListener('click', function(){
      updateEconomy(false);
      
 })

 function updateSubtotal (){
        const subtotalPrice = totalClassPrice;
        console.log(subtotalPrice);
        return subtotalPrice;
 }