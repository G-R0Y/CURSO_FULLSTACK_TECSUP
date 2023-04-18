
const userList = document.getElementById("users_list")
const loader = document.getElementById("loader")


const getUsers = async () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'GET', // *GET, POST, PUT, DELETE
        headers: {
            Authorization: "beareb asdsadnfkjs.lkffñlkfsdkfñdsf.fdsof",
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            userData(data)
        });

    // const response = await fetch("https://jsonplaceholder.typicode.com/users")
    // const json =await response.json();
    // console.log("con metodo await",json)
}


const userData = (datos) => {

    datos.forEach((user, i) => {

        const userHTML = `

            <div class="card">
                <p>${user.name}</p>
                <p>${user.email}</p>
                <p>${user.phone}</p>
                <button type="button" class="profile">Show profile</button>
            <div/>
            `
        userList.innerHTML += userHTML

    })

    loader.style.display = "none"
}






getUsers()

