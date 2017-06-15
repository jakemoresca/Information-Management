define(["react", "reactDOM"],
function (React, ReactDOM)
{
    return class About extends React.Component
    {
        constructor()
        {
            super();
        }

        render()
        {
            return (
                <div>
                    <h2>About</h2>
                </div>
            );
        }
    }
});