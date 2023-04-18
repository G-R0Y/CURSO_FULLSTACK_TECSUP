const userName = document.getElementById("userName")
const btn = document.getElementById("btn")


userName.addEventListener('keyup', (event) => {
    console.log(event.target.value);
});


btn.addEventListener("click", (event) => {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " +localStorage.getItem("token")
        },
        body: JSON.stringify({ userName, password })
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
    // console.log({ userName, password })
})