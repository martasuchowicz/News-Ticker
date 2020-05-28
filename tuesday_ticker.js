// Header ticker

// offsetWidth -> outerWidth();

// setTimeout -> second exercise

(function () {
    var jqheadlines = $("#headlines");
    var jqlinks = jqheadlines.find("a");
    var jqleft = jqheadlines.offset().left;
    var id;

    // moveHeadlines();

    function moveHeadlines() {
        // set the style left property of headlines to the new left position
        jqleft--;
        var offset = jqlinks.eq(0).outerWidth();
        if (jqleft <= -jqheadlines.find("a").eq(0).outerWidth()) {
            jqleft += offset;
            jqheadlines.append(jqheadlines.find("a").eq(0));

            // mistake to fix
        }
        jqheadlines.css({
            left: jqleft + "px",
        });
        id = requestAnimationFrame(moveHeadlines);
    }

    jqheadlines.on("mouseover", function () {
        cancelAnimationFrame(id);
    });

    jqheadlines.on("mouseout", function () {
        moveHeadlines();
    });

    for (var i = 0; i < jqlinks.length; i++) {
        jqlinks.on("mouseover", function () {
            $(this).css({
                color: "lightskyblue",
                fontWeight: "bold",
                textDecoration: "underline",
            });
        });
    }

    for (var i = 0; i < jqlinks.length; i++) {
        jqlinks.on("mouseout", function () {
            $(this).css({
                color: "white",
                textDecoration: "none",
            });
        });
    }

    moveHeadlines();
})();

//  footer ticker

(function () {
    var jqfooter = $("#footer");
    var jqlinks = jqfooter.find("a");
    var jqleft = jqfooter.offset().left;
    var id;

    function moveFooter() {
        jqleft++;
        var offset = jqlinks.eq(0).outerWidth();
        if (jqleft >= -jqfooter.find("a").eq(0).outerWidth()) {
            jqleft -= offset;
            jqfooter.append(jqfooter.find("a").eq(0));
        }
        jqfooter.css({
            left: jqleft + "px",
        });
        id = requestAnimationFrame(moveFooter);
    }

    jqfooter.on("mouseover", function () {
        cancelAnimationFrame(id);
    });

    jqfooter.on("mouseout", function () {
        moveFooter();
    });

    for (var i = 0; i < jqlinks.length; i++) {
        jqlinks.on("mouseover", function () {
            $(this).css({
                color: "lightskyblue",
                fontWeight: "bold",
                textDecoration: "underline",
            });
        });
    }

    // eslint-disable-next-line no-redeclare
    for (var i = 0; i < jqlinks.length; i++) {
        jqlinks.on("mouseout", function () {
            $(this).css({
                color: "white",
                textDecoration: "none",
            });
        });
    }

    moveFooter();
})();
