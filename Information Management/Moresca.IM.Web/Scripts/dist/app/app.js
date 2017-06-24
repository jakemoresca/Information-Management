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
                                "nav",
                                { className: "navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top" },
                                React.createElement(
                                    "button",
                                    { className: "navbar-toggler navbar-toggler-right", type: "button", "data-toggle": "collapse", "data-target": "#navbarsExampleDefault", "aria-controls": "navbarsExampleDefault", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                                    React.createElement("span", { className: "navbar-toggler-icon" })
                                ),
                                React.createElement(
                                    "a",
                                    { className: "navbar-brand", href: "#" },
                                    "Information Management"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "collapse navbar-collapse", id: "navbarsExampleDefault" },
                                    React.createElement(
                                        "ul",
                                        { className: "navbar-nav mr-auto" },
                                        React.createElement(
                                            "li",
                                            { className: "nav-item active" },
                                            React.createElement(
                                                Link,
                                                { className: "nav-link active", to: "/" },
                                                "Home"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { className: "nav-item" },
                                            React.createElement(
                                                Link,
                                                { className: "nav-link", to: "/about" },
                                                "About"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { className: "nav-item" },
                                            React.createElement(
                                                Link,
                                                { className: "nav-link", to: "/topics" },
                                                "Topics"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "form",
                                        { className: "form-inline my-2 my-lg-0" },
                                        React.createElement("input", { className: "form-control mr-sm-2", placeholder: "Search", type: "text" }),
                                        React.createElement(
                                            "button",
                                            { className: "btn btn-outline-success my-2 my-sm-0", type: "submit" },
                                            "Search"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(Route, { strict: true, path: "/", component: Home }),
                                React.createElement(Route, { path: "/about", component: About }),
                                React.createElement(Route, { path: "/topics", component: Topics })
                            )
                        )
                    );
                }
            }]);

            return App;
        }(React.Component);

        ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
    });
});
//# sourceMappingURL=app.js.map
