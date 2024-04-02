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
            if (o[r]) return o[r].exports;
            var a = (o[r] = {i: r, l: !1, exports: {}});
            return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
        }

        var o = {};
        return (
            (t.m = e),
                (t.c = o),
                (t.d = function (e, o, r) {
                    t.o(e, o) ||
                    Object.defineProperty(e, o, {
                        configurable: !1,
                        enumerable: !0,
                        get: r,
                    });
                }),
                (t.n = function (e) {
                    var o =
                        e && e.__esModule
                            ? function () {
                                return e.default;
                            }
                            : function () {
                                return e;
                            };
                    return t.d(o, "a", o), o;
                }),
                (t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (t.p = ""),
                t((t.s = 183))
        );
    })({
        0: function (t, o) {
            t.exports = e;
        },
        1: function (e, o) {
            e.exports = t;
        },
        183: function (e, t, o) {
            Object.defineProperty(t, "__esModule", {value: !0}), o(184);
            var r = o(1);
            r.datepickerLocale("pt-br", "pt-BR", {
                closeText: "Fechar",
                prevText: "&#x3C;Anterior",
                nextText: "Próximo&#x3E;",
                currentText: "Hoje",
                monthNames: [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro",
                ],
                monthNamesShort: [
                    "Jan",
                    "Fev",
                    "Mar",
                    "Abr",
                    "Mai",
                    "Jun",
                    "Jul",
                    "Ago",
                    "Set",
                    "Out",
                    "Nov",
                    "Dez",
                ],
                dayNames: [
                    "Domingo",
                    "Segunda-feira",
                    "Terça-feira",
                    "Quarta-feira",
                    "Quinta-feira",
                    "Sexta-feira",
                    "Sábado",
                ],
                dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                weekHeader: "Sm",
                dateFormat: "dd/mm/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: "",
            }),
                r.locale("pt-br", {
                    buttonText: {
                        month: "Mês",
                        week: "Semana",
                        day: "Dia",
                        list: "Compromissos",
                    },
                    allDayText: "dia inteiro",
                    eventLimitText: function (e) {
                        return "mais +" + e;
                    },
                    noEventsMessage: "Não há eventos para mostrar",
                });
        },
        184: function (e, t, o) {
            !(function (e, t) {
                t(o(0));
            })(0, function (e) {
                return e.defineLocale("pt-br", {
                    months:
                        "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
                            "_"
                        ),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
                        "_"
                    ),
                    weekdays:
                        "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
                            "_"
                        ),
                    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                    weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
                    },
                    calendar: {
                        sameDay: "[Hoje às] LT",
                        nextDay: "[Amanhã às] LT",
                        nextWeek: "dddd [às] LT",
                        lastDay: "[Ontem às] LT",
                        lastWeek: function () {
                            return 0 === this.day() || 6 === this.day()
                                ? "[Último] dddd [às] LT"
                                : "[Última] dddd [às] LT";
                        },
                        sameElse: "L",
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "há %s",
                        s: "poucos segundos",
                        ss: "%d segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um mês",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos",
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                });
            });
        },
    });
});
