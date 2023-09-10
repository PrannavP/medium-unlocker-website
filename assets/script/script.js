const userInput = document.getElementById('userlink');
const button = document.getElementById('submit');

const mediumUnlockerLink = "https://medium-unlocker.onrender.com/unlock/?url=";

const mainFnc = (link) =>{
    const toRedirectURL = `${mediumUnlockerLink}${link}`;

    console.log(toRedirectURL); // it works :D

    // URL validation
    const regex = /medium\.com/;
    const userURL = link;

    if(!regex.test(userURL)){
        alert("Invalid URL!!! i guess... hehe");
    }else{
        window.open(toRedirectURL, '_blank');
    };
};

button.addEventListener('click', function() {
    const argValue = userInput.value;
    mainFnc(argValue);
});