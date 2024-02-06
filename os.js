/*function detectOS() {
	let userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		macosPlatformsNew = ['Macintosh', 'MacIntel'],
		macosPlatformsOld = ['MacPPC', 'Mac68K'],
		windowsPlatformsNew = ['Win64', 'Windows'],
		windowsPlatformsOld = ['Win32', 'WinCE'],
		iosPlatformsNew = ['iPhone' , 'iPad'],
		iosPlatformsOld = ['iPod'],
		os = null;

  let userOS = detectOS();
	if (macosPlatformsNew.indexOf(platform) !== -1) {
		os = 'Mac OS New' && document.getElementById("os").innerHTML("Linux UNIX better:" + userOS);
	}	if (macosPlatformsOld.indexOf(platform) !== -1) {
		os = 'Mac OS Old' && document.getElementById("os").innerHTML("How are you even on the god damn internet:" + userOS);
	} else if (iosPlatformsNew.indexOf(platform) !== -1) {
		os = 'iOS New' && document.getElementById("os").innerHTML("shoulda bought a android:" + userOS);
	}	else if (iosPlatformsOld.indexOf(platform) !== -1) {
		os = 'iOS Old' && document.getElementById("os").innerHTML("You are supposed to listen to music not go on the web:" + userOS);
	} else if (windowsPlatformsNew.indexOf(platform) !== -1) {
		os = 'Windows New' && document.getElementById("os").innerHTML("Michaelsoft Binbows user lol:" + userOS);
	}	else if (windowsPlatformsOld.indexOf(platform) !== -1) {
		os = 'Windows Old' && document.getElementById("os").innerHTML("You need to upgrade your OS dude:" + userOS);
	} else if (/Android/.test(userAgent)) {
		os = 'Android' && document.getElementById("os").innerHTML("tux jumpscare:" + userOS);
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux' && document.getElementById("os").innerHTML("sudo tux penguin:" + userOS);
	}

	return os;
}*/