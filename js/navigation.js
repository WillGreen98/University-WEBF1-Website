// var file_linkers = ["index.html", "discovery_log.html"];
// var file_linker_headings = ["Home", "Discovery Log"];
//
// function createLiA() {
//     var nav_li = document.createElement("li");
//     nav_li.classList.add("nav_li");
//
//     var test = document.createTextNode(file_linker_headings);
//
//     for(i=0; i<=file_linkers.length; i++) {
//         var newNav_a = document.createElement("a");
//         newNav_a.classList.add("newNav_a");
//         newNav_a.appendChild(test);
//         newNav_a.setAttribute("href", file_linkers[i]);
//         nav_li.appendChild(newNav_a);
//         i++;
//     }
//     return nav_li;
// }
//
// function loadNavigation() {
//     var navigation = document.createElement("nav");
//     navigation.classList.add("navigation");
//
//     var nav_ul = document.createElement("ul");
//     nav_ul.classList.add("nav_ul");
//
//     for(var i=1; i<=file_linkers.length; i++) {
//         nav_liA = createLiA();
//         nav_ul.appendChild(nav_liA);
//     }
//
//     navigation.appendChild(nav_ul);
//
//     var currentNav = document.getElementsByClassName("navigation")[0];
//     document.body.insertBefore(navigation, currentNav);
// }
//
// document.body.onload = loadNavigation;

function loadNavigation() {
    var nav = document.getElementById('navigation');
    nav.insertAdjacentHTML('afterbegin',`
    <div class="sidenav">
      <a href="index.html">Home</a>
      <a href="litreview.html">Litreview</a>
      <a href="worklog.html">Worklogs</a>
      <a href="video.html">Video</a>
    </div>`
  );
}

loadNavigation();
