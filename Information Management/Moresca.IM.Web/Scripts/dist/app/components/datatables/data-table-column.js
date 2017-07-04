define(["react", "reactDOM"], function (React, ReactDOM) {
    return class DataTableColumn extends React.Component {
        constructor() {
            super();
        }

        render() {
            const record = this.props.record;
            const field = this.props.field;
            const isFirstColumn = this.props.isFirstColumn;

            return isFirstColumn ? React.createElement(
                "th",
                { scope: "row" },
                record[field]
            ) : React.createElement(
                "td",
                null,
                record[field]
            );
        }
    };
});
//# sourceMappingURL=data-table-column.js.map
