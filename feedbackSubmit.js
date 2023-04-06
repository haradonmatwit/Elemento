document.getElementById("feedback-form").addEventListener("submit", function (event) {
   event.preventDefault();
   var form = event.target;
   var formData = new FormData(form);
   fetch('submit.php', {
      method: 'POST',
      body: formData
   })
      .then(response => console.log(response.text()))
      .then(data => console.log(data))
      .catch(error => console.error(error))
});