const contactInfo = {};

function contactBuilder (twitter, linkedIn, email) {
    let newContact = {};
    newContact.twitter = twitter;
    newContact.linkedIn = linkedIn;
    newContact.email = email;
    return newContact;
}

let searchContact = contactBuilder("twitter", "linkedIn", "email");
console.log(searchContact)

const homeInventoryString = JSON.stringify(searchContact)
localStorage.setItem("contact", homeInventoryString)

const storedInventory = localStorage.getItem("contact")
let HomeInventory = JSON.parse(storedInventory)
