const API_URL = "https://random-data-api.com/api/name/random_name";

fetch(API_URL)
.then(response => response.json())
.then(data => {

    let element = document.getElementById('app')
    element.innerHTML = `<p>${data.name}</p>`;
    console.log(data);
})
.catch(err => console.log(err));