"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(["react", "reactDOM"], function (React, ReactDOM) {
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

                return React.createElement(
                    "a",
                    { href: "#", className: "mdc-list-item", "data-mdc-auto-init": "MDCRipple" },
                    React.createElement(
                        "span",
                        { className: "mdc-list-item__start-detail grey-bg", role: "presentation" },
                        React.createElement(
                            "i",
                            { className: "material-icons", "aria-hidden": "true" },
                            "description"
                        )
                    ),
                    React.createElement(
                        "span",
                        { className: "mdc-list-item__text" },
                        record.name,
                        React.createElement(
                            "span",
                            { className: "mdc-list-item__text__secondary" },
                            record.description
                        )
                    ),
                    React.createElement(
                        "span",
                        { className: "mdc-list-item__end-detail multiple-end-detail" },
                        React.createElement(
                            "a",
                            { href: "#", className: "material-icons", "aria-label": "View more information", title: "More info" },
                            "info"
                        ),
                        React.createElement(
                            "a",
                            { href: "#", className: "material-icons", "aria-label": "Edit", title: "Edit" },
                            "edit"
                        ),
                        React.createElement(
                            "a",
                            { href: "#", className: "material-icons", "aria-label": "Delete", title: "Delete" },
                            "delete"
                        )
                    )
                );
            }
        }]);

        return DataTableRow;
    }(React.Component);
});

//<tr>
//    {fieldList.map((field, index) =>
//        <DataTableColumn key={field.name} record={record} field={field.name} isFirstColumn={index == 0} />

//    )}
//</tr>
//# sourceMappingURL=data-table-row.js.map
