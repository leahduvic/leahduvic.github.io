// const contactInfo = {};

// function contactBuilder (twitter, linkedIn, email) {
//     let newContact: {};
//     newContact.twitter: href="https://twitter.com/leaheduvic?lang=en";
//     newContact.linkedIn: href="https://www.linkedin.com/in/leah-duvic-994a3a78/";
//     newContact.email: href="mailto:leaheduvic@gmail.com";
//     return newContact;
// }

// let populateContact = contactBuilder("twitter", "linkedIn", "email");

// populateContact.push(contactBuilder)

const contactInfo = {
	"twitter": "href=\"https://twitter.com/leaheduvic?lang=en\"",
	"linkedIn": " href=\"https://www.linkedin.com/in/leah-duvic-994a3a78/\"",
	"email": " href=\"mailto:leaheduvic@gmail.com\""
}

const contactString = JSON.stringify(contactInfo)
localStorage.setItem("contact", contactString)