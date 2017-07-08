define(["react", "reactDOM", "./data-table-row"], function (React, ReactDOM, DataTableRow) {
    return class DataTableRowList extends React.Component {
        constructor() {
            super();
        }

        render() {
            const recordList = this.props.recordList;

            return React.createElement(
                "div",
                null,
                recordList.map(record => React.createElement(DataTableRow, { key: record.id, record: record }))
            );
        }
    };
});
//# sourceMappingURL=data-table-row-list.js.map
