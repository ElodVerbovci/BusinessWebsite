
/* Scroll Effects */

function scrollToElement (elementSelector, instance = 0) {

  const elements = document.querySelectorAll(elementSelector);

  if(elements.length > instance){
    elements[instance].scrollIntoView ({behavior:'smooth'});
  }
}


const home = document.getElementById("home-link");
const about = document.getElementById("about-link");
const career = document.getElementById("career-link");
const contact = document.getElementById("contact-link");

home.addEventListener('click' , () => {
scrollToElement('.sectionD');
});


about.addEventListener('click' , () => {
  scrollToElement('.sectionE');
  });

  career.addEventListener('click' , () => {
    scrollToElement('.section4');
    });

    contact.addEventListener('click' , () => {
      scrollToElement('.right-footer');
      });




/* Menu Open */
document.addEventListener("DOMContentLoaded", function () {
  const openMenuButton = document.querySelector(".open-menu");
  const menu = document.querySelector(".menu");


  openMenuButton.addEventListener("click", function () {
    openMenuButton.classList.toggle("active"); 
    menu.classList.toggle("active"); 
});


function scrollToSection(targetId) {
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1); 
      scrollToSection(targetId);
      
      openMenuButton.classList.remove("active");
      menu.classList.remove("active");
  });
});
});


// Notification Email //

function SendMail() {
  var params = {
    email_id: document.getElementById("email_id").value
  };

  console.log("Email parameters:", params);

  // Make sure to replace the placeholders below with your actual emailjs service and template IDs
  emailjs.send("service_6wxj1bq", "template_xxofjjc", params)
    .then(function (res) {
      console.log("Email sent successfully!", res);
      alert("Successfully sent a Notification! " + res.status);
    })
    .catch(function (error) {
      console.error("Email sending failed:", error);
    });
}