/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function () {
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
        var e = jQuery.fn.select2.amd;
    return (
        e.define("select2/i18n/tk", [], function () {
            return {
                errorLoading: function () {
                    return "Netije ýüklenmedi.";
                },
                inputTooLong: function (e) {
                    var t = e.input.length - e.maximum,
                        n = t + " harp bozuň.";
                    return n;
                },
                inputTooShort: function (e) {
                    var t = e.minimum - e.input.length,
                        n = "Ýene-de iň az " + t + " harp ýazyň.";
                    return n;
                },
                loadingMore: function () {
                    return "Köpräk netije görkezilýär…";
                },
                maximumSelected: function (e) {
                    var t = "Diňe " + e.maximum + " sanysyny saýlaň.";
                    return t;
                },
                noResults: function () {
                    return "Netije tapylmady.";
                },
                searching: function () {
                    return "Gözlenýär…";
                },
            };
        }),
            {define: e.define, require: e.require}
    );
})();
