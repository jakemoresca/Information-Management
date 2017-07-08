define(["react", "reactDOM"], function (React, ReactDOM) {
    return class About extends React.Component {
        constructor() {
            super();
        }

        render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    "About"
                )
            );
        }
    };
});
//# sourceMappingURL=about.js.map
