

function logoutControl()
{

	localStorage.removeItem("LogSession");
	window.location.href = "login.html";
}