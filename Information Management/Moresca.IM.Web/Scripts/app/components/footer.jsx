﻿define(["react", "reactDOM"],
function (React, ReactDOM)
{
    return class Footer extends React.Component
    {
        constructor()
        {
            super();
        }

        render()
        {
            return (
                <div className="mastfoot">
                    <div className="inner">
                        <p>Cover template for <a href="https://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo"></a>.</p>
                    </div>
                </div>
            );
        }
    }
});