"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(["react", "reactDOM", "./data-table-column"], function (React, ReactDOM, DataTableColumn) {
    return function (_React$Component) {
        _inherits(DataTableRow, _React$Component);

        function DataTableRow() {
            _classCallCheck(this, DataTableRow);

            return _possibleConstructorReturn(this, (DataTableRow.__proto__ || Object.getPrototypeOf(DataTableRow)).call(this));
        }

        _createClass(DataTableRow, [{
            key: "render",
            value: function render() {
                var record = this.props.record;
                var fieldList = this.props.fieldList;

                return React.createElement(
                    "tr",
                    null,
                    fieldList.map(function (field, index) {
                        return React.createElement(DataTableColumn, { key: field.name, record: record, field: field.name, isFirstColumn: index == 0 });
                    })
                );
            }
        }]);

        return DataTableRow;
    }(React.Component);
});
//# sourceMappingURL=data-table-row.js.map
