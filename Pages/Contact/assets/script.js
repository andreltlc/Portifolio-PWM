const Parse = require('parse');
Parse.initialize('YQ2WYcuqUMUxfuMCHtJMJ8zFCRICe6NmNkYRmiEY', '9sphafhIdfPX4HelshnPl62qYu803AjaDTz67aQT');
Parse.serverURL = 'https://parseapi.back4app.com/'

async function createParseContact(){
    const contact = new Parse.Object('Contact');
    contact.set('Name', document.getElementById("name").value);
    contact.set('Email', document.getElementById("email").value);
    contact.set('Number', document.getElementById("number").value);
    contact.set('Message', document.getElementById("message").value);

    try {
        const result = await contact.save();
        if (result !== null) {
            alert(
                `Message sended with sucess! Thank you for contact me, ObejectID: ${ 
                    contact.id
                }, ${contact.get("Name")}`
            );
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}
document.getElementById("submit").addEventListener("click", async function (){
    createParseContact();
});