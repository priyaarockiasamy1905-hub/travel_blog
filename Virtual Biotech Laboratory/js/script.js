const experiments = [

   {
      name: "PCR",
      page: "pcr.html"
   },

   {
      name: "DNA Isolation",
      page: "dna.html"
   },

   {
      name: "Gel Electrophoresis",
      page: "gel.html"
   },

   {
      name: "ELISA",
      page: "elisa.html"
   },

   {
      name: "Cell Culture",
      page: "CellCulture.html"
   },

   {
      name: "Chromatography",
      page: "Chromatography.html"
   },

   {
      name: "Staining Technique",
      page: "staining.html"
   }
];

function showSuggestions(){

   let input = document.getElementById("searchBox")
   .value.toLowerCase();

   let suggestions =
   document.getElementById("suggestions");

   suggestions.innerHTML = "";

   if(input === ""){

      return;
   }

   experiments.forEach(function(exp){

      if(exp.name.toLowerCase().includes(input)){

         suggestions.innerHTML +=

         `<div class="suggestion-item"

         onclick="openPage('${exp.page}')">

         ${exp.name}

         </div>`;
      }
   });
}

function openPage(page){

   window.location.href = page;
}

function showMessage(event){

   event.preventDefault();

   alert("Message Sent Successfully!");
}