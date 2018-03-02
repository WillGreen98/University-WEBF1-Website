function loadNavigation_Index() {
	let footer = document.getElementById("footer").insertAdjacentHTML('afterbegin',`
    <footer id="footer_container" role="footer">
        <header id="footer_header">
            <h3 id="footer_h">Site Footer</h3>
        </header>

        <div class="img_container">
            <a href="https://validator.w3.org/check?uri=referer" target="_blank">
                <picture class="w3_href_picture">
                    <source srcset=""https://www.w3.org/Icons/valid-html401-blue"">
                    <img src="https://www.w3.org/Icons/valid-html401-blue" alt="Validate HTML">
                </picture>
            </a>
        </div>

        <div class="img_container">
            <a href="http://jigsaw.w3.org/css-validator/check?uri=referer" target="_blank">
                <picture class="w3_href_picture">
                    <source srcset="http://jigsaw.w3.org/css-validator/images/vcss">
                    <img src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Validate CSS">
                </picture>
            </a>
        </div>
    </footer>
    `);
}

window.onload = loadNavigation_Index();