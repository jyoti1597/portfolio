function showSidebar(){
	const sidebar = document.querySelector('.sidebar');
	sidebar.style.display = 'block';
}
function hideSidebar(){
	const sidebar = document.querySelector('.sidebar');
	sidebar.style.display = 'none'
}
document.addEventListener("contextmenu", e => e.preventDefault());
