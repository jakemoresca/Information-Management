define(["react", "reactDOM"], function (React, ReactDOM) {
    return class Footer extends React.Component {
        constructor() {
            super();
        }

        render() {
            return React.createElement(
                "div",
                { className: "mastfoot" },
                React.createElement(
                    "div",
                    { className: "inner" },
                    React.createElement(
                        "p",
                        null,
                        "Cover template for ",
                        React.createElement(
                            "a",
                            { href: "https://getbootstrap.com" },
                            "Bootstrap"
                        ),
                        ", by ",
                        React.createElement("a", { href: "https://twitter.com/mdo" }),
                        "."
                    )
                )
            );
        }
    };
});
//# sourceMappingURL=footer.js.map
