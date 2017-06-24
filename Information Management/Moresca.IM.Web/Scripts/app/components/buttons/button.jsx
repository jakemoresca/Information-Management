define(["react", "reactDOM"],
function (React, ReactDOM)
{
    return class Button extends React.Component
    {
        constructor()
        {
            super();
        }

        render()
        {
            const text = this.props.text;
            const buttonType = this.props.buttonType;
            const action = this.props.action;

            const buttonTypeClassName = buttonType != null ? "btn btn-" + buttonType : "btn";

            return (
                <a className={buttonTypeClassName} href="#" role="button" onClick={action}>{text}</a>
            );
        }
    }
});