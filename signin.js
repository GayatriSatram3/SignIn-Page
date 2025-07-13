let inputText = document.getElementById("inputElement");
let signin = document.getElementById("signInText");
function signInPage(){
    let text = inputText.value;
    let verifyText = "Hi " + text + ", Verifying Your Account........";
    signin.textContent = verifyText;
}