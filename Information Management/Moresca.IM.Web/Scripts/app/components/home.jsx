define(["react", "reactDOM", "react-addons-update", "./datatables/data-table", "./buttons/button", "./dialogs/dialog"],
function (React, ReactDOM, update, DataTable, Button, Dialog)
{
    return class Home extends React.Component
    {
        constructor(props)
        {
            super(props);
            this.handleAdd = this.handleAdd.bind(this);
            this.handleEdit = this.handleEdit.bind(this);
            this.handleDelete = this.handleDelete.bind(this);
            this.handleJobNameChange = this.handleJobNameChange.bind(this);
            this.addNewJob = this.addNewJob.bind(this);
            this.updateJob = this.updateJob.bind(this);
            this.closeJobDialog = this.closeJobDialog.bind(this);
            this.addDialogId = "homeAddDialog";
            this.editDialogId = "homeEditDialog";

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

                jobToUpdate: null,
                jobNameToAdd: "",
                jobNameToUpdate: ""
            };
        }

        componentDidMount()
        {
            this.addDialogComponent = new mdc.dialog.MDCDialog(document.querySelector("#" + this.addDialogId));

            this.addDialogComponent.listen("MDCDialog:accept", function ()
            {
                this.addNewJob();
            }.bind(this));

            this.addDialogComponent.listen("MDCDialog:cancel", function ()
            {
                this.closeJobDialog();
            }.bind(this));

            this.editDialogComponent = new mdc.dialog.MDCDialog(document.querySelector("#" + this.editDialogId));

            this.editDialogComponent.listen("MDCDialog:accept", function ()
            {
                this.updateJob();
            }.bind(this));

            this.editDialogComponent.listen("MDCDialog:cancel", function ()
            {
                this.closeJobDialog();
            }.bind(this));
        }

        handleAdd(e)
        {
            e.preventDefault();

            this.addDialogComponent.show();
        }

        handleEdit(record)
        {
            this.setState({ jobToUpdate: record, jobNameToUpdate: record.name });

            this.editDialogComponent.show();
        }

        handleDelete(record)
        {
            var confirmAction = confirm("Are you sure do you want to delete this Job?");

            if(confirmAction)
            {
                const index = this.state.recordList.indexOf(record);

                if (index !== -1)
                {
                    this.setState((prevState) => ({
                        recordList: prevState.recordList.filter((_, i) => i !== index)
                    }));
                }
            }
        }

        handleJobNameChange(e)
        {
            e.preventDefault();
            this.setState({ jobNameToAdd: e.target.value, jobNameToUpdate: e.target.value });
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
                recordList: prevState.recordList.concat(newRecord),
                jobNameToAdd: "",
                jobNameToUpdate: "",
                jobToUpdate: null
            }));
        }

        updateJob(e)
        {
            const jobToUpdate = this.state.jobToUpdate;
            const jobNameToUpdate = this.state.jobNameToUpdate;
            const index = this.state.recordList.indexOf(jobToUpdate);

            if (index !== -1)
            {
                this.setState({
                    recordList: update(this.state.recordList, { index: { name: { $set: jobNameToUpdate } } }),
                    jobNameToAdd: "",
                    jobNameToUpdate: "",
                    jobToUpdate: null
                })
            }
        }

        closeJobDialog(e)
        {
            this.setState((prevState) => ({
                jobNameToAdd: "",
                jobNameToUpdate: "",
                jobToUpdate: null
            }));

            this.addDialogComponent.close();
            this.editDialogComponent.close();
        }

        render()
        {
            const recordList = this.state.recordList;
            const fieldList = this.state.fieldList;
            const jobNameToAdd = this.state.jobNameToAdd;
            const jobNameToUpdate = this.state.jobNameToUpdate;

            return (
                <div className="mdc-card demo-card">
                    <section className="mdc-card__primary">
                        <h1 className="mdc-card__title mdc-card__title--large">Jobs
                            <Button text="Add" action={this.handleAdd} additionalClass="float-right" />
                            <Dialog dialogId={this.addDialogId} title="Add Job" acceptAction={this.addNewJob} declineAction={this.closeJobDialog}
                                acceptText="Add" declineText="Cancel">
                                <div className="mdc-form-field mdc-form-field--align-end">
                                    <label className="mdc-textfield">
                                        <input type="text" className="mdc-textfield__input" value={jobNameToAdd} onChange={this.handleJobNameChange} />
                                        <span className="mdc-textfield__label">Job Name</span>
                                    </label>
                                </div>
                            </Dialog>
                        </h1>
                        <DataTable recordList={recordList} fieldList={fieldList} deleteAction={this.handleDelete} editAction={this.handleEdit} />
                        <Dialog dialogId={this.editDialogId} title="Edit Job" acceptAction={this.updateJob} declineAction={this.closeJobDialog}
                            acceptText="Update" declineText="Cancel">
                            <div className="mdc-form-field mdc-form-field--align-end">
                                <label className="mdc-textfield">
                                    <input type="text" className="mdc-textfield__input" value={jobNameToUpdate} onChange={this.handleJobNameChange} />
                                    <span className="mdc-textfield__label">Job Name</span>
                                </label>
                            </div>
                        </Dialog>
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