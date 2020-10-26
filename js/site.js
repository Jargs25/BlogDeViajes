(function() {
    window.onload = () => {
        var observer = new IntersectionObserver(function(element) {
            var byJG = document.getElementsByClassName("byJG")[0];
            if (element[0].isIntersecting) {
                byJG.style.right = "0px";
            } else {
                byJG.removeAttribute("style");
            }
        });
        observer.observe(document.getElementsByClassName("copyright")[0]);
    };
})();