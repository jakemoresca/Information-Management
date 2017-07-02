"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(["react", "reactDOM", "./datatables/data-table", "./buttons/button"], function (React, ReactDOM, DataTable, Button) {
    return function (_React$Component) {
        _inherits(Home, _React$Component);

        function Home(props) {
            _classCallCheck(this, Home);

            var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

            _this.handleAdd = _this.handleAdd.bind(_this);

            _this.state = {
                recordList: [{ id: 1, name: "Mark", description: "July 2, 2017 9:46 AM" }, { id: 2, name: "Jacob", description: "July 2, 2017 9:46 AM" }, { id: 3, name: "Larry", description: "July 2, 2017 9:46 AM" }],

                fieldList: [{ name: "id", value: "Id" }, { name: "firstName", value: "First Name" }, { name: "lastName", value: "Last Name" }, { name: "userName", value: "Username" }]
            };
            return _this;
        }

        _createClass(Home, [{
            key: "handleAdd",
            value: function handleAdd(e) {
                e.preventDefault();

                var newRecord = {
                    id: 4,
                    firstName: "Mark2",
                    lastName: "Otto2",
                    userName: "@mdo2"
                };

                this.setState(function (prevState) {
                    return {
                        recordList: prevState.recordList.concat(newRecord)
                    };
                });
            }
        }, {
            key: "render",
            value: function render() {
                var recordList = this.state.recordList;
                var fieldList = this.state.fieldList;

                return React.createElement(
                    "div",
                    { className: "mdc-card demo-card" },
                    React.createElement(
                        "section",
                        { className: "mdc-card__primary" },
                        React.createElement(
                            "h1",
                            { className: "mdc-card__title mdc-card__title--large" },
                            "Jobs",
                            React.createElement(
                                "label",
                                { className: "mdc-textfield float-right" },
                                React.createElement("input", { type: "text", className: "mdc-textfield__input" }),
                                React.createElement(
                                    "span",
                                    { className: "mdc-textfield__label" },
                                    "Search"
                                )
                            ),
                            React.createElement(Button, { text: "Add", action: this.handleAdd, additionalClass: "float-right" })
                        ),
                        React.createElement(DataTable, { recordList: recordList, fieldList: fieldList })
                    ),
                    React.createElement("section", { className: "mdc-card__actions" })
                );
            }
        }]);

        return Home;
    }(React.Component);
});

//<div className="card">
//    <div className="card-block">
//        <h4 className="card-title">Card title</h4>
//        
//    </div>
//    <div className="card-block">
//        <DataTable recordList={recordList} fieldList={fieldList} />
//    </div>
//</div>
//# sourceMappingURL=home.js.map
