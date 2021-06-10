// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the <span> element that closes the modal

// When the user clicks the Privacy, open the modal
function getPrivacy() {
  var x;
  console.log("ciao")
  document.querySelector("#mdlContentTitle").innerHTML = "INFORMATIVA COOKIE E PRIVACY"
  fetch('https://www.liberobit.it/TemplateHtml/col-privacy_it-IT.html')
  .then(response => response.text())
  .then(data => {
    console.log(data)
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(data, "text/html");
    const section = htmlDocument.documentElement.querySelector(".col-privacy").innerHTML;
   
    document.querySelector("#mdlContentBody").innerHTML = section
  } );

  
  modal.style.display = "block";
}

// When the user clicks the Note Legali, open the modal
function getLegal() {
  console.log("ciao note")
  document.querySelector("#mdlContentTitle").innerHTML = "NOTE LEGALI"
  fetch('https://www.liberobit.it/TemplateHtml/col-legal_it-IT.html')
  .then(response => response.text())
  .then(data =>{
    console.log(data)
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(data, "text/html");
    const section = htmlDocument.documentElement.querySelectorAll(".row")[1].innerHTML;

    document.querySelector("#mdlContentBody").innerHTML = section
  });
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}