define(["react", "reactDOM", "./datatables/data-table", "./buttons/button", "./dialogs/dialog"],
function (React, ReactDOM, DataTable, Button, Dialog)
{
    return class Home extends React.Component
    {
        constructor(props)
        {
            super(props);
            this.handleAdd = this.handleAdd.bind(this);
            this.handleJobNameChange = this.handleJobNameChange.bind(this);
            this.addNewJob = this.addNewJob.bind(this);
            this.closeJobDialog = this.closeJobDialog.bind(this);
            this.dialogId = "homeDialog";

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
                ],

                jobNameToAdd: ""
            };
        }

        componentDidMount()
        {
            this.dialogComponent = new mdc.dialog.MDCDialog(document.querySelector("#" + this.dialogId));

            this.dialogComponent.listen("MDCDialog:accept", function ()
            {
                this.addNewJob();
            }.bind(this));

            this.dialogComponent.listen("MDCDialog:cancel", function ()
            {
                this.closeJobDialog();
            }.bind(this));
        }

        handleAdd(e)
        {
            e.preventDefault();

            this.dialogComponent.show();
        }

        handleJobNameChange(e)
        {
            e.preventDefault();
            this.setState({ jobNameToAdd: e.target.value });
        }

        addNewJob(e)
        {
            var newRecord =
            {
                id: 10,
                name: this.state.jobNameToAdd,
                description: "July 2, 2017 9:46 AM"
            };

            this.setState((prevState) => ({
                recordList: prevState.recordList.concat(newRecord)
            }));
        }

        closeJobDialog(e)
        {
            this.dialogComponent.close();
        }

        render()
        {
            const recordList = this.state.recordList;
            const fieldList = this.state.fieldList;
            const jobNameToAdd = this.state.jobNameToAdd;

            return (
                <div className="mdc-card demo-card">
                    <section className="mdc-card__primary">
                        <h1 className="mdc-card__title mdc-card__title--large">Jobs
                            <Button text="Add" action={this.handleAdd} additionalClass="float-right" />
                            <Dialog dialogId={this.dialogId} title="Add Job" acceptAction={this.addNewJob} declineAction={this.closeJobDialog}
                                acceptText="Add" declineText="Cancel">
                                <div className="mdc-form-field mdc-form-field--align-end">
                                    <label className="mdc-textfield">
                                        <input type="text" className="mdc-textfield__input" value={jobNameToAdd} onChange={this.handleJobNameChange} />
                                        <span className="mdc-textfield__label">Job Name</span>
                                    </label>
                                </div>
                            </Dialog>
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