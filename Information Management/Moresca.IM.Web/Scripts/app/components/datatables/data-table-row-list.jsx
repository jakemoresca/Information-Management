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
            const deleteAction = this.props.deleteAction;
            const editAction = this.props.editAction;

            return (
                <div>
                    {recordList.map((record) =>
                        <DataTableRow key={record.id} record={record} deleteAction={deleteAction} editAction={editAction} />
                    )}
                </div>
            );
        }
    }
});