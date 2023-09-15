
function sendMail() {
  Email.send({
  }).then(
    message => alert(message)
  );
}

