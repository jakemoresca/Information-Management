define(["react", "reactDOM"], function (React, ReactDOM) {
    return class Dialog extends React.Component {
        constructor() {
            super();
        }

        render() {
            const dialogId = this.props.dialogId;
            const title = this.props.title;
            const children = this.props.children;
            const acceptAction = this.props.acceptAction;
            const acceptText = this.props.acceptText;
            const declineAction = this.props.declineAction;
            const declineText = this.props.declineText;

            return React.createElement(
                "aside",
                { id: dialogId,
                    className: "mdc-dialog",
                    role: "alertdialog",
                    "aria-labelledby": "my-mdc-dialog-label",
                    "aria-describedby": "my-mdc-dialog-description" },
                React.createElement(
                    "div",
                    { className: "mdc-dialog__surface" },
                    React.createElement(
                        "header",
                        { className: "mdc-dialog__header" },
                        React.createElement(
                            "h2",
                            { id: "my-mdc-dialog-label", className: "mdc-dialog__header__title" },
                            title
                        )
                    ),
                    React.createElement(
                        "section",
                        { id: "my-mdc-dialog-description", className: "mdc-dialog__body" },
                        children
                    ),
                    React.createElement(
                        "footer",
                        { className: "mdc-dialog__footer" },
                        React.createElement(
                            "button",
                            { type: "button", className: "mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel", onClick: declineAction },
                            declineText
                        ),
                        React.createElement(
                            "button",
                            { type: "button", className: "mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept", onClick: acceptAction },
                            acceptText
                        )
                    )
                ),
                React.createElement("div", { className: "mdc-dialog__backdrop" })
            );
        }
    };
});
//# sourceMappingURL=dialog.js.map
