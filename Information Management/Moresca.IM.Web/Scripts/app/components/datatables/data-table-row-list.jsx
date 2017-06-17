define(["react", "reactDOM", "./data-table-row"],
function (React, ReactDOM, DataTableRow)
{
    return class DataTableRowList extends React.Component
    {
        constructor()
        {
            super();
        }

        render()
        {
            const recordList = this.props.recordList;

            return (
                <tbody>
                    {recordList.map((record) =>
                        <DataTableRow record={record} />
                    )}
                </tbody>
            );
        }
    }
});