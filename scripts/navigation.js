const PRODUCTION = true;

function loadNavigation_Index() {
	let nav = document.getElementById("navigation");
	nav.insertAdjacentHTML("afterbegin",`
	<nav class="navigation">
            <ul class="nav_ul">
                <li class="nav_li"><a href="index.html" class="nav_a">Home</a></li>
                <li class="nav_li"><a href="./views/literature_review.html" class="nav_a">Literature Review</a></li>
                <li class="nav_li"><a href="./views/discovery_log.html" class="nav_a">Discovery Log</a></li>
                <li class="nav_li"><a href="./views/uni.html" class="nav_a">Uni</a></li>
                <li class="nav_li"><a href="./views/web-dev-standards.html" class="nav_a">Web Standards</a></li>
                <li class="nav_li"><a href="./views/Modules/CAR.html" class="nav_a">CAR</a></li>
                <li class="nav_li"><a href="./views/Modules/COMP-TUT.html" class="nav_a"></a></li>
                <li class="nav_li"><a href="./views/Modules/INDADD.html" class="nav_a"></a></li>
                <li class="nav_li"><a href="./views/Modules/INTPROG.html" class="nav_a">INTPROG</a></li>
                <li class="nav_li"><a href="./views/Modules/NETFUN.html" class="nav_a">NETFUN</a></li>
                <li class="nav_li"><a href="./views/Modules/WEBF1.html" class="nav_a">WEBF1</a></li>
            </ul>
        </nav>`
	);
}

function loadNavigation() {
	let nav = document.getElementById("navigation");
	nav.insertAdjacentHTML("afterbegin",`
	<nav class="navigation">
            <ul class="nav_ul">
                <li class="nav_li"><a href="../index.html" class="nav_a">Home</a></li>
                <li class="nav_li"><a href="./literature_review.html" class="nav_a">Literature Review</a></li>
                <li class="nav_li"><a href="./discovery_log.html" class="nav_a">Discovery Log</a></li>
                <li class="nav_li"><a href="./uni.html" class="nav_a">Uni</a></li>
                <li class="nav_li"><a href="./web-dev-standards.html" class="nav_a">Web Standards</a></li>
                <li class="nav_li"><a href="./Modules/CAR.html" class="nav_a">CAR</a></li>
                <li class="nav_li"><a href="./Modules/COMP-TUT.html" class="nav_a"></a></li>
                <li class="nav_li"><a href="./Modules/INDADD.html" class="nav_a"></a></li>
                <li class="nav_li"><a href="./Modules/INTPROG.html" class="nav_a">INTPROG</a></li>
                <li class="nav_li"><a href="./Modules/NETFUN.html" class="nav_a">NETFUN</a></li>
                <li class="nav_li"><a href="./Modules/WEBF1.html" class="nav_a">WEBF1</a></li>
            </ul>
        </nav>`
	);
}

let file_linkers = ["index.html", "uni.html" ,"discovery_log.html", "literature_review.html"];
let file_linker_headings = ["Home", "Uni" ,"Discovery Log", "Literature Review"];

function createLiA() {
	let nav_li = document.createElement("li");
	nav_li.classList.add("nav_li");
	
	for(let i=0; i < file_linkers.length; i++) {
		let newNav_a = document.createElement("a");
		newNav_a.classList.add("newNav_a");
		newNav_a.textContent = file_linker_headings[i];
		newNav_a.setAttribute("href", file_linkers[i]);
		nav_li.appendChild(newNav_a);
	}
	return nav_li;
}

function loadNavigation_DOM() {
	let navigation = document.createElement("nav");
	navigation.classList.add("navigation");

	let nav_ul = document.createElement("ul");
	nav_ul.classList.add("nav_ul");
	
	let nav_liA = createLiA();
	nav_ul.appendChild(nav_liA);

	navigation.appendChild(nav_ul);

	let currentNav = document.getElementsByClassName("navigation")[0];
	document.body.insertBefore(navigation, currentNav);
}

let index_page_path = "../index.html";
if(PRODUCTION) {
	if(window.location.pathname == index_page_path) {
		loadNavigation_Index();
	} else {
		loadNavigation();
	}
} else {
	loadNavigation_DOM();
}
