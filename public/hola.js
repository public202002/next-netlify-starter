alert("hola")

fetch('/.netlify/functions/saveText', {
    method: 'POST',
    body: JSON.stringify({ text: "Toto je můj text" }),
})
.then(response => response.json())
.then(data => console.log(data));
