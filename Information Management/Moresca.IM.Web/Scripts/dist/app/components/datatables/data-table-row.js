define(["react", "reactDOM"], function (React, ReactDOM) {
    return class DataTableRow extends React.Component {
        constructor() {
            super();
        }

        render() {
            const record = this.props.record;
            const deleteAction = this.props.deleteAction;
            const editAction = this.props.editAction;

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
                        { href: "#", className: "material-icons", "aria-label": "Edit", title: "Edit", onClick: () => editAction(record) },
                        "edit"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", className: "material-icons", "aria-label": "Delete", title: "Delete", onClick: () => deleteAction(record) },
                        "delete"
                    )
                )
            );
        }
    };
});

//<tr>
//    {fieldList.map((field, index) =>
//        <DataTableColumn key={field.name} record={record} field={field.name} isFirstColumn={index == 0} />

//    )}
//</tr>
//# sourceMappingURL=data-table-row.js.map
