define(["react", "reactDOM"],
function (React, ReactDOM)
{
    return class Dialog extends React.Component
    {
        constructor()
        {
            super();
        }

        render()
        {
            const dialogId = this.props.dialogId;
            const title = this.props.title;
            const children = this.props.children;
            const acceptAction = this.props.acceptAction;
            const acceptText = this.props.acceptText;
            const declineAction = this.props.declineAction;
            const declineText = this.props.declineText;

            return (
                <aside id={dialogId}
                    className="mdc-dialog"
                    role="alertdialog"
                    aria-labelledby="my-mdc-dialog-label"
                    aria-describedby="my-mdc-dialog-description">
                    <div className="mdc-dialog__surface">
                        <header className="mdc-dialog__header">
                            <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">
                                {title}
                            </h2>
                        </header>
                        <section id="my-mdc-dialog-description" className="mdc-dialog__body">
                            {children}
                        </section>
                        <footer className="mdc-dialog__footer">
                            <button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel" onClick={declineAction}>
                                {declineText}
                            </button>
                            <button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept" onClick={acceptAction}>
                                {acceptText}
                            </button>
                        </footer>
                    </div>
                    <div className="mdc-dialog__backdrop"></div>
                </aside>
            );
        }
    }
});