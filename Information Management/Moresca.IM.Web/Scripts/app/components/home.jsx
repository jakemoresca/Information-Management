define(["react", "reactDOM", "./datatables/data-table"],
function (React, ReactDOM, DataTable)
{
    return class Home extends React.Component
    {
        constructor()
        {
            super();
        }

        render()
        {
            const recordList =
                [
                    { id: 1, firstName: "Mark", lastName: "Otto", userName: "@mdo" },
                    { id: 2, firstName: "Jacob", lastName: "Thornton", userName: "@fat" },
                    { id: 3, firstName: "Larry", lastName: "the Bird", userName: "@twitter" }
                ];

            const fieldList =
                [
                    { name: "id", value: "Id" },
                    { name: "firstName", value: "First Name" },
                    { name: "lastName", value: "Last Name" },
                    { name: "userName", value: "Username" }
                ];

            return (
                <DataTable recordList={recordList} fieldList={fieldList} />
            );
        }
    }
});