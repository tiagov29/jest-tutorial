const form = document.forms[0];

form.addEventListener("submit", event => {
    event.preventDefault();
    new FormData(form);
});

document.addEventListener("formdata", event => {
    const body = Object.fromEntries(event.formData.entries());
    const jsonBody = JSON.stringify(body);
    const request = new XMLHttpRequest();
    request.open("POST", "https://jsonplaceholder.typicode.com/users/");
    request.send(jsonBody);
    //get the response
    //don't do it in a real code
    request.onload = function(){
        const jsonResponse = JSON.parse(this.response);
        document.body.innerHTML += `Response from the server: ${jsonResponse.status}`;
    }
});