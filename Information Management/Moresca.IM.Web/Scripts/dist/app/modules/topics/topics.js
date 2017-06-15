"use strict";

define(["react", "reactDOM", "./topic"], function (React, ReactDOM, Topic) {
    var Topics = function Topics(_ref) {
        var match = _ref.match;
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "Topics"
            ),
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        Link,
                        { to: match.url + "/rendering" },
                        "Rendering with React"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        Link,
                        { to: match.url + "/components" },
                        "Components"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        Link,
                        { to: match.url + "/props-v-state" },
                        "Props v. State"
                    )
                )
            ),
            React.createElement(Route, { path: match.url + "/:topicId", component: Topic }),
            React.createElement(Route, { exact: true, path: match.url, render: function render() {
                    return React.createElement(
                        "h3",
                        null,
                        "Please select a topic."
                    );
                } })
        );
    };

    return Topics;
});
//# sourceMappingURL=topics.js.map
