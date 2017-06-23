define(["react", "reactDOM"],
function (React, ReactDOM)
{
    return class DataTableColumn extends React.Component
    {
        constructor()
        {
            super();
        }

        render()
        {
            const record = this.props.record;
            const field = this.props.field;
            const isFirstColumn = this.props.isFirstColumn;

            return (
                isFirstColumn ? (
                    <th scope="row">{record[field]}</th>
                ) : (
                    <td>{record[field]}</td>
                )
            );
        }
    }
});