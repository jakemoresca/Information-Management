define(["react", "reactDOM"], function (React, ReactDOM) {
    return class Button extends React.Component {
        constructor() {
            super();
        }

        render() {
            const text = this.props.text;
            const action = this.props.action;
            const additionalClass = this.props.additionalClass;

            const cssClass = "mdc-button mdc-button--raised mdc-button--primary" + (additionalClass == undefined ? "" : " " + additionalClass);

            return React.createElement(
                "button",
                { className: cssClass, "data-mdc-auto-init": "MDCRipple", onClick: action },
                text
            );
        }
    };
});
//# sourceMappingURL=button.js.map
