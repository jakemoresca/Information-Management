define(["react", "reactDOM", "./datatables/data-table", "./buttons/button"],
function (React, ReactDOM, DataTable, Button)
{
    return class Home extends React.Component
    {
        constructor(props)
        {
            super(props);
            this.handleAdd = this.handleAdd.bind(this);

            this.state =
            {
                recordList:
                [
                    { id: 1, firstName: "Mark", lastName: "Otto", userName: "@mdo" },
                    { id: 2, firstName: "Jacob", lastName: "Thornton", userName: "@fat" },
                    { id: 3, firstName: "Larry", lastName: "the Bird", userName: "@twitter" }
                ],

                fieldList:
                [
                    { name: "id", value: "Id" },
                    { name: "firstName", value: "First Name" },
                    { name: "lastName", value: "Last Name" },
                    { name: "userName", value: "Username" }
                ]
            };
        }

        handleAdd(e)
        {
            e.preventDefault();

            var newRecord =
            {
                id: 4,
                firstName: "Mark2",
                lastName: "Otto2",
                userName: "@mdo2"
            };

            this.setState((prevState) => ({
                recordList: prevState.recordList.concat(newRecord)
            }));
        }

        render()
        {
            const recordList = this.state.recordList;
            const fieldList = this.state.fieldList;

            return (
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <Button text="Add" buttonType="outline-primary" action={this.handleAdd} />
                    </div>
                    <div className="card-block">
                        <DataTable recordList={recordList} fieldList={fieldList} />
                    </div>
                </div>
            );
        }
    }
});