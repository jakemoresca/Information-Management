"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require(["reactRouterDom"], function (RouterDOM) {
    window.Router = RouterDOM.BrowserRouter;
    window.Link = RouterDOM.Link;
    window.Route = RouterDOM.Route;

    require(["react", "reactDOM", "./components/footer"], function (React, ReactDOM, Footer) {
        var Home = function Home() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    { className: "cover-heading" },
                    "Cover your page."
                ),
                React.createElement(
                    "p",
                    { className: "lead" },
                    "Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own."
                ),
                React.createElement(
                    "p",
                    { className: "lead" },
                    React.createElement(
                        "a",
                        { href: "#", className: "btn btn-lg btn-secondary" },
                        "Learn more"
                    )
                )
            );
        };

        var About = function About() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    "About"
                )
            );
        };

        var Topics = function Topics(_ref) {
            var match = _ref.match;
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    "Topics"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            Link,
                            { to: match.url + "/rendering" },
                            "Rendering with React"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            Link,
                            { to: match.url + "/components" },
                            "Components"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            Link,
                            { to: match.url + "/props-v-state" },
                            "Props v. State"
                        )
                    )
                ),
                React.createElement(Route, { path: match.url + "/:topicId", component: Topic }),
                React.createElement(Route, { exact: true, path: match.url, render: function render() {
                        return React.createElement(
                            "h3",
                            null,
                            "Please select a topic."
                        );
                    } })
            );
        };

        var Topic = function Topic(_ref2) {
            var match = _ref2.match;
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    match.params.topicId
                )
            );
        };

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
                        "div",
                        { className: "site-wrapper-inner" },
                        React.createElement(
                            Router,
                            null,
                            React.createElement(
                                "div",
                                { className: "cover-container" },
                                React.createElement(
                                    "div",
                                    { className: "masthead clearfix" },
                                    React.createElement(
                                        "div",
                                        { className: "inner" },
                                        React.createElement(
                                            "h3",
                                            { className: "masthead-brand" },
                                            "Cover"
                                        ),
                                        React.createElement(
                                            "nav",
                                            { className: "nav nav-masthead" },
                                            React.createElement(
                                                Link,
                                                { className: "nav-link active", to: "/" },
                                                "Home"
                                            ),
                                            React.createElement(
                                                Link,
                                                { className: "nav-link", to: "/about" },
                                                "About"
                                            ),
                                            React.createElement(
                                                Link,
                                                { className: "nav-link", to: "/topics" },
                                                "Topics"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "inner cover" },
                                    React.createElement(Route, { exact: true, path: "/", component: Home }),
                                    React.createElement(Route, { path: "/about", component: About }),
                                    React.createElement(Route, { path: "/topics", component: Topics })
                                ),
                                React.createElement(Footer, null)
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
