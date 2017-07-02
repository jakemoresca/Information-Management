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
                <div>
                    {recordList.map((record) =>
                        <DataTableRow key={record.id} record={record} />
                    )}
                </div>
            );
        }
    }
});