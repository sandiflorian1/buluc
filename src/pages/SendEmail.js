export default function sendEmail() {
    debugger
    Email.send({
        Host: "smtp.gmail.com",
        Username: "florianmaa@gmail.com",
        Password: "Nuntaincer2234!",
        To: 'florianmaa@gmail.com',
        From: "sandi.florian@yahoo.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}