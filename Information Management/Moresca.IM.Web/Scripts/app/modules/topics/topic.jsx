define(["react", "reactDOM"],
function (React, ReactDOM)
{
    var Topic = ({ match }) => (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    )

    return Topic;
});