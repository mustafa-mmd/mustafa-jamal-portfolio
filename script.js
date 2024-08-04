let ul=document.querySelector('ul');
let humburger=document.querySelector('.humburger');
humburger.addEventListener('click',()=>{
  ul.classList.toggle("showData");
  if(ul.className=="showData"){
    document.getElementById("bar").className="fa-solid fa-xmark";
  }
  
    else{
      document.getElementById("bar").className="fa-solid fa-bars";
    }
  }
  
)

//for download cv

    document.querySelector('.butt').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = './images/cv.pdf';  
        link.download = './images/cv.pdf';  // Replace with the desired download filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
  
// script.js
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const serviceID = 'service_p6risr8';
//   const templateID = 'template_ignm64b';
//   const userID = 'mmzgL75P9uPy3JrCb';

//   const templateParams = {
//       name: document.getElementById('name').value,
//       country: document.getElementById('country').value,
//       city: document.getElementById('city').value,
//       email: document.getElementById('email').value,
//       message: document.getElementById('message').value
//   };

//   emailjs.send(serviceID, templateID, templateParams, userID)
//       .then((response) => {
//           alert('Message sent successfully!', response.status, response.text);
//       }, (error) => {
//           alert('Failed to send message. Please try again.', error);
//       });
// });
