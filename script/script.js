function layoutHandler() {
	const css = document.getElementById('sheet');
	
	if(window.innerWidth < 609) {
		css.setAttribute('href', 'css/style608x610.css');
	} else if(window.innerWidth < 751) {
		css.setAttribute('href', 'css/style750x610.css');
	} else {
		css.setAttribute('href', 'css/styleFullScreen.css');
	}
}

window.addEventListener('resize', layoutHandler);
layoutHandler();