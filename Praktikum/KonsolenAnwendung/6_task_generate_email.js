function writeSubject(name) {
    // log the subject containing a title and the name
}

function writeBody(isCool) {
    // log the body containing a text
    // if the user is cool then log an additional text for cool people
}

function WriteEmail(name, isCool) {
    writeSubject(name);
    writeBody(isCool);
}

// Tests
console.log("Writing an Email for Anton:");
console.log("---------------------------------------------------------------------------");

WriteEmail("Anton", true);

console.log("---------------------------------------------------------------------------");

console.log("Writing an Email for Bilbo:");
console.log("---------------------------------------------------------------------------");

WriteEmail("Bilbo", false);

console.log("---------------------------------------------------------------------------");