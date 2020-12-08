const dashboardWarning = document.querySelector("#dashboardWarning");
const dashboard = document.querySelector("#dashboard");
const greeting = document.querySelector("#greeting");

const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const userImage = document.querySelector("#userImage");



const setupUI = (user) => {
    if (user) {
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}


const setUpDashboardPage = (user) => {
	if (user) {
        // toggle form warning and form content
        greeting.innerHTML += ", " + user.displayName;
        userImage.src = user.photoURL;
		dashboardWarning.innerHTML = "";
		dashboardWarning.style.display = "none";
        dashboard.style.display = "block";
        
        console.log(user);
	} else {
        console.log(user);
		dashboardWarning.style.display = "block";
		dashboardWarning.innerHTML = "<h1>Please login to view the user dashboard</h1>";
		dashboard.style.display = "none";
	}
};

const setUpHost = (user) => {
    if (window.location.pathname.includes("/join") || window.location.pathname.includes("/create") || window.location.pathname.includes("/host") || window.location.pathname.includes("/player")) {
        if (user) {
            const hostBody = document.querySelector("body");
            hostBody.style.display = "block";
        } else {
            const hostBody = document.querySelector("body");
            hostBody.style.display = "none";
        }
    }
    
}
