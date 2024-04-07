var OrignalText ="I love my country Pakistan. <br> I love my city Faisalabad.<br> I love my Homeland."

var cities =['Faisalabad','Lahore','Karachi','Islamabad','Burewala', 'Sheikpura','Kashmir'];

  
document.getElementById("OrignalTextBox").innerHTML = OrignalText




   // LowerCase Text

   function lowerCase() {
   let lowerCaseText = OrignalText.toLowerCase();
   
   document.getElementById("Output").innerHTML = lowerCaseText;
}

   //  Uppercase Text 


    function uperCase() {
    let lowerCaseText = OrignalText.toUpperCase();

    document.getElementById("Output").innerHTML = lowerCaseText;
   }
   
   //  Capitaize Text 
   function capitalizetext(){
      
      document.getElementById("Output").style.textTransform = "capitalize";
      document.getElementById("Output").innerHTML = OrignalText;
   }
   
   // Print All Cities
   
   function printAllCities(){
   
       document.getElementById("Output").innerHTML=""
   
       for(let i = 0; i < cities.length; i++){
           let num = i + 1;
           document.getElementById("Output").innerHTML += num + ') ' + cities[i] + '<br>';
       }
       
   }
   // Add your city name

   function addCity(){
      let city= document.getElementById("InputText").value;
  
      if(city.length<3){
          alert("Please type your city name correctly");
          return;
      }

      let cityFirstLetter = city.charAt(0).toUpperCase();
      let cityAllLetters = city.slice(1).toLowerCase();

      let cityWordInCapitalize = cityFirstLetter + cityAllLetters

      let cityFound = false

      for( let i = 0; i < cities.length; i++){
         
        if(cities[i] === cityWordInCapitalize){

            cityFound = true
            let html= '<span style="color: red;">" ' + cityWordInCapitalize + ' " </span> is already in the list.';
            document.getElementById("Output").innerHTML = html;
        }
      }

      if(cityFound === false){

        cities.push(cityWordInCapitalize);
        let html= '<span style="color: green;">" ' + cityWordInCapitalize + ' " </span> has been successfully added in the list.';
        document.getElementById("Output").innerHTML = html;

      }
  
  }

  
  //Better Formatting
  function betterFormatting(){
      let text = document.getElementById("InputText").value;
      if(!text){
          alert("Please type your text")
          return;
        }
        
        text = text.toLowerCase();
        document.getElementById("Output").style.textTransform = "capitalize";
        document.getElementById("Output").innerHTML = text;
    }
    
    // Check Your city in list
  
    function checkYourCity(){
       let city= document.getElementById("InputText").value;
   
       if(!city){
           alert("Please type your city name ");
           return;
       }
  
       let cityFirstLetter = city.charAt(0).toUpperCase();
       let cityAllLetters = city.slice(1).toLowerCase();
  
       let cityWordInCapitalize = cityFirstLetter + cityAllLetters
  
       let cityFound = false
  
       for( let i = 0; i < cities.length; i++){
        
           if(cities[i] === cityWordInCapitalize){
   
               cityFound = true
               let html= '<span style="color: red;">" ' + cityWordInCapitalize + ' " </span> is already in the list.';
               document.getElementById("Output").innerHTML = html;
           }
       }
  
       if(cityFound === false){
  
           cities.push(cityWordInCapitalize);
           let html= "Sorry We Couldn\"t find your city <span style='color: red;'>'" + cityWordInCapitalize + '"</span> in list. <br> Click<span style="color: red;">Add your City In the List</span> to add your city;' 
           document.getElementById("Output").innerHTML = html;
   
         }
   }

 // Find word this Word

 function findWord(){
    let word = document.getElementById("InputText").value;
    if (!word) {
        alert("please enter word correctly")
        return;
    }
    word = word.toLowerCase();
    let newOriginalText = OrignalText.toLowerCase()
    let findWord = newOriginalText.indexOf(word)
    if (findWord !== -1) {
        document.getElementById("Output").innerHTML = `This word found at index: ${findWord}`
    } else {
        document.getElementById("Output").innerHTML = `This word is not found`
    }
}

 // Replace this word 

  function replaceWord(){
    let currentWord = document.getElementById("InputText").value;
    if (!currentWord) {
        alert("please enter a word correctly")
        return;
}
    let newWord = prompt("please enter new word")
    if (!newWord) {
        alert("please enter a new word correctly")
        return;
    }
    currentWord = currentWord.toLowerCase();
    newWord = newWord.toLowerCase();
    let newOriginalText = OrignalText.toLowerCase()
    currentWord = new RegExp(currentWord, "g")
    let replaceWord = newOriginalText.replace(currentWord, newWord) 
    document.getElementById("Output").innerHTML = replaceWord ;

}

    
    // Clear Input
    function clearInput(){
        document.getElementById("InputText").value=""
    }
    
   // Clear Output
   function clearOutput(){
    document.getElementById("Output").innerHTML=""
 }