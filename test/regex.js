const regex = /medium\.com/;
const myString = "https://prannavpanta.medium.com/my-first-blog/12423";

if(!regex.test(myString)){
    alert("Invalid URL!!! i guess... hehe");
}else{
    window.open(toRedirectURL, '_blank');
};