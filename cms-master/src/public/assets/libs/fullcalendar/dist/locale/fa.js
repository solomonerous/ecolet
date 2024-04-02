!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(require("moment"), require("fullcalendar")))
        : "function" == typeof define && define.amd
            ? define(["moment", "fullcalendar"], t)
            : "object" == typeof exports
                ? t(require("moment"), require("fullcalendar"))
                : t(e.moment, e.FullCalendar);
})("undefined" != typeof self ? self : this, function (e, t) {
    return (function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = {i: r, l: !1, exports: {}});
            return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
        }

        var n = {};
        return (
            (t.m = e),
                (t.c = n),
                (t.d = function (e, n, r) {
                    t.o(e, n) ||
                    Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r,
                    });
                }),
                (t.n = function (e) {
                    var n =
                        e && e.__esModule
                            ? function () {
                                return e.default;
                            }
                            : function () {
                                return e;
                            };
                    return t.d(n, "a", n), n;
                }),
                (t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (t.p = ""),
                t((t.s = 127))
        );
    })({
        0: function (t, n) {
            t.exports = e;
        },
        1: function (e, n) {
            e.exports = t;
        },
        127: function (e, t, n) {
            Object.defineProperty(t, "__esModule", {value: !0}), n(128);
            var r = n(1);
            r.datepickerLocale("fa", "fa", {
                closeText: "بستن",
                prevText: "&#x3C;قبلی",
                nextText: "بعدی&#x3E;",
                currentText: "امروز",
                monthNames: [
                    "ژانویه",
                    "فوریه",
                    "مارس",
                    "آوریل",
                    "مه",
                    "ژوئن",
                    "ژوئیه",
                    "اوت",
                    "سپتامبر",
                    "اکتبر",
                    "نوامبر",
                    "دسامبر",
                ],
                monthNamesShort: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                ],
                dayNames: [
                    "يکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه",
                    "شنبه",
                ],
                dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
                dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
                weekHeader: "هف",
                dateFormat: "yy/mm/dd",
                firstDay: 6,
                isRTL: !0,
                showMonthAfterYear: !1,
                yearSuffix: "",
            }),
                r.locale("fa", {
                    buttonText: {
                        month: "ماه",
                        week: "هفته",
                        day: "روز",
                        list: "برنامه",
                    },
                    allDayText: "تمام روز",
                    eventLimitText: function (e) {
                        return "بیش از " + e;
                    },
                    noEventsMessage: "هیچ رویدادی به نمایش",
                });
        },
        128: function (e, t, n) {
            !(function (e, t) {
                t(n(0));
            })(0, function (e) {
                var t = {
                        1: "۱",
                        2: "۲",
                        3: "۳",
                        4: "۴",
                        5: "۵",
                        6: "۶",
                        7: "۷",
                        8: "۸",
                        9: "۹",
                        0: "۰",
                    },
                    n = {
                        "۱": "1",
                        "۲": "2",
                        "۳": "3",
                        "۴": "4",
                        "۵": "5",
                        "۶": "6",
                        "۷": "7",
                        "۸": "8",
                        "۹": "9",
                        "۰": "0",
                    };
                return e.defineLocale("fa", {
                    months:
                        "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
                            "_"
                        ),
                    monthsShort:
                        "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
                            "_"
                        ),
                    weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
                        "_"
                    ),
                    weekdaysShort:
                        "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm",
                    },
                    meridiemParse: /قبل از ظهر|بعد از ظهر/,
                    isPM: function (e) {
                        return /بعد از ظهر/.test(e);
                    },
                    meridiem: function (e, t, n) {
                        return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
                    },
                    calendar: {
                        sameDay: "[امروز ساعت] LT",
                        nextDay: "[فردا ساعت] LT",
                        nextWeek: "dddd [ساعت] LT",
                        lastDay: "[دیروز ساعت] LT",
                        lastWeek: "dddd [پیش] [ساعت] LT",
                        sameElse: "L",
                    },
                    relativeTime: {
                        future: "در %s",
                        past: "%s پیش",
                        s: "چند ثانیه",
                        ss: "ثانیه d%",
                        m: "یک دقیقه",
                        mm: "%d دقیقه",
                        h: "یک ساعت",
                        hh: "%d ساعت",
                        d: "یک روز",
                        dd: "%d روز",
                        M: "یک ماه",
                        MM: "%d ماه",
                        y: "یک سال",
                        yy: "%d سال",
                    },
                    preparse: function (e) {
                        return e
                            .replace(/[۰-۹]/g, function (e) {
                                return n[e];
                            })
                            .replace(/،/g, ",");
                    },
                    postformat: function (e) {
                        return e
                            .replace(/\d/g, function (e) {
                                return t[e];
                            })
                            .replace(/,/g, "،");
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}م/,
                    ordinal: "%dم",
                    week: {dow: 6, doy: 12},
                });
            });
        },
    });
});
