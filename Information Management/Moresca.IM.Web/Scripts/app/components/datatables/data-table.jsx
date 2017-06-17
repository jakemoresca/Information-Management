define(["react", "reactDOM", "./data-table-row-list"],
function (React, ReactDOM, DataTableRowList)
{
    return class DataTable extends React.Component
    {
        constructor()
        {
            super();
        }

        render()
        {
            const recordList = this.props.recordList;
            const headerList = this.props.headerList;

            return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {headerList.map((header) =>
                                <th>{header}</th>
                            )}
                        </tr>
                    </thead>
                    <DataTableRowList recordList={recordList} />
                </table>
            );
        }
    }
});