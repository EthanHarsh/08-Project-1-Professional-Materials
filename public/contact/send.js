//get the form by its id
const form = document.getElementById("contact-form"); 
console.log('form: ' + form)
//1.
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  //2.
  let mail = new FormData(form);
  console.log(mail);
  //3.
  const sendMail = (mail) => {
    //1.
    console.log('sending!')
    fetch("/send", {
      method: "post", //2.
      body: mail, //3.
    }).then((response) => {

      return response.json();
    });
  };
  
})
