"use strict";

define(["react", "reactDOM"], function (React, ReactDOM) {
    var Topic = function Topic(_ref) {
        var match = _ref.match;
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h3",
                null,
                match.params.topicId
            )
        );
    };

    return Topic;
});
//# sourceMappingURL=topic.js.map
