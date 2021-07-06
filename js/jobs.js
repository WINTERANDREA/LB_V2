// Get the modal
var modalJobs = document.getElementById("myModal-jobs");

// Get the <span> element that closes the modal
var closeJobs = document.getElementsByClassName("close-jobs")[0];

// Get the <span> element that closes the modal

// When the user clicks the Privacy, open the modal
function getJob(role, svg, id) {
  var formPosition = document.querySelector(".jobs-role")
  var formImg = document.querySelector(".jobs-img")
  var formRequisiti = document.querySelector("#requisiti")
  formPosition.innerHTML = role
  formImg.setAttribute("src", svg)
  formRequisiti.innerHTML = requisiti(id)
  console.log(role, svg, id)
  modalJobs.style.display = "flex";
}


// Inserisci requisiti
function requisiti(id){
  var testoRequisiti = ""
  if(id === "job-1"){
    testoRequisiti = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae provident, culpa, sint architecto mollitia
              quo ratione inventore dolores iste, id reiciendis. Dolorem consectetur, architecto blanditiis natus modi
              ducimus expedita vero, accusantium distinctio adipisci dolore temporibus. Numquam, et, voluptatum unde
              itaque maiores aut totam, voluptatibus dignissimos necessitatibus asperiores natus saepe minus est odio.
              Consequatur iste aut maiores, earum nisi cum similique labore porro facilis pariatur, mollitia odit
              voluptates et tempore ex doloremque ipsa quasi sint repudiandae, accusantium maxime id nesciunt. Quisquam
              voluptates nisi, laudantium accusantium aperiam repellendus quas adipisci beatae dolore praesentium? In
              error, sed recusandae tenetur nostrum voluptatum repellat veritatis ipsum commodi quidem natus dolorem
             s, vel illo
              similique harum repellendus eligendi consequuntur est soluta assumenda. Maxime, mollitia! Nobis numquam
              nesciunt voluptates pariatur repudiandae perspiciatis dolore repellat laboriosam reprehenderit facere
              aspernatur commodi eveniet inventore quaerat necessitatibus sit reiciendis voluptatibus, ea doloribus esse
              obcaecati vel aperiam ipsa. Laborum non repellendus id est blanditiis ratione labore asperiores assumenda,
              autem ducimus fugit unde perferendis sed rerum debitis excepturi consectetur eveniet velit quibusdam nisi
              tempora obcaecati, voluptas quam. Minus iusto quas corporis, facere nobis soluta sit, reiciendis
              voluptate, nulla explicabo itaque ut delectus. Corrupti assumenda optio unde, dolor fugit magnam ipsa
              rerum voluptas laudantium voluptatum possimus temporibus veniam ab exercitationem cum quod deserunt
              consequatur placeat? Dolorem ipsum deleniti reiciendis cumque, nam hic odio, pariatur blanditiis eos
              doloremque explicabo animi, voluptates impedit eum? Magni culpa saepe voluptates ad dolorum, eos`
  } else if ( id === "job-2"){
    testoRequisiti = ` odio voluptas cumque alias suscipit veniam velit doloribus enim beatae labore modi aliquam? Libero
              perferendis a consectetur quibusdam sed perspiciatis fugiat est mollitia sint cupiditate totam aperiam
              repellat dicta dolorem laudantium quos laborum velit voluptatem, eius commodi officiis possimus nihil
              ducimus odit. Earum quae animi cupiditate, pariatur ducimus libero ipsa nulla nesciunt deleniti inventore
              incidunt quia expedita, similique corporis beatae. Dolor veniam minus repudiandae quisquam vel! Mollitia
              quae repellat deleniti eveniet optio voluptates itaque autem consequuntur similique ullam incidunt
              recusandae, maxime vero quibusdam inventore temporibus, neque a, quia architecto corporis? Ad pariatur
              quam quasi obcaecati quis repellat, minima iure tempora nihil doloribus, illum adipisci beatae ab alias
              voluptate nobis, rem nisi? Officiis, maiores nisi iusto odit laudantium quibusdam fuga harum, magni soluta
              debitis ducimus aliquid explicabo ex atque, veritatis distinctio ab voluptates delectus quos. Alias,
              quibusdam magni quos error optio magnam unde nihil iste incidunt molestias sapiente quod esse provident!
              Quasi officiis alias fugiat voluptate quia perferendis distinctio earum repellat numquam dolore`
  }else if ( id === "job-3"){
    testoRequisiti = ` Dolor veniam minus repudiandae quisquam vel! Mollitia
              quae repellat deleniti eveniet optio voluptates itaque autem consequuntur similique ullam incidunt
              recusandae, maxime vero quibusdam inventore temporibus, neque a, quia architecto corporis? Ad pariatur
              quam quasi obcaecati quis repellat, minima iure tempora nihil doloribus, illum adipisci beatae ab alias
              voluptate nobis, rem nisi? Officiis, maiores nisi iusto odit laudantium quibusdam fuga harum, magni soluta
              debitis ducimus aliquid explicabo ex atque, veritatis distinctio ab voluptates delectus quos.Dolor veniam minus repudiandae quisquam vel! Mollitia
              quae repellat deleniti eveniet optio voluptates itaque autem consequuntur similique ullam incidunt
              recusandae, maxime vero quibusdam inventore temporibus, neque a, quia architecto corporis? Ad pariatur
              quam quasi obcaecati quis repellat, minima iure tempora nihil doloribus, illum adipisci beatae ab alias
              voluptate nobis, rem nisi? Officiis, maiores nisi iusto odit laudantium quibusdam fuga harum, magni soluta
              debitis ducimus aliquid explicabo ex atque, veritatis distinctio ab voluptates delectus quos. Alias,
              quibusdam magni quos error optio magnam unde nihil iste incidunt molestias sapiente quod esse provident!
              Quasi officiis alias fugiat voluptate quia perferendis distinctio earum repellat numquam dolore`
  }else if ( id === "job-4"){
    testoRequisiti = ` Officiis, maiores nisi iusto odit laudantium quibusdam fuga harum, magni soluta
              debitis ducimus aliquid explicabo ex atque, veritatis distinctio ab voluptates delectus quos. Alias,
              quibusdam magni quos error optio magnam unde nihil iste incidunt molestias sapiente quod esse provident!
              Quasi officiis alias fugiat voluptate quia perferendis distinctio earum repellat numquam dolore Dolor veniam minus repudiandae quisquam vel! Mollitia
              quae repellat deleniti eveniet optio voluptates itaque autem consequuntur similique ullam incidunt
              recusandae, maxime vero quibusdam inventore temporibus, neque a, quia architecto corporis? Ad pariatur
              quam quasi obcaecati quis repellat, minima iure tempora nihil doloribus, illum adipisci beatae ab alias
              voluptate nobis, rem nisi? Officiis, maiores nisi iusto odit laudantium quibusdam fuga harum, magni soluta
              debitis ducimus aliquid explicabo ex atque, veritatis distinctio ab voluptates delectus quos. Alias,
              quibusdam magni quos error optio magnam unde nihil iste incidunt molestias sapiente quod esse provident!
              Quasi officiis alias fugiat voluptate quia perferendis distinctio earum repellat numquam dolore`
  } else{
    testoRequisiti = "JOB ELSE"
  }
  return testoRequisiti
}


// When the user clicks on <span> (x), close the modal
closeJobs.onclick = function () {
  modalJobs.style.display = "none";
  goBack()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalJobs) {
    modalJobs.style.display = "none";
    goBack()
  }
}


/* ***************************************************************************** */

var jobsDescription = document.querySelector(".jobs-description")
var jobsForm = document.querySelector(".jobs-form")
var btnJobs = document.querySelector(".btn-jobs")

function openForm(){
  var x = document.querySelector(".jobs-role").innerHTML
  document.querySelector("#fprofile").value = x
  console.log("open Form", x)
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