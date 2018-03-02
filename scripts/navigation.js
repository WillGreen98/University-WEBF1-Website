function loadNavigation_Index() {
	let nav = document.getElementById("navigation");
	nav.insertAdjacentHTML("afterbegin",`
	<nav id="navigation">
            <ul id="nav_ul">
                <li class="nav_li"><a href="index.html" class="nav_a">Home</a></li>
                <li class="nav_li"><a href="literature_review.html" class="nav_a">Literature Review</a></li>
                <li class="nav_li"><a href="discovery_log.html" class="nav_a">Discovery Log</a></li>
                <li id="dropdown_container"><a href="javascript:void(0)" id="dropdown_button">Uni ></a>
                    <div id="dropdown_content">
                        <a href="uni.html" class="nav_a_drop">Uni</a>
                        <a href="video.html" class="nav_a_drop">Video</a>
                        <a href="element.html" class="nav_a_drop">Element View</a>
                    </div>
                </li>
            </ul>
        </nav>`
	);
}

window.onload = loadNavigation_Index();