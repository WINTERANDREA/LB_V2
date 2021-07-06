// Get the modal
var modalJobs = document.getElementById("myModal-jobs");

// Get the <span> element that closes the modal
var closeJobs = document.getElementsByClassName("close-jobs")[0];

// Get the <span> element that closes the modal

// When the user clicks the Privacy, open the modal
function getJob() {
  modalJobs.style.display = "flex";
}


// When the user clicks on <span> (x), close the modal
closeJobs.onclick = function () {
  modalJobs.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalJobs) {
    modalJobs.style.display = "none";
  }
}


/* ***************************************************************************** */

var jobsDescription = document.querySelector(".jobs-description")
var jobsForm = document.querySelector(".jobs-form")
var btnJobs = document.querySelector(".btn-jobs")

function openForm(){
  console.log("open Form")
  jobsDescription.style.display ="none"
  jobsForm.style.display ="flex"
  btnJobs.style.display ="none"
}

function goBack(){
  console.log("go back")
  jobsDescription.style.display ="flex"
  jobsForm.style.display ="none"
  btnJobs.style.display ="flex"
}