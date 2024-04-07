const loginForm = document.getElementById("login-form");
const users = 
[
    {username: "Tung1" , password: "123456"},
    {username: "Tung2" , password: "1234567"},
    {username: "Tung3" , password: "12345"},
]
function handleSubmit(event)
{
    event.preventDefault();
    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;
    const user = user.find ((user) => user.username === username && user.password === password);
    if (user)
    {
        alert("Login successful!");
        window.location.href = "homepage.html"; // Change 'homepage.html' to your actual homepage URL
    }
    else
    {
        alert("Invalid username or password. Please try again.");
    }
    loginForm.reset();
}
loginForm.addEventListener("submit", handleSubmit);