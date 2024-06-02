(() => {
    var __webpack_modules__ = {
        144: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                const e = "undefined" != typeof window, t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), a = e && window.devicePixelRatio > 1, n = {
                    elements_selector: ".lazy",
                    container: t || e ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, s = e => Object.assign({}, n, e), l = function(e, t) {
                    let a;
                    const n = "LazyLoad::Initialized", s = new e(t);
                    try {
                        a = new CustomEvent(n, {
                            detail: {
                                instance: s
                            }
                        });
                    } catch (e) {
                        a = document.createEvent("CustomEvent"), a.initCustomEvent(n, !1, !1, {
                            instance: s
                        });
                    }
                    window.dispatchEvent(a);
                }, o = "src", r = "srcset", i = "sizes", d = "poster", c = "llOriginalAttrs", _ = "data", u = "loading", g = "loaded", b = "applied", h = "error", m = "native", p = "data-", f = "ll-status", v = (e, t) => e.getAttribute(p + t), E = e => v(e, f), I = (e, t) => ((e, t, a) => {
                    const n = p + t;
                    null !== a ? e.setAttribute(n, a) : e.removeAttribute(n);
                })(e, f, t), y = e => I(e, null), k = e => null === E(e), A = e => E(e) === m, L = [ u, g, b, h ], w = (e, t, a, n) => {
                    e && "function" == typeof e && (void 0 === n ? void 0 === a ? e(t) : e(t, a) : e(t, a, n));
                }, x = (t, a) => {
                    e && "" !== a && t.classList.add(a);
                }, C = (t, a) => {
                    e && "" !== a && t.classList.remove(a);
                }, O = e => e.llTempImage, M = (e, t) => {
                    if (!t) return;
                    const a = t._observer;
                    a && a.unobserve(e);
                }, z = (e, t) => {
                    e && (e.loadingCount += t);
                }, N = (e, t) => {
                    e && (e.toLoadCount = t);
                }, T = e => {
                    let t = [];
                    for (let a, n = 0; a = e.children[n]; n += 1) "SOURCE" === a.tagName && t.push(a);
                    return t;
                }, R = (e, t) => {
                    const a = e.parentNode;
                    a && "PICTURE" === a.tagName && T(a).forEach(t);
                }, G = (e, t) => {
                    T(e).forEach(t);
                }, D = [ o ], H = [ o, d ], V = [ o, r, i ], F = [ _ ], j = e => !!e[c], B = e => e[c], J = e => delete e[c], S = (e, t) => {
                    if (j(e)) return;
                    const a = {};
                    t.forEach((t => {
                        a[t] = e.getAttribute(t);
                    })), e[c] = a;
                }, P = (e, t) => {
                    if (!j(e)) return;
                    const a = B(e);
                    t.forEach((t => {
                        ((e, t, a) => {
                            a ? e.setAttribute(t, a) : e.removeAttribute(t);
                        })(e, t, a[t]);
                    }));
                }, U = (e, t, a) => {
                    x(e, t.class_applied), I(e, b), a && (t.unobserve_completed && M(e, t), w(t.callback_applied, e, a));
                }, $ = (e, t, a) => {
                    x(e, t.class_loading), I(e, u), a && (z(a, 1), w(t.callback_loading, e, a));
                }, q = (e, t, a) => {
                    a && e.setAttribute(t, a);
                }, K = (e, t) => {
                    q(e, i, v(e, t.data_sizes)), q(e, r, v(e, t.data_srcset)), q(e, o, v(e, t.data_src));
                }, Q = {
                    IMG: (e, t) => {
                        R(e, (e => {
                            S(e, V), K(e, t);
                        })), S(e, V), K(e, t);
                    },
                    IFRAME: (e, t) => {
                        S(e, D), q(e, o, v(e, t.data_src));
                    },
                    VIDEO: (e, t) => {
                        G(e, (e => {
                            S(e, D), q(e, o, v(e, t.data_src));
                        })), S(e, H), q(e, d, v(e, t.data_poster)), q(e, o, v(e, t.data_src)), e.load();
                    },
                    OBJECT: (e, t) => {
                        S(e, F), q(e, _, v(e, t.data_src));
                    }
                }, W = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], X = (e, t) => {
                    !t || (e => e.loadingCount > 0)(t) || (e => e.toLoadCount > 0)(t) || w(e.callback_finish, t);
                }, Y = (e, t, a) => {
                    e.addEventListener(t, a), e.llEvLisnrs[t] = a;
                }, Z = (e, t, a) => {
                    e.removeEventListener(t, a);
                }, ee = e => !!e.llEvLisnrs, te = e => {
                    if (!ee(e)) return;
                    const t = e.llEvLisnrs;
                    for (let a in t) {
                        const n = t[a];
                        Z(e, a, n);
                    }
                    delete e.llEvLisnrs;
                }, ae = (e, t, a) => {
                    (e => {
                        delete e.llTempImage;
                    })(e), z(a, -1), (e => {
                        e && (e.toLoadCount -= 1);
                    })(a), C(e, t.class_loading), t.unobserve_completed && M(e, a);
                }, ne = (e, t, a) => {
                    const n = O(e) || e;
                    ee(n) || ((e, t, a) => {
                        ee(e) || (e.llEvLisnrs = {});
                        const n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                        Y(e, n, t), Y(e, "error", a);
                    })(n, (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_loaded), I(t, g), w(a.callback_loaded, t, n), s || X(a, n);
                        })(0, e, t, a), te(n);
                    }), (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_error), I(t, h), w(a.callback_error, t, n), a.restore_on_error && P(t, V), 
                            s || X(a, n);
                        })(0, e, t, a), te(n);
                    }));
                }, se = (e, t, n) => {
                    (e => W.indexOf(e.tagName) > -1)(e) ? ((e, t, a) => {
                        ne(e, t, a), ((e, t, a) => {
                            const n = Q[e.tagName];
                            n && (n(e, t), $(e, t, a));
                        })(e, t, a);
                    })(e, t, n) : ((e, t, n) => {
                        (e => {
                            e.llTempImage = document.createElement("IMG");
                        })(e), ne(e, t, n), (e => {
                            j(e) || (e[c] = {
                                backgroundImage: e.style.backgroundImage
                            });
                        })(e), ((e, t, n) => {
                            const s = v(e, t.data_bg), l = v(e, t.data_bg_hidpi), r = a && l ? l : s;
                            r && (e.style.backgroundImage = `url("${r}")`, O(e).setAttribute(o, r), $(e, t, n));
                        })(e, t, n), ((e, t, n) => {
                            const s = v(e, t.data_bg_multi), l = v(e, t.data_bg_multi_hidpi), o = a && l ? l : s;
                            o && (e.style.backgroundImage = o, U(e, t, n));
                        })(e, t, n), ((e, t, a) => {
                            const n = v(e, t.data_bg_set);
                            if (!n) return;
                            let s = n.split("|").map((e => `image-set(${e})`));
                            e.style.backgroundImage = s.join(), U(e, t, a);
                        })(e, t, n);
                    })(e, t, n);
                }, le = e => {
                    e.removeAttribute(o), e.removeAttribute(r), e.removeAttribute(i);
                }, oe = e => {
                    R(e, (e => {
                        P(e, V);
                    })), P(e, V);
                }, re = {
                    IMG: oe,
                    IFRAME: e => {
                        P(e, D);
                    },
                    VIDEO: e => {
                        G(e, (e => {
                            P(e, D);
                        })), P(e, H), e.load();
                    },
                    OBJECT: e => {
                        P(e, F);
                    }
                }, ie = (e, t) => {
                    (e => {
                        const t = re[e.tagName];
                        t ? t(e) : (e => {
                            if (!j(e)) return;
                            const t = B(e);
                            e.style.backgroundImage = t.backgroundImage;
                        })(e);
                    })(e), ((e, t) => {
                        k(e) || A(e) || (C(e, t.class_entered), C(e, t.class_exited), C(e, t.class_applied), 
                        C(e, t.class_loading), C(e, t.class_loaded), C(e, t.class_error));
                    })(e, t), y(e), J(e);
                }, de = [ "IMG", "IFRAME", "VIDEO" ], ce = e => e.use_native && "loading" in HTMLImageElement.prototype, _e = (e, t, a) => {
                    e.forEach((e => (e => e.isIntersecting || e.intersectionRatio > 0)(e) ? ((e, t, a, n) => {
                        const s = (e => L.indexOf(E(e)) >= 0)(e);
                        I(e, "entered"), x(e, a.class_entered), C(e, a.class_exited), ((e, t, a) => {
                            t.unobserve_entered && M(e, a);
                        })(e, a, n), w(a.callback_enter, e, t, n), s || se(e, a, n);
                    })(e.target, e, t, a) : ((e, t, a, n) => {
                        k(e) || (x(e, a.class_exited), ((e, t, a, n) => {
                            a.cancel_on_exit && (e => E(e) === u)(e) && "IMG" === e.tagName && (te(e), (e => {
                                R(e, (e => {
                                    le(e);
                                })), le(e);
                            })(e), oe(e), C(e, a.class_loading), z(n, -1), y(e), w(a.callback_cancel, e, t, n));
                        })(e, t, a, n), w(a.callback_exit, e, t, n));
                    })(e.target, e, t, a)));
                }, ue = e => Array.prototype.slice.call(e), ge = e => e.container.querySelectorAll(e.elements_selector), be = e => (e => E(e) === h)(e), he = (e, t) => (e => ue(e).filter(k))(e || ge(t)), me = function(t, a) {
                    const n = s(t);
                    this._settings = n, this.loadingCount = 0, ((e, t) => {
                        ce(e) || (t._observer = new IntersectionObserver((a => {
                            _e(a, e, t);
                        }), (e => ({
                            root: e.container === document ? null : e.container,
                            rootMargin: e.thresholds || e.threshold + "px"
                        }))(e)));
                    })(n, this), ((t, a) => {
                        e && (a._onlineHandler = () => {
                            ((e, t) => {
                                var a;
                                (a = ge(e), ue(a).filter(be)).forEach((t => {
                                    C(t, e.class_error), y(t);
                                })), t.update();
                            })(t, a);
                        }, window.addEventListener("online", a._onlineHandler));
                    })(n, this), this.update(a);
                };
                return me.prototype = {
                    update: function(e) {
                        const a = this._settings, n = he(e, a);
                        var s, l;
                        N(this, n.length), t ? this.loadAll(n) : ce(a) ? ((e, t, a) => {
                            e.forEach((e => {
                                -1 !== de.indexOf(e.tagName) && ((e, t, a) => {
                                    e.setAttribute("loading", "lazy"), ne(e, t, a), ((e, t) => {
                                        const a = Q[e.tagName];
                                        a && a(e, t);
                                    })(e, t), I(e, m);
                                })(e, t, a);
                            })), N(a, 0);
                        })(n, a, this) : (l = n, (e => {
                            e.disconnect();
                        })(s = this._observer), ((e, t) => {
                            t.forEach((t => {
                                e.observe(t);
                            }));
                        })(s, l));
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), e && window.removeEventListener("online", this._onlineHandler), 
                        ge(this._settings).forEach((e => {
                            J(e);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(e) {
                        const t = this._settings;
                        he(e, t).forEach((e => {
                            M(e, this), se(e, t, this);
                        }));
                    },
                    restoreAll: function() {
                        const e = this._settings;
                        ge(e).forEach((t => {
                            ie(t, e);
                        }));
                    }
                }, me.load = (e, t) => {
                    const a = s(t);
                    se(e, a);
                }, me.resetStatus = e => {
                    y(e);
                }, e && ((e, t) => {
                    if (t) if (t.length) for (let a, n = 0; a = t[n]; n += 1) l(e, a); else l(e, t);
                })(me, window.lazyLoadOptions), me;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        var lazyload_min = __webpack_require__(144);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        if (item.dataset.watch === "navigator" && !item.dataset.watchThreshold) {
                            let valueOfThreshold;
                            if (item.clientHeight > 2) {
                                valueOfThreshold = window.innerHeight / 2 / (item.clientHeight - 1);
                                if (valueOfThreshold > 1) valueOfThreshold = 1;
                            } else valueOfThreshold = 1;
                            item.setAttribute("data-watch-threshold", valueOfThreshold.toFixed(2));
                        }
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`йой, налаштування data-watch-margin потрібно задавати в PX або %`);
                    return;
                }
                if (paramsWatch.threshold === "prx") {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                console.log(configWatcher);
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я бачу ${targetElement.classList}, додав клас _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не бачу ${targetElement.classList}, прибрав клас _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестав стежити за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? functions_FLS(`[Спостерігач]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        modules_flsModules.watcher = new ScrollWatcher({});
        class FullPage {
            constructor(element, options) {
                let config = {
                    noEventSelector: "[data-no-event]",
                    classInit: "fp-init",
                    wrapperAnimatedClass: "fp-switching",
                    selectorSection: "[data-fp-section]",
                    activeClass: "active-section",
                    previousClass: "previous-section",
                    nextClass: "next-section",
                    idActiveSection: 0,
                    mode: element.dataset.fpEffect ? element.dataset.fpEffect : "slider",
                    bullets: element.hasAttribute("data-fp-bullets") ? true : false,
                    bulletsClass: "fp-bullets",
                    bulletClass: "fp-bullet",
                    bulletActiveClass: "fp-bullet-active",
                    onInit: function() {},
                    onSwitching: function() {},
                    onDestroy: function() {}
                };
                this.options = Object.assign(config, options);
                this.wrapper = element;
                this.sections = this.wrapper.querySelectorAll(this.options.selectorSection);
                this.activeSection = false;
                this.activeSectionId = false;
                this.previousSection = false;
                this.previousSectionId = false;
                this.nextSection = false;
                this.nextSectionId = false;
                this.bulletsWrapper = false;
                this.stopEvent = false;
                if (this.sections.length) this.init();
            }
            init() {
                if (this.options.idActiveSection > this.sections.length - 1) return;
                this.setId();
                this.activeSectionId = this.options.idActiveSection;
                this.setEffectsClasses();
                this.setClasses();
                this.setStyle();
                if (this.options.bullets) {
                    this.setBullets();
                    this.setActiveBullet(this.activeSectionId);
                }
                this.events();
                setTimeout((() => {
                    document.documentElement.classList.add(this.options.classInit);
                    this.options.onInit(this);
                    document.dispatchEvent(new CustomEvent("fpinit", {
                        detail: {
                            fp: this
                        }
                    }));
                }), 0);
            }
            destroy() {
                this.removeEvents();
                this.removeClasses();
                document.documentElement.classList.remove(this.options.classInit);
                this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
                this.removeEffectsClasses();
                this.removeZIndex();
                this.removeStyle();
                this.removeId();
                this.options.onDestroy(this);
                document.dispatchEvent(new CustomEvent("fpdestroy", {
                    detail: {
                        fp: this
                    }
                }));
            }
            setId() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.setAttribute("data-fp-id", index);
                }
            }
            removeId() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.removeAttribute("data-fp-id");
                }
            }
            setClasses() {
                this.previousSectionId = this.activeSectionId - 1 >= 0 ? this.activeSectionId - 1 : false;
                this.nextSectionId = this.activeSectionId + 1 < this.sections.length ? this.activeSectionId + 1 : false;
                this.activeSection = this.sections[this.activeSectionId];
                this.activeSection.classList.add(this.options.activeClass);
                for (let index = 0; index < this.sections.length; index++) document.documentElement.classList.remove(`fp-section-${index}`);
                document.documentElement.classList.add(`fp-section-${this.activeSectionId}`);
                if (this.previousSectionId !== false) {
                    this.previousSection = this.sections[this.previousSectionId];
                    this.previousSection.classList.add(this.options.previousClass);
                } else this.previousSection = false;
                if (this.nextSectionId !== false) {
                    this.nextSection = this.sections[this.nextSectionId];
                    this.nextSection.classList.add(this.options.nextClass);
                } else this.nextSection = false;
            }
            removeEffectsClasses() {
                switch (this.options.mode) {
                  case "slider":
                    this.wrapper.classList.remove("slider-mode");
                    break;

                  case "cards":
                    this.wrapper.classList.remove("cards-mode");
                    this.setZIndex();
                    break;

                  case "fade":
                    this.wrapper.classList.remove("fade-mode");
                    this.setZIndex();
                    break;

                  default:
                    break;
                }
            }
            setEffectsClasses() {
                switch (this.options.mode) {
                  case "slider":
                    this.wrapper.classList.add("slider-mode");
                    break;

                  case "cards":
                    this.wrapper.classList.add("cards-mode");
                    this.setZIndex();
                    break;

                  case "fade":
                    this.wrapper.classList.add("fade-mode");
                    this.setZIndex();
                    break;

                  default:
                    break;
                }
            }
            setStyle() {
                switch (this.options.mode) {
                  case "slider":
                    this.styleSlider();
                    break;

                  case "cards":
                    this.styleCards();
                    break;

                  case "fade":
                    this.styleFade();
                    break;

                  default:
                    break;
                }
            }
            styleSlider() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index === this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)"; else if (index > this.activeSectionId) section.style.transform = "translate3D(0,100%,0)";
                }
            }
            styleCards() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index >= this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)";
                }
            }
            styleFade() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index === this.activeSectionId) {
                        section.style.opacity = "1";
                        section.style.pointerEvents = "all";
                    } else {
                        section.style.opacity = "0";
                        section.style.pointerEvents = "none";
                    }
                }
            }
            removeStyle() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.opacity = "";
                    section.style.visibility = "";
                    section.style.transform = "";
                }
            }
            checkScroll(yCoord, element) {
                this.goScroll = false;
                if (!this.stopEvent && element) {
                    this.goScroll = true;
                    if (this.haveScroll(element)) {
                        this.goScroll = false;
                        const position = Math.round(element.scrollHeight - element.scrollTop);
                        if (Math.abs(position - element.scrollHeight) < 2 && yCoord <= 0 || Math.abs(position - element.clientHeight) < 2 && yCoord >= 0) this.goScroll = true;
                    }
                }
            }
            haveScroll(element) {
                return element.scrollHeight !== window.innerHeight;
            }
            removeClasses() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.classList.remove(this.options.activeClass);
                    section.classList.remove(this.options.previousClass);
                    section.classList.remove(this.options.nextClass);
                }
            }
            events() {
                this.events = {
                    wheel: this.wheel.bind(this),
                    touchdown: this.touchDown.bind(this),
                    touchup: this.touchUp.bind(this),
                    touchmove: this.touchMove.bind(this),
                    touchcancel: this.touchUp.bind(this),
                    transitionEnd: this.transitionend.bind(this),
                    click: this.clickBullets.bind(this)
                };
                if (isMobile.iOS()) document.addEventListener("touchmove", (e => {
                    e.preventDefault();
                }));
                this.setEvents();
            }
            setEvents() {
                this.wrapper.addEventListener("wheel", this.events.wheel);
                this.wrapper.addEventListener("touchstart", this.events.touchdown);
                if (this.options.bullets && this.bulletsWrapper) this.bulletsWrapper.addEventListener("click", this.events.click);
            }
            removeEvents() {
                this.wrapper.removeEventListener("wheel", this.events.wheel);
                this.wrapper.removeEventListener("touchdown", this.events.touchdown);
                this.wrapper.removeEventListener("touchup", this.events.touchup);
                this.wrapper.removeEventListener("touchcancel", this.events.touchup);
                this.wrapper.removeEventListener("touchmove", this.events.touchmove);
                if (this.bulletsWrapper) this.bulletsWrapper.removeEventListener("click", this.events.click);
            }
            clickBullets(e) {
                const bullet = e.target.closest(`.${this.options.bulletClass}`);
                if (bullet) {
                    const arrayChildren = Array.from(this.bulletsWrapper.children);
                    const idClickBullet = arrayChildren.indexOf(bullet);
                    this.switchingSection(idClickBullet);
                }
            }
            setActiveBullet(idButton) {
                if (!this.bulletsWrapper) return;
                const bullets = this.bulletsWrapper.children;
                for (let index = 0; index < bullets.length; index++) {
                    const bullet = bullets[index];
                    if (idButton === index) bullet.classList.add(this.options.bulletActiveClass); else bullet.classList.remove(this.options.bulletActiveClass);
                }
            }
            touchDown(e) {
                this._yP = e.changedTouches[0].pageY;
                this._eventElement = e.target.closest(`.${this.options.activeClass}`);
                if (this._eventElement) {
                    this._eventElement.addEventListener("touchend", this.events.touchup);
                    this._eventElement.addEventListener("touchcancel", this.events.touchup);
                    this._eventElement.addEventListener("touchmove", this.events.touchmove);
                    this.clickOrTouch = true;
                    if (isMobile.iOS()) {
                        if (this._eventElement.scrollHeight !== this._eventElement.clientHeight) {
                            if (this._eventElement.scrollTop === 0) this._eventElement.scrollTop = 1;
                            if (this._eventElement.scrollTop === this._eventElement.scrollHeight - this._eventElement.clientHeight) this._eventElement.scrollTop = this._eventElement.scrollHeight - this._eventElement.clientHeight - 1;
                        }
                        this.allowUp = this._eventElement.scrollTop > 0;
                        this.allowDown = this._eventElement.scrollTop < this._eventElement.scrollHeight - this._eventElement.clientHeight;
                        this.lastY = e.changedTouches[0].pageY;
                    }
                }
            }
            touchMove(e) {
                const targetElement = e.target.closest(`.${this.options.activeClass}`);
                if (isMobile.iOS()) {
                    let up = e.changedTouches[0].pageY > this.lastY;
                    let down = !up;
                    this.lastY = e.changedTouches[0].pageY;
                    if (targetElement) if (up && this.allowUp || down && this.allowDown) e.stopPropagation(); else if (e.cancelable) e.preventDefault();
                }
                if (!this.clickOrTouch || e.target.closest(this.options.noEventSelector)) return;
                let yCoord = this._yP - e.changedTouches[0].pageY;
                this.checkScroll(yCoord, targetElement);
                if (this.goScroll && Math.abs(yCoord) > 20) this.choiceOfDirection(yCoord);
            }
            touchUp(e) {
                this._eventElement.removeEventListener("touchend", this.events.touchup);
                this._eventElement.removeEventListener("touchcancel", this.events.touchup);
                this._eventElement.removeEventListener("touchmove", this.events.touchmove);
                return this.clickOrTouch = false;
            }
            transitionend(e) {
                this.stopEvent = false;
                document.documentElement.classList.remove(this.options.wrapperAnimatedClass);
                this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
            }
            wheel(e) {
                if (e.target.closest(this.options.noEventSelector)) return;
                const yCoord = e.deltaY;
                const targetElement = e.target.closest(`.${this.options.activeClass}`);
                this.checkScroll(yCoord, targetElement);
                if (this.goScroll) this.choiceOfDirection(yCoord);
            }
            choiceOfDirection(direction) {
                if (direction > 0 && this.nextSection !== false) this.activeSectionId = this.activeSectionId + 1 < this.sections.length ? ++this.activeSectionId : this.activeSectionId; else if (direction < 0 && this.previousSection !== false) this.activeSectionId = this.activeSectionId - 1 >= 0 ? --this.activeSectionId : this.activeSectionId;
                this.switchingSection(this.activeSectionId, direction);
            }
            switchingSection(idSection = this.activeSectionId, direction) {
                if (!direction) if (idSection < this.activeSectionId) direction = -100; else if (idSection > this.activeSectionId) direction = 100;
                this.activeSectionId = idSection;
                this.stopEvent = true;
                if (this.previousSectionId === false && direction < 0 || this.nextSectionId === false && direction > 0) this.stopEvent = false;
                if (this.stopEvent) {
                    document.documentElement.classList.add(this.options.wrapperAnimatedClass);
                    this.wrapper.classList.add(this.options.wrapperAnimatedClass);
                    this.removeClasses();
                    this.setClasses();
                    this.setStyle();
                    if (this.options.bullets) this.setActiveBullet(this.activeSectionId);
                    let delaySection;
                    if (direction < 0) {
                        delaySection = this.activeSection.dataset.fpDirectionUp ? parseInt(this.activeSection.dataset.fpDirectionUp) : 500;
                        document.documentElement.classList.add("fp-up");
                        document.documentElement.classList.remove("fp-down");
                    } else {
                        delaySection = this.activeSection.dataset.fpDirectionDown ? parseInt(this.activeSection.dataset.fpDirectionDown) : 500;
                        document.documentElement.classList.remove("fp-up");
                        document.documentElement.classList.add("fp-down");
                    }
                    setTimeout((() => {
                        this.events.transitionEnd();
                    }), delaySection);
                    this.options.onSwitching(this);
                    document.dispatchEvent(new CustomEvent("fpswitching", {
                        detail: {
                            fp: this
                        }
                    }));
                }
            }
            setBullets() {
                this.bulletsWrapper = document.querySelector(`.${this.options.bulletsClass}`);
                if (!this.bulletsWrapper) {
                    const bullets = document.createElement("div");
                    bullets.classList.add(this.options.bulletsClass);
                    this.wrapper.append(bullets);
                    this.bulletsWrapper = bullets;
                }
                if (this.bulletsWrapper) for (let index = 0; index < this.sections.length; index++) {
                    const span = document.createElement("span");
                    span.classList.add(this.options.bulletClass);
                    this.bulletsWrapper.append(span);
                }
            }
            setZIndex() {
                let zIndex = this.sections.length;
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.zIndex = zIndex;
                    --zIndex;
                }
            }
            removeZIndex() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.zIndex = "";
                }
            }
        }
        if (window.innerWidth < 767.98) ; else if (document.querySelector("[data-fp]")) modules_flsModules.fullpage = new FullPage(document.querySelector("[data-fp]"), "");
        let fullpageInstance = null;
        window.addEventListener("resize", (function() {
            const width = window.innerWidth;
            if (width <= 767.98 && fullpageInstance) {
                if (typeof fullpageInstance.destroy === "function") fullpageInstance.destroy();
                fullpageInstance = null;
            } else if (width > 767.98 && !fullpageInstance) {
                const fpElement = document.querySelector("[data-fp]");
                if (fpElement) fullpageInstance = new FullPage(fpElement, "");
            }
        }));
        document.addEventListener("DOMContentLoaded", (() => {
            const width = window.innerWidth;
            if (width > 767.98) {
                const fpElement = document.querySelector("[data-fp]");
                if (fpElement) fullpageInstance = new FullPage(fpElement, "");
            }
        }));
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        document.addEventListener("DOMContentLoaded", (() => {
            const loadingAndTimerBlocksWrapper = document.querySelector(".loading-timer");
            const loadingLineBlock = document.querySelector(".loading__loading-container");
            const startButtonBlock = document.querySelector(".loading__start-button");
            const startAndLoadingContainer = document.querySelector(".loading");
            const topLeftEllipse = document.querySelector(".loading-timer__left-top-ellipse");
            const topRightEllipse = document.querySelector(".loading-timer__right-top-ellipse");
            const bottomLeftEllipse = document.querySelector(".loading-timer__left-bottom-ellipse");
            const bottomRightEllipse = document.querySelector(".loading-timer__right-bottom-ellipse");
            const ellipsesContainer = document.querySelector(".loading-timer__bg-elements-container");
            const blackBackground = document.querySelector(".loading-timer__black-bg");
            const timerBlock = document.querySelector(".timer");
            const timerBgImage = document.querySelector(".loading-timer__mountains-bg");
            const firstLeaf = document.querySelector(".loading-timer__first-leaf");
            const secondLeaf = document.querySelector(".loading-timer__second-leaf");
            const thirdLeaf = document.querySelector(".loading-timer__third-leaf");
            const leafsContainer = document.querySelector(".loading-timer__bg-effects");
            const goblinImage = document.querySelector(".loading-timer__goblin");
            const dollarsBlock = document.querySelector(".dollars-block");
            const reviewsBlock = document.querySelector(".reviews");
            const animationBlock = document.querySelector(".dance-animation-block");
            const jackpotBlock = document.querySelector(".jackpot-block");
            const hiddenLoadingLineShowStartButton = () => {
                setTimeout((() => {
                    loadingLineBlock.style.animation = "loadingLineHiddenAnimation 0.2s ease";
                    setTimeout((() => {
                        loadingLineBlock.style.display = "none";
                        setTimeout((() => {
                            startButtonBlock.style.animation = "startButtonShowAnimation 0.3s ease";
                            setTimeout((() => {
                                startButtonBlock.style.display = "block";
                            }), 300);
                        }), 200);
                    }), 200);
                }), 1500);
            };
            hiddenLoadingLineShowStartButton();
            const hoverStartButton = () => {
                const loadingButtonDefault = document.querySelector(".loading__button-default");
                const loadingButtonHover = document.querySelector(".loading__button-hover");
                const loadingButtonActive = document.querySelector(".loading__button-active");
                startButtonBlock.addEventListener("mouseenter", (() => {
                    loadingButtonDefault.classList.add("_hidden");
                    loadingButtonHover.classList.remove("_hidden");
                    loadingButtonActive.classList.add("_hidden");
                }));
                startButtonBlock.addEventListener("mouseleave", (() => {
                    loadingButtonDefault.classList.remove("_hidden");
                    loadingButtonHover.classList.add("_hidden");
                    loadingButtonActive.classList.add("_hidden");
                }));
                startButtonBlock.addEventListener("mousedown", (() => {
                    loadingButtonDefault.classList.add("_hidden");
                    loadingButtonHover.classList.add("_hidden");
                    loadingButtonActive.classList.remove("_hidden");
                }));
                startButtonBlock.addEventListener("mouseup", (() => {
                    loadingButtonDefault.classList.add("_hidden");
                    loadingButtonHover.classList.remove("_hidden");
                    loadingButtonActive.classList.add("_hidden");
                    hiddenLoadPageAndShowTimerPage();
                    loadingAndTimerBlocksWrapper.removeAttribute("data-no-event");
                    setTimeout((() => {
                        document.querySelector("body").style.overflow = "auto";
                        document.querySelector(".mobile-header").style.opacity = "1";
                        document.querySelector(".timer-bottom").style.opacity = "1";
                        dollarsBlock.style.display = "block";
                        setTimeout((() => {
                            reviewsBlock.style.display = "block";
                            animationBlock.style.display = "block";
                            jackpotBlock.style.display = "block";
                        }), 1e3);
                    }), 1e3);
                }));
            };
            hoverStartButton();
            const hiddenLoadPageAndShowTimerPage = () => {
                startAndLoadingContainer.style.transform = "translateZ(1100px)";
                startAndLoadingContainer.style.animation = "loadingLineHiddenAnimation 1.4s ease";
                async function setOpacityEllipses() {
                    for (let i = 100; i > 0; i--) setTimeout((() => {
                        topLeftEllipse.style.opacity = `${i / 100}`;
                        topRightEllipse.style.opacity = `${i / 100}`;
                        bottomLeftEllipse.style.opacity = `${i / 100}`;
                        bottomRightEllipse.style.opacity = `${i / 100}`;
                    }), (100 - i) * 20);
                }
                setOpacityEllipses();
                setTimeout((() => {
                    blackBackground.style.opacity = "0.35";
                    ellipsesContainer.classList.add("_hidden");
                    startAndLoadingContainer.style.display = "none";
                    timerBlock.classList.remove("_hidden");
                    timerBgImage.classList.remove("_hidden");
                    leafsContainer.classList.remove("_hidden");
                    firstLeaf.style.animation = "showFirstLeaf 0.45s ease";
                    secondLeaf.style.animation = "showSecondLeaf 0.6s ease";
                    thirdLeaf.style.animation = "showThirdLeaf 0.55s ease";
                    firstLeaf.style.animation = "firstLeafAnimation 15s infinite";
                    secondLeaf.style.animation = "secondLeafAnimation 10s infinite";
                    thirdLeaf.style.animation = "thirdLeafAnimation 25s infinite";
                    setTimeout((() => {
                        goblinImage.classList.remove("_hidden");
                        goblinImage.style.animation = "goblinAnimation 0.8s ease";
                    }), 4e3);
                    setTimeout((() => {
                        timerBlock.style.animation = "showSmallLogoOpacity 1s ease";
                        setTimeout((() => {
                            timerBlock.style.opacity = "1";
                        }), 999);
                    }), 100);
                }), 1500);
            };
            const setTimerToApp = durationInDays => {
                const durationInMs = durationInDays * 24 * 60 * 60 * 1e3;
                let endTime = localStorage.getItem("timerEndTime");
                if (!endTime || (new Date).getTime() > endTime) {
                    endTime = (new Date).getTime() + durationInMs;
                    localStorage.setItem("timerEndTime", endTime);
                }
                function updateTimer() {
                    const now = (new Date).getTime();
                    const remainingTime = endTime - now;
                    if (remainingTime <= 0) {
                        endTime = (new Date).getTime() + durationInMs;
                        localStorage.setItem("timerEndTime", endTime);
                    }
                    const days = Math.floor(remainingTime / (1e3 * 60 * 60 * 24));
                    const hours = Math.floor(remainingTime % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
                    const minutes = Math.floor(remainingTime % (1e3 * 60 * 60) / (1e3 * 60));
                    const seconds = Math.floor(remainingTime % (1e3 * 60) / 1e3);
                    const daysElement = document.querySelector(".days-timer-element");
                    const hoursElement = document.querySelector(".hours-timer-element");
                    const minutesElement = document.querySelector(".minutes-timer-element");
                    const secondsElement = document.querySelector(".seconds-timer-element");
                    daysElement.innerHTML = `${days}`;
                    hoursElement.innerHTML = `${hours}`;
                    minutesElement.innerHtml = `${minutes}`;
                    secondsElement.innerHTML = `${seconds}`;
                }
                setInterval(updateTimer, 1e3);
                updateTimer();
            };
            setTimerToApp(5);
        }));
        document.addEventListener("DOMContentLoaded", (() => {
            const blockContent = document.querySelector(".dollars-block__content");
            document.addEventListener("watcherCallback", (function(e) {
                const entry = e.detail.entry;
                const targetElement = entry.target;
                console.log(targetElement);
                if (targetElement.classList.contains("dollars-block")) {
                    blockContent.classList.remove("_hidden");
                    setTimeout((() => {
                        blockContent.style.opacity = "1";
                    }), 200);
                    addAnimationToTopDollars();
                    addAnimationToCenterDollars();
                    addAnimationToBottomDollars();
                }
            }));
            const addAnimationToTopDollars = () => {
                const dollarsWrapper = document.querySelector(".dollars-block__top-dollars-wrapper");
                dollarsWrapper.firstElementChild.style.animation = "slideDownDollarsAnimation12 linear 60s infinite, swayTopDollarsAnimation ease 10s infinite";
            };
            const addAnimationToCenterDollars = () => {
                const centerDollars = document.querySelector(".dollars-block__center-dollars-wrapper").children;
                const animationSwaySpeed = [ 9.1, 6, 7, 8.2, 6.5, 5.5, 6.3, 7.2, 6.9, 8.7, 7.9 ];
                const animationDownDollars = [ 60, 65, 53, 74, 45, 49, 63, 53, 78, 72, 66 ];
                for (let i = 1; i <= 11; i++) centerDollars[i - 1].style.animation = `slideDownDollarsAnimation${i} linear ${animationDownDollars[i - 1]}s infinite,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tswayTopDollarsAnimation ease ${animationSwaySpeed[i - 1]}s infinite`;
            };
            const addAnimationToBottomDollars = () => {
                const bottomDollars = document.querySelector(".dollars-block__bottom-dollars-wrapper").children;
                const animationSwaySpeed = [ 9, 9.5, 8.9, 5.7, 4.2, 6.3, 5.1, 7.6, 6.2, 8.4, 6.6, 5.9, 6.1, 4.5, 4.8, 6, 5.3, 4.2 ];
                const animationDownDollars = [ 80, 94, 120, 87, 65, 77, 75, 89, 101, 94, 86, 89, 74, 120, 150, 69, 130, 77 ];
                for (let i = 1; i <= 18; i++) {
                    bottomDollars[i - 1].style.display = "block";
                    bottomDollars[i - 1].style.animation = `slideDownBottomDollarsAnimation${i} linear ${animationDownDollars[i - 1]}s infinite,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tswayBottomDollarsAnimation ease ${animationSwaySpeed[i - 1]}s infinite`;
                }
            };
        }));
        const showObjectAfterLazyLoading = object => {
            object.style.opacity = "1";
        };
        document.addEventListener("DOMContentLoaded", (() => {
            const hoverAndActivePlayButton = () => {
                const defaultPlayButton = document.querySelector(".main__button-default");
                const hoverPlayButton = document.querySelector(".main__button-hover");
                const activePlayButton = document.querySelector(".main__button-active");
                const playButtonBlock = document.querySelector(".main-button");
                playButtonBlock.addEventListener("mouseenter", (() => {
                    defaultPlayButton.classList.add("_hidden");
                    hoverPlayButton.classList.remove("_hidden");
                    activePlayButton.classList.add("_hidden");
                }));
                playButtonBlock.addEventListener("mouseleave", (() => {
                    defaultPlayButton.classList.remove("_hidden");
                    hoverPlayButton.classList.add("_hidden");
                    activePlayButton.classList.add("_hidden");
                }));
                playButtonBlock.addEventListener("mousedown", (() => {
                    defaultPlayButton.classList.add("_hidden");
                    hoverPlayButton.classList.add("_hidden");
                    activePlayButton.classList.remove("_hidden");
                }));
                playButtonBlock.addEventListener("mouseup", (() => {
                    defaultPlayButton.classList.add("_hidden");
                    hoverPlayButton.classList.remove("_hidden");
                    activePlayButton.classList.add("_hidden");
                }));
            };
            if (window.innerWidth < 768) hoverAndActivePlayButton();
        }));
        document.addEventListener("DOMContentLoaded", (() => {
            const blockContent = document.querySelector(".jackpot-block");
            const rotateWheel = document.querySelector(".wheel__wheel-image");
            const rotateEggs = document.querySelector(".eggs-rotate");
            const bigSparks = document.querySelectorAll(".spark");
            const smallSparks = document.querySelectorAll(".shadow-spark");
            const wheelAndEggsContainer = document.querySelector(".jackpot-block__wheel-eggs-inner-container");
            const sparksContainer = document.querySelector(".jackpot-block__sparks");
            const shadowSparksContainer = document.querySelector(".jackpot-block__shadow-sparks");
            let showAnimations = false;
            window.addEventListener("scroll", (() => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                console.log(scrollTop);
                console.log("Oblect", showElementPosition(blockContent));
                if (scrollTop > showElementPosition(blockContent) && showAnimations === false) {
                    showAnimations = true;
                    animationFunctions();
                    console.log("BINGO");
                }
            }));
            function showElementPosition(el) {
                var rect = el.getBoundingClientRect(), scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                let topElem = rect.top + scrollTop - 100;
                return topElem;
            }
            const animationFunctions = () => {
                const backgroundLights = document.querySelector(".jackpot-block__lights");
                backgroundLights.style.animation = "showObjectAfterLazyLoading 3s linear";
                setTimeout((() => {
                    backgroundLights.style.opacity = "1";
                }));
                const rotateObject = object => {
                    object.style.animation = "wheelRotateAnimation 10s cubic-bezier(.39,.01,.49,.99)";
                };
                setTimeout((() => {
                    rotateObject(rotateWheel);
                }), 2e3);
                const allEggsShadows = document.querySelectorAll(".eggs-rotate__egg-shadow");
                setTimeout((() => {
                    rotateEggs.style.animation = "wheelRotateAnimation 10s cubic-bezier(.39,.01,.49,.99)";
                    setTimeout((() => {
                        rotateEggs.style.animation = "eggsFlyAnimation 1s cubic-bezier(0,1.03,.17,1)";
                        flyEggs();
                        showJackpotText();
                    }), 5100);
                }), 2e3);
                for (let item of allEggsShadows) item.style.animation = "allEggsShadows 2s linear";
                setTimeout((() => {
                    for (let item of allEggsShadows) item.classList.add("egg-shadow");
                }), 2e3);
                const jackpotTextBlock = document.querySelector(".jackpot-text");
                const showJackpotText = () => {
                    jackpotTextBlock.style.animation = "showJackpotText 2s linear";
                    setTimeout((() => {
                        jackpotTextBlock.style.opacity = "1";
                    }), 2e3);
                };
                addAnimationToBigSparks();
                addAnimationToSmallSparks();
                showObjectAfterLazyLoading(wheelAndEggsContainer);
                showObjectAfterLazyLoading(sparksContainer);
                showObjectAfterLazyLoading(shadowSparksContainer);
            };
            const addAnimationToBigSparks = () => {
                for (let i = 1; i < bigSparks.length; i++) {
                    const random = Math.floor(Math.random() * 10);
                    bigSparks[i - 1].style.animation = `moveSpark${i} ${6 + random}s linear 2s`;
                }
            };
            const addAnimationToSmallSparks = () => {
                for (let i = 1; i < smallSparks.length; i++) {
                    const random = Math.floor(Math.random() * 10);
                    smallSparks[i - 1].style.animation = `moveShadowSpark${i} ${4 + random}s linear 2s`;
                }
            };
            const flyEggs = () => {
                const egg1 = document.querySelector(".egg1");
                const egg2 = document.querySelector(".egg2");
                const egg3 = document.querySelector(".egg3");
                const egg4 = document.querySelector(".egg4");
                const egg5 = document.querySelector(".egg5");
                const egg6 = document.querySelector(".egg6");
                const egg7 = document.querySelector(".egg7");
                const egg8 = document.querySelector(".egg8");
                const egg9 = document.querySelector(".egg9");
                const egg10 = document.querySelector(".egg10");
                const egg11 = document.querySelector(".egg11");
                const egg12 = document.querySelector(".egg12");
                let indexFly = 1;
                rotateEggs.style.maxWidth = "480.34px";
                rotateEggs.style.maxHeight = "480.34px";
                if (window.innerWidth >= 1920) {
                    egg1.style.transform = `translateX(${60 * indexFly}px) translateY(-${200 * indexFly}px)`;
                    egg2.style.transform = `translateX(${130 * indexFly}px) translateY(-${80 * indexFly}px) translateZ(300px)`;
                    egg3.style.transform = `translateX(${350 * indexFly}px) translateY(-${60 * indexFly}px)`;
                    egg4.style.transform = `translateX(${160 * indexFly}px) translateY(${25 * indexFly}px) translateZ(300px)`;
                    egg5.style.transform = `translateX(${190 * indexFly}px) translateY(${160 * indexFly}px)`;
                    egg6.style.transform = `translateX(${25 * indexFly}px) translateY(${95 * indexFly}px) translateZ(300px)`;
                    egg7.style.transform = `translateX(${-40 * indexFly}px) translateY(${170 * indexFly}px)`;
                    egg8.style.transform = `translateX(${-120 * indexFly}px) translateY(${110 * indexFly}px) translateZ(300px)`;
                    egg9.style.transform = `translateX(${-280 * indexFly}px) translateY(${80 * indexFly}px)`;
                    egg10.style.transform = `translateX(${-320 * indexFly}px) translateY(${-70 * indexFly}px)`;
                    egg11.style.transform = `translateX(${-130 * indexFly}px) translateY(${-100 * indexFly}px) translateZ(300px)`;
                    egg12.style.transform = `translateX(${-40 * indexFly}px) translateY(${-160 * indexFly}px)`;
                } else if (window.innerWidth < 1920 && window.innerWidth > 1500) {
                    egg1.style.transform = `translateX(3.125vw) translateY(-10.417vw)`;
                    egg2.style.transform = `translateX(6.771vw) translateY(-4.167vw) translateZ(15.625vw)`;
                    egg3.style.transform = `translateX(18.229vw) translateY(-3.125vw)`;
                    egg4.style.transform = `translateX(8.333vw) translateY(1.302vw) translateZ(15.625vw)`;
                    egg5.style.transform = `translateX(9.896vw) translateY(8.333vw)`;
                    egg6.style.transform = `translateX(1.302vw) translateY(4.948vw) translateZ(15.625vw)`;
                    egg7.style.transform = `translateX(-2.083vw) translateY(8.854vw)`;
                    egg8.style.transform = `translateX(-6.25vw) translateY(5.729vw) translateZ(15.625vw)`;
                    egg9.style.transform = `translateX(-14.583vw) translateY(4.167vw)`;
                    egg10.style.transform = `translateX(-16.667vw) translateY(-3.646vw)`;
                    egg11.style.transform = `translateX(-6.771vw) translateY(-5.208vw) translateZ(15.625vw)`;
                    egg12.style.transform = `translateX(-2.083vw) translateY(-8.333vw)`;
                } else if (window.innerWidth <= 1500 && window.innerWidth > 1200) {
                    egg1.style.transform = `translateX(1vw) translateY(-3vw)`;
                    egg2.style.transform = `translateX(3vw) translateY(-1.5vw) translateZ(15.625vw)`;
                    egg3.style.transform = `translateX(7vw) translateY(-1vw)`;
                    egg4.style.transform = `translateX(4vw) translateY(0.6vw) translateZ(15.625vw)`;
                    egg5.style.transform = `translateX(5vw) translateY(4vw)`;
                    egg6.style.transform = `translateX(0.8vw) translateY(2vw) translateZ(15.625vw)`;
                    egg7.style.transform = `translateX(-1.5vw) translateY(5vw)`;
                    egg8.style.transform = `translateX(-2vw) translateY(1.3vw) translateZ(15.625vw)`;
                    egg9.style.transform = `translateX(-6vw) translateY(2vw)`;
                    egg10.style.transform = `translateX(-7vw) translateY(-1vw)`;
                    egg11.style.transform = `translateX(-2vw) translateY(-1.5vw) translateZ(15.625vw)`;
                    egg12.style.transform = `translateX(-0.7vw) translateY(-3vw)`;
                } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
                    egg1.style.transform = `translateX(0.5vw) translateY(-0.5vw)`;
                    egg2.style.transform = `translateX(1vw) translateY(-0.5vw) translateZ(15.625vw)`;
                    egg3.style.transform = `translateX(7vw) translateY(-1vw)`;
                    egg4.style.transform = `translateX(4vw) translateY(0.6vw) translateZ(15.625vw)`;
                    egg5.style.transform = `translateX(5vw) translateY(4vw)`;
                    egg6.style.transform = `translateX(0.8vw) translateY(0.8vw) translateZ(15.625vw)`;
                    egg7.style.transform = `translateX(-0.8vw) translateY(3vw)`;
                    egg8.style.transform = `translateX(-1vw) translateY(1.3vw) translateZ(15.625vw)`;
                    egg9.style.transform = `translateX(-6vw) translateY(2vw)`;
                    egg10.style.transform = `translateX(-5vw) translateY(-1vw)`;
                    egg11.style.transform = `translateX(-0.3vw) translateY(-0.2vw) translateZ(15.625vw)`;
                    egg12.style.transform = `translateX(-0.3vw) translateY(-1vw)`;
                } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
                    egg1.style.transform = `translateX(1.4vw) translateY(2vw)`;
                    egg2.style.transform = `translateX(1.5vw) translateY(3vw) translateZ(15.625vw)`;
                    egg3.style.transform = `translateX(7vw) translateY(-1vw)`;
                    egg4.style.transform = `translateX(4vw) translateY(0.6vw) translateZ(15.625vw)`;
                    egg5.style.transform = `translateX(3vw) translateY(2.5vw)`;
                    egg6.style.transform = `translateX(0.1vw) translateY(0.1vw) translateZ(15.625vw)`;
                    egg7.style.transform = `translateX(0.5vw) translateY(1.5vw)`;
                    egg8.style.transform = `translateX(2vw) translateY(0vw) translateZ(15.625vw)`;
                    egg9.style.transform = `translateX(-5vw) translateY(2vw)`;
                    egg10.style.transform = `translateX(-2vw) translateY(-1vw)`;
                    egg11.style.transform = `translateX(1.5vw) translateY(2vw) translateZ(15.625vw)`;
                    egg12.style.transform = `translateX(-0.3vw) translateY(-1vw)`;
                } else if (window.innerWidth <= 768) {
                    egg1.style.transform = `translateX(15px) translateY(-65px)`;
                    egg2.style.transform = `translateX(65px) translateY(-65px) translateZ(50px)`;
                    egg3.style.transform = `translateX(65px) translateY(6px)`;
                    egg4.style.transform = `translateX(55px) translateY(22px) translateZ(50px)`;
                    egg5.style.transform = `translateX(65px) translateY(65px)`;
                    egg6.style.transform = `translateX(14px) translateY(65px) translateZ(50px)`;
                    egg7.style.transform = `translateX(-14px) translateY(65px)`;
                    egg8.style.transform = `translateX(-65px) translateY(65px) translateZ(50px)`;
                    egg9.style.transform = `translateX(-65px) translateY(22px)`;
                    egg10.style.transform = `translateX(-65px) translateY(-20px)`;
                    egg11.style.transform = `translateX(-65px) translateY(-65px) translateZ(50px)`;
                    egg12.style.transform = `translateX(-12px) translateY(-69px)`;
                }
            };
        }));
        document.addEventListener("DOMContentLoaded", (() => {
            const reviews = document.querySelectorAll(".reviews-container__review-image");
            let currentAnimation;
            function handleMouseEnter(event) {
                const item = event.currentTarget;
                item.style.animation = "none";
                item.style.transform = "translateZ(300px)";
                currentAnimation = window.getComputedStyle(item).getPropertyValue("animation");
                reviews.forEach((review => {
                    if (review !== item) review.removeEventListener("mouseenter", handleMouseEnter);
                }));
            }
            function handleMouseLeave(event) {
                const item = event.currentTarget;
                item.style.animation = currentAnimation;
                item.style.transform = "translateZ(0px)";
                reviews.forEach((review => {
                    review.addEventListener("mouseenter", handleMouseEnter);
                }));
            }
            reviews.forEach((item => {
                item.addEventListener("mouseenter", handleMouseEnter);
                item.addEventListener("mouseleave", handleMouseLeave);
            }));
        }));
        window["FLS"] = true;
    })();
})();