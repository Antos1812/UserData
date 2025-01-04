document.getElementById("user-form").addEventListener("submit", function (event) {
    
    event.preventDefault();
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
        console.log("User added", data);
        loadUsers();
    })
    .catch(error => console.error("Error:", error));
});

function loadUsers(){
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById("users");
        userList.innerHTML = "";
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = 
            `ID: ${user.id} - Name:  ${user.name} - Email:  ${user.email}`;
            userList.appendChild(listItem);
        });
    })
    .catch(error => console.error("Error:", error));
}
loadUsers();