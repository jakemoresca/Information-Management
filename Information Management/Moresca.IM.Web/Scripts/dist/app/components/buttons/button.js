"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(["react", "reactDOM"], function (React, ReactDOM) {
    return function (_React$Component) {
        _inherits(Button, _React$Component);

        function Button() {
            _classCallCheck(this, Button);

            return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));
        }

        _createClass(Button, [{
            key: "render",
            value: function render() {
                var text = this.props.text;
                var buttonType = this.props.buttonType;
                var action = this.props.action;

                var buttonTypeClassName = buttonType != null ? "btn btn-" + buttonType : "btn";

                return React.createElement(
                    "a",
                    { className: buttonTypeClassName, href: "#", role: "button", onClick: action },
                    text
                );
            }
        }]);

        return Button;
    }(React.Component);
});
//# sourceMappingURL=button.js.map
