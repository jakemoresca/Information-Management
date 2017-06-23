"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(["react", "reactDOM", "./data-table-row-list"], function (React, ReactDOM, DataTableRowList) {
    return function (_React$Component) {
        _inherits(DataTable, _React$Component);

        function DataTable() {
            _classCallCheck(this, DataTable);

            return _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this));
        }

        _createClass(DataTable, [{
            key: "render",
            value: function render() {
                var recordList = this.props.recordList;
                var fieldList = this.props.fieldList;

                return React.createElement(
                    "table",
                    { className: "table table-hover" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            fieldList.map(function (field) {
                                return React.createElement(
                                    "th",
                                    { key: field.name },
                                    field.value
                                );
                            })
                        )
                    ),
                    React.createElement(DataTableRowList, { recordList: recordList, fieldList: fieldList })
                );
            }
        }]);

        return DataTable;
    }(React.Component);
});
//# sourceMappingURL=data-table.js.map
