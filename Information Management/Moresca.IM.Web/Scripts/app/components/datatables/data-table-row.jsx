define(["react", "reactDOM", "./data-table-column"],
function (React, ReactDOM, DataTableColumn)
{
    return class DataTableRow extends React.Component
    {
        constructor()
        {
            super();
        }

        render()
        {
            const record = this.props.record;
            const fieldList = this.props.fieldList;

            return (
                <tr>
                    {fieldList.map((field, index) =>
                        <DataTableColumn key={field.name} record={record} field={field.name} isFirstColumn={index == 0} />
                    )}
                </tr>
            );
        }
    }
});