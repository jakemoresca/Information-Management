"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Footer from './components/footer';

define(['components/footer'], function (Footer) {
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
                                        "a",
                                        { className: "nav-link active", href: "#" },
                                        "Home"
                                    ),
                                    React.createElement(
                                        "a",
                                        { className: "nav-link", href: "#" },
                                        "Features"
                                    ),
                                    React.createElement(
                                        "a",
                                        { className: "nav-link", href: "#" },
                                        "Contact"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "inner cover" },
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
                        ),
                        React.createElement(Footer, null)
                    )
                );
            }
        }]);

        return App;
    }(React.Component);

    ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
});
//# sourceMappingURL=app.js.map
