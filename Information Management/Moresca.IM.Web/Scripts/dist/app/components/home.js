"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(["react", "reactDOM", "./datatables/data-table"], function (React, ReactDOM, DataTable) {
    return function (_React$Component) {
        _inherits(Home, _React$Component);

        function Home() {
            _classCallCheck(this, Home);

            return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
        }

        _createClass(Home, [{
            key: "render",
            value: function render() {
                var recordList = [{ id: 1, firstName: "Mark", lastName: "Otto", userName: "@mdo" }, { id: 2, firstName: "Jacob", lastName: "Thornton", userName: "@fat" }, { id: 3, firstName: "Larry", lastName: "the Bird", userName: "@twitter" }];

                var fieldList = [{ name: "id", value: "Id" }, { name: "firstName", value: "First Name" }, { name: "lastName", value: "Last Name" }, { name: "userName", value: "Username" }];

                return React.createElement(DataTable, { recordList: recordList, fieldList: fieldList });
            }
        }]);

        return Home;
    }(React.Component);
});
//# sourceMappingURL=home.js.map
