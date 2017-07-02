"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require(["reactRouterDom"], function (RouterDOM) {
    window.Router = RouterDOM.HashRouter;
    window.Link = RouterDOM.Link;
    window.Route = RouterDOM.Route;

    require(["react", "reactDOM", "./components/footer", "./components/home", "./modules/about/about", "./modules/topics/topics"], function (React, ReactDOM, Footer, Home, About, Topics) {
        var App = function (_React$Component) {
            _inherits(App, _React$Component);

            function App() {
                _classCallCheck(this, App);

                return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
            }

            _createClass(App, [{
                key: "render",
                value: function render() {
                    return React.createElement(
                        Router,
                        null,
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "header",
                                { className: "mdc-toolbar mdc-toolbar--fixed" },
                                React.createElement(
                                    "div",
                                    { className: "mdc-toolbar__row" },
                                    React.createElement(
                                        "section",
                                        { className: "mdc-toolbar__section mdc-toolbar__section--align-start" },
                                        React.createElement(
                                            "a",
                                            { href: "#", className: "material-icons mdc-toolbar__icon--menu menu" },
                                            "menu"
                                        ),
                                        React.createElement(
                                            "span",
                                            { className: "mdc-toolbar__title" },
                                            "Job Tracker"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "aside",
                                { className: "mdc-temporary-drawer mdc-typography" },
                                React.createElement(
                                    "nav",
                                    { className: "mdc-temporary-drawer__drawer" },
                                    React.createElement(
                                        "header",
                                        { className: "mdc-temporary-drawer__header" },
                                        React.createElement(
                                            "div",
                                            { className: "mdc-temporary-drawer__header-content" },
                                            "Job Tracker"
                                        )
                                    ),
                                    React.createElement(
                                        "nav",
                                        { id: "icon-with-text-demo", className: "mdc-temporary-drawer__content mdc-list" },
                                        React.createElement(
                                            Link,
                                            { className: "mdc-list-item mdc-temporary-drawer--selected", to: "/" },
                                            React.createElement(
                                                "i",
                                                { className: "material-icons mdc-list-item__start-detail", "aria-hidden": "true" },
                                                "home"
                                            ),
                                            "Home"
                                        ),
                                        React.createElement(
                                            Link,
                                            { className: "mdc-list-item", to: "/about" },
                                            React.createElement(
                                                "i",
                                                { className: "material-icons mdc-list-item__start-detail", "aria-hidden": "true" },
                                                "star"
                                            ),
                                            "About"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "mdc-layout-grid" },
                                React.createElement(
                                    "div",
                                    { className: "mdc-layout-grid__inner" },
                                    React.createElement(
                                        "div",
                                        { className: "mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet" },
                                        React.createElement(Route, { strict: true, path: "/", component: Home }),
                                        React.createElement(Route, { path: "/about", component: About }),
                                        React.createElement(Route, { path: "/topics", component: Topics })
                                    )
                                )
                            )
                        )
                    );
                }
            }]);

            return App;
        }(React.Component);

        ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

        var drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
        document.querySelector('.menu').addEventListener('click', function () {
            return drawer.open = true;
        });

        mdc.autoInit();
    });
});

//<div>
//    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
//        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
//            <span className="navbar-toggler-icon"></span>
//        </button>
//        <a className="navbar-brand" href="#">Information Management</a>

//        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
//            <ul className="navbar-nav mr-auto">
//                <li className="nav-item active">
//                    <Link className="nav-link active" to="/">Home</Link>
//                </li>
//                <li className="nav-item">
//                    <Link className="nav-link" to="/about">About</Link>
//                </li>
//                <li className="nav-item">
//                    <Link className="nav-link" to="/topics">Topics</Link>
//                </li>
//            </ul>
//            <form className="form-inline my-2 my-lg-0">
//                <input className="form-control mr-sm-2" placeholder="Search" type="text" />
//                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//            </form>
//        </div>
//    </nav>
//    <div className="container">
//        <Route strict path="/" component={Home} />
//        <Route path="/about" component={About} />
//        <Route path="/topics" component={Topics} />
//    </div>
//</div>
//# sourceMappingURL=app.js.map
