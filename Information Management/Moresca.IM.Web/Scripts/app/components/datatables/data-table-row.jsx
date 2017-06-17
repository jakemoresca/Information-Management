define(["react", "reactDOM"],
function (React, ReactDOM)
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

            return (
                <tr>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                </tr>
            );
        }
    }
});