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

            const headerList = ["Id", "First Name", "Last Name", "Username"];

            return (
                <DataTable recordList={recordList} headerList={headerList} />
            );
        }
    }
});