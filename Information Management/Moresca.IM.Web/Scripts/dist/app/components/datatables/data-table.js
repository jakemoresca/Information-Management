define(["react", "reactDOM", "./data-table-row-list"], function (React, ReactDOM, DataTableRowList) {
    return class DataTable extends React.Component {
        constructor() {
            super();
        }

        render() {
            const recordList = this.props.recordList;
            const deleteAction = this.props.deleteAction;
            const editAction = this.props.editAction;

            return React.createElement(
                "ul",
                { className: "mdc-list" },
                React.createElement(DataTableRowList, { recordList: recordList, deleteAction: deleteAction, editAction: editAction })
            );
        }
    };
});

//<table className="table table-hover">
//    <thead>
//        <tr>
//            {fieldList.map((field) =>
//                <th key={field.name}>{field.value}</th>
//            )}
//        </tr>
//    </thead>
//    <DataTableRowList recordList={recordList} fieldList={fieldList} />
//</table>
//# sourceMappingURL=data-table.js.map
