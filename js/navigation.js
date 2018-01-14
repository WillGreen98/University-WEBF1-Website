DEBUG = true;

if(DEBUG) {
    let file_linkers = ["index.html", "discovery_log.html", "literature_review.html"];
    let file_linker_headings = ["Home", "Discovery Log", "Literature Review"];

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

    function loadNavigation() {
        // create and set class name on one line?
        let navigation = document.createElement("nav");
        navigation.classList.add("navigation");

        let nav_ul = document.createElement("ul");
        nav_ul.classList.add("nav_ul");

        for(let i=0; i < file_linkers.length; i++) {
            nav_liA = createLiA();
            nav_ul.appendChild(nav_liA);
        }

        navigation.appendChild(nav_ul);

        let currentNav = document.getElementsByClassName("navigation")[0];
        document.body.insertBefore(navigation, currentNav);
    }

    document.body.onload = loadNavigation;
} else {
    function loadNavigation() {
        let nav = document.getElementById('navigation');
        nav.insertAdjacentHTML('afterbegin',`
        <nav class="navigation">
            <ul class="nav_ul">
                <li class="nav_li"><a href="index.html" class="nav_a">Home</a></li>
                <li class="nav_li"><a href="./html/literature_review.html" class="nav_a">Literature Review</a></li>
                <li class="nav_li"><a href="./html/discovery_log.html" class="nav_a">Discovery Log</a></li>
            </ul>
        </nav>`
      );
    }

    loadNavigation();
}
