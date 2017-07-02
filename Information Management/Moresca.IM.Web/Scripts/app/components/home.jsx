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
                    { id: 1, name: "Mark", description: "July 2, 2017 9:46 AM" },
                    { id: 2, name: "Jacob", description: "July 2, 2017 9:46 AM" },
                    { id: 3, name: "Larry", description: "July 2, 2017 9:46 AM" }
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
                <div className="mdc-card demo-card">
                    <section className="mdc-card__primary">
                        <h1 className="mdc-card__title mdc-card__title--large">Jobs
                            <Button text="Add" action={this.handleAdd} additionalClass="float-right" />
                        </h1>
                        <DataTable recordList={recordList} fieldList={fieldList} />
                    </section>
                    <section className="mdc-card__actions">
                    </section>
                </div>
            );
        }
    }
});


//<div className="card">
//    <div className="card-block">
//        <h4 className="card-title">Card title</h4>
//        
//    </div>
//    <div className="card-block">
//        <DataTable recordList={recordList} fieldList={fieldList} />
//    </div>
//</div>