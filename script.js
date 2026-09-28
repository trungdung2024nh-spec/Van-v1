// Hiệu ứng khi bấm vào các liên kết trong website

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            if (
                href &&
                href.endsWith(".html") &&
                !href.startsWith("#")
            ) {

                event.preventDefault();

                document.body.classList.add("page-exit");

                setTimeout(function () {

                    window.location.href = href;

                }, 250);

            }

        });

    });

});
