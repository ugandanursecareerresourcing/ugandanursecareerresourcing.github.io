
function sendMail() {
  Email.send({
      Host : "smtp.gmail.com",
      Username : "K Rein",
      Password : "brainiac2525",
      To : 'krein256@gmail.com',
      From : "rogersbrainiac@gmail.com",
      Subject : "Email from ugncr",
      Body : "Hope it works"
  }).then(
    message => alert(message)
  );
}

