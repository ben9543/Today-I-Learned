function ceo() {
    console.log("CEO: Let's make a dent in the universe");
    cto();
}

function cto() {
    console.log("CTO: Let's make a gamechanging product");
    engineer();
}

function engineer() {
    console.log("Engineer: Let's make a new js framework");
    techLead();
}

function techLead() {
    console.log("Tech Lead: Let's ditch Google, Amazon, Facebook");
    developer();
}
function developer() {
    console.log("Developer: Let's copy Stackoverflow");
    throw new Error("Developer Error");
}
ceo();
