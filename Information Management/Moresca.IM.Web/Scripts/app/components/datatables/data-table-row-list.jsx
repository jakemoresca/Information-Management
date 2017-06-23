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
            const fieldList = this.props.fieldList;

            return (
                <tbody>
                    {recordList.map((record) =>
                        <DataTableRow key={record.id} record={record} fieldList={fieldList} />
                    )}
                </tbody>
            );
        }
    }
});