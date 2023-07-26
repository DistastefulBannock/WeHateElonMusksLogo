// ==UserScript==
// @name         Remove New Twitter Logo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes Elon Musk's autistic new twitter logo. Go use your fridge to hang your art bud, we don't wanna look at it
// @author       Bannock
// @match        http*://twitter.com/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        None
// @run-at       document-start
// ==/UserScript==

// Modify the content of the script response here
(function() {
    'use strict';

    // Function to remove his ugly logo
    function removeElonsRetardation(){
        // Replace each <path> element with an <image> element
        let pathElements = document.querySelectorAll('path[d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"]');
        pathElements.forEach((pathElement) => {

            // Epic chat gpt code
            let imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            imageElement.setAttribute('href', 'https://pbs.twimg.com/media/F17q7Z6WAAQgXTI?format=png&name=large');
            imageElement.setAttribute('style', 'width:100%;height:100%;');
            pathElement.parentNode.replaceChild(imageElement, pathElement);

            // Make logo normal sized again
            let fkYouElon = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg");
            console.log(fkYouElon);
            if (fkYouElon != null){
                fkYouElon.removeAttribute("viewBox");
            }
        });
    }

    // Constantly check for his logo and replace if it finds it
    setInterval(function() {
        removeElonsRetardation();
    }, 50);
    // Also check on page load
    removeElonsRetardation();

    // Change favicon too (tab icon)
    window.addEventListener('load', function() {
        var icon = document.querySelector('link[rel~="icon"]');
        var copy = icon.cloneNode(!0);
        copy.href = "data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wz///8f////H////x////8Y////B////wD///8A////AP///wD///8A////AP///wD///8A////A////yj7789g9tV+ofbVfqH21X6h+N+eifz03lf///8o////A////wD///8A////AP///wD///8A////APr37g/PsGCftogQ7r2JAP/bnwD/7qwA/+6sAP/urAD/9Mtftv357z////8D////AP///wD///8A////AP///wD///8A////AP///w/57c5a88VQwu6sAP/urAD/7qwA/+6sAP/xvDDb/fnvP////wD///8A////AP///wD///8A////AP///wDz5L5X7bgv2+6sAP/urAD/7qwA/+6sAP/urAD/7qwA//G8MNv///8Y////AP///wD///8A////AP///wD///8M9NN+n+6wD/PurAD/7qwA/+6sAP/urAD/7qwA/+6sAP/urAD/9Nyegf///wD///8A////AP///wD///8A+O3PVu6wD/PurAD/7qwA/+6sAP/urAD/7qwA/+6sAP/urAD/7qwA//G8MNv///8A////AP///wD///8A////ANasQMXurAD/7qwA/+qpAP/YnAD/1JkA/+6sAP/urAD/7qwA/+6sAP/urAD/////FP///wD///8A////AP///wDz255+7qwA/9icAP+6ixDuz7Bgn9m8b5TurAD/7qwA/+6sAP/urAD/7qwA//jkr3j///8M////AP///wD///8A47Y/ysmRAP/PsGCf+vfuD////wDw584w46QA/+6sAP/urAD/7qwA/9+hAP/orA/z9OrPQv///wD///8A////AMypT7Hhz55g////AP///wD///8A////AMOaL9DMlAD/0JYA/8mRAP/FoEC/vpIf4OPQnmL///8A////AP///wD69+4P////AP///wD///8A////AP///wD69+4P3ceOcNi/foHhz55g////APr37g/69+4P////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AAD//wAA8P8AAMA/AAD4HwAA8A8AAOAHAADgBwAAwAcAAOAHAADHAwAA3wMAAP/fAAD//wAA//8AAA==";
        icon.parentNode.removeChild(icon);
        document.head.appendChild(copy);
    }, false);

})();