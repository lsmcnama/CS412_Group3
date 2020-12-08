// <!-- project methods -->

// listen for auth status changes
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		console.log("user logged in", user);
		if (window.location.pathname === "/") {
			console.log(window.location.pathname)
			setupUI(user);
		}
		if (window.location.pathname.includes("/dashboard")) {
			console.log(window.location.pathname)
			setupUI(user);
			setUpDashboardPage(user);
		}
	
		if (window.location.pathname.includes("/create")) {
			console.log(window.location.pathname)
			setUpHost(user)
		}

		if (window.location.pathname.includes("/join")) {
			console.log(window.location.pathname)
			setUpHost(user)
		}

		if (window.location.pathname.includes("/host")) {
			console.log(window.location.pathname)
			setUpHost(user)
		}

		if (window.location.pathname.includes("/player")) {
			console.log(window.location.pathname)
			setUpHost(user)
		}
		
	} else {
		console.log("user logged out!");
		if (window.location.pathname === "/") {
			console.log(window.location.pathname)
			setupUI(user);
		}
		if (window.location.pathname.includes("/dashboard")) {
			setupUI(user);
			setUpDashboardPage(user);
		}

		if (window.location.pathname.includes("/create")) {
			console.log(window.location.pathname)
			setUpHost(user)
		}

		if (window.location.pathname.includes("/join")) {
			console.log(window.location.pathname)
			setUpHost(user)
		}

		if (window.location.pathname.includes("/host")) {
			console.log(window.location.pathname)
			setUpHost(user)
		}

		if (window.location.pathname.includes("/player")) {
			console.log(window.location.pathname)
			setUpHost(user)
		}
	}
});

// onclick method for sign in with google option
function signInWithGoogle() {
	// Using a popup.
	var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
	// googleAuthProvider.addScope("profile");
	// googleAuthProvider.addScope("email");
	firebase
		.auth()
		.signInWithPopup(googleAuthProvider)
		.then(function (data) {
			window.location.pathname = "/dashboard";
		})
		.catch(function (error) {
			console.log(error);
		});
}

// log user out
function signOutWithGoogle() {
	firebase.auth().signOut();
}
