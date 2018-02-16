const PRODUCTION = true;

function page_Active() {
	let link_list = [];
	let link_Active = document.getElementById("navigation").getElementsByTagName("a");
	link_list.appendChild(link_Active);

	for(let i=0; i<link_list.length; i++) { 
		if(document.location.href.indexOf(link_Active[i].href)>=0) {
			link_Active[i].className="active";
		}
	}
}

function loadNavigation_Index() {
	let nav = document.getElementById("navigation");
	nav.insertAdjacentHTML("afterbegin",`
	<nav id="navigation">
            <ul class="nav_ul">
                <li class="nav_li"><a href="index.html" class="nav_a">Home</a></li>
                <li class="nav_li"><a href="./views/literature_review.html" class="nav_a">Literature Review</a></li>
                <li class="nav_li"><a href="./views/discovery_log.html" class="nav_a">Discovery Log</a></li>
                <li class="nav_li"><a href="./views/uni.html" class="nav_a">Uni></a></li>
                    <div class="dropdown_content">
                        <ul class="navigation_modules">
                            <li class="nav_li"><a href="./views/Modules/CAR.html" class="nav_a"><abbr title="Computer Architecture">CAR</abbr></a></li>
                            <li class="nav_li"><a href="./views/Modules/COMP-TUT.html" class="nav_a"><abbr title="Computer Tutorial">COMP TUT</abbr></a></li>
                            <li class="nav_li"><a href="./views/Modules/INDADD.html" class="nav_a"><abbr title="Introduction To Databases and Design">INDADD</abbr></a></li>
                            <li class="nav_li"><a href="./views/Modules/INTPROG.html" class="nav_a">INTPROG</a></li>
                            <li class="nav_li"><a href="./views/Modules/NETFUN.html" class="nav_a">NETFUN</a></li>
                            <li class="nav_li"><a href="./views/Modules/WEBF1.html" class="nav_a">WEBF1</a></li>
                        </ul>
                    </div>
                <li class="nav_li"><a href="./views/web-dev-standards.html" class="nav_a">Web Standards</a></li>
            </ul>
        </nav>`
	);
}

function loadNavigation_Views() {
	let nav = document.getElementById("navigation");
	nav.insertAdjacentHTML("afterbegin",`
	<nav class="navigation">
            <ul class="nav_ul">
                <li class="nav_li"><a href="../index.html" class="nav_a">Home</a></li>  
                <li class="nav_li"><a href="literature_review.html" class="nav_a">Literature Review</a></li>
                <li class="nav_li"><a href="discovery_log.html" class="nav_a">Discovery Log</a></li>
                <li class="nav_li"><a href="uni.html" class="nav_a">Uni</a></li>
                <li class="nav_li"><a href="web-dev-standards.html" class="nav_a">Web Standards</a></li>
                <li class="nav_li"><a href="./Modules/CAR.html" class="nav_a">CAR</a></li>
                <li class="nav_li"><a href="./Modules/COMP-TUT.html" class="nav_a">Comp Tut</a></li>
                <li class="nav_li"><a href="./Modules/INDADD.html" class="nav_a">INDADD</a></li>
                <li class="nav_li"><a href="./Modules/INTPROG.html" class="nav_a">INTPROG</a></li>
                <li class="nav_li"><a href="./Modules/NETFUN.html" class="nav_a">NETFUN</a></li>
                <li class="nav_li"><a href="./Modules/WEBF1.html" class="nav_a">WEBF1</a></li>
            </ul>
        </nav>`
	);
}

function loadNavigation_Modules() {
	let nav = document.getElementById("navigation");
	nav.insertAdjacentHTML("afterbegin",`
	<nav class="navigation">
            <ul class="nav_ul">
                <li class="nav_li"><a href="../../index.html" class="nav_a">Home</a></li>
                <li class="nav_li"><a href="./views/literature_review.html" class="nav_a">Literature Review</a></li>
                <li class="nav_li"><a href="./views/discovery_log.html" class="nav_a">Discovery Log</a></li>
                <li class="nav_li"><a href="./views/uni.html" class="nav_a">Uni</a></li>
                <li class="nav_li"><a href="./views/web-dev-standards.html" class="nav_a">Web Standards</a></li>
                <li class="nav_li"><a href="./CAR.html" class="nav_a">CAR</a></li>
                <li class="nav_li"><a href="COMP-TUT.html" class="nav_a">Comp Tut</a></li>
                <li class="nav_li"><a href="INDADD.html" class="nav_a">INDADD</a></li>
                <li class="nav_li"><a href="INTPROG.html" class="nav_a">INTPROG</a></li>
                <li class="nav_li"><a href="NETFUN.html" class="nav_a">NETFUN</a></li>
                <li class="nav_li"><a href="WEBF1.html" class="nav_a">WEBF1</a></li>
            </ul>
        </nav>`
	);
}

let pathname = window.location.pathname;
let directory = pathname.substring(0, pathname.lastIndexOf("/"));
let file = pathname.substring(pathname.lastIndexOf("/")+1);

if(PRODUCTION == true) {
	window.onload= page_Active();
	switch(file) {
	case "index.html":
		window.onload = loadNavigation_Index();
		break;
	case "discovery.html":
	case "literature_review.html":
	case "uni.html":
	case "web-dev-standards.html":
		window.onload = loadNavigation_Views();
		break;
	case "CAR.html":
	case "COMP-TUT.html":
	case "INDADD.html":
	case "INTPROG.html":
	case "NETFUN.html":
	case "WEBF1.html":
		window.onload = loadNavigation_Modules();
		break;
	}
}

// attempt at a router
// if(PRODUCTION == true) {
// 	page_Active();
// 	switch(directory) {
// 	case "/":
// 		loadNavigation_Index();
// 		break;
// 	case "/views":
// 		loadNavigation_Views();
// 		break;
// 	case "/views/Modules/":
// 		loadNavigation_Modules();
// 		break;
// 	}
// }