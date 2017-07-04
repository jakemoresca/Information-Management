define(["react", "reactDOM"], function (React, ReactDOM) {
    var Topic = ({ match }) => React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            match.params.topicId
        )
    );

    return Topic;
});
//# sourceMappingURL=topic.js.map
