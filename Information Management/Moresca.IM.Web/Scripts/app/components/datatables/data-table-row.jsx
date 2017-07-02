define(["react", "reactDOM"],
function (React, ReactDOM)
{
    return class DataTableRow extends React.Component
    {
        constructor()
        {
            super();
        }

        render()
        {
            const record = this.props.record;

            return (
                <a href="#" className="mdc-list-item" data-mdc-auto-init="MDCRipple">
                    <span className="mdc-list-item__start-detail grey-bg" role="presentation">
                        <i className="material-icons" aria-hidden="true">description</i>
                    </span>
                    <span className="mdc-list-item__text">
                        {record.name}
                        <span className="mdc-list-item__text__secondary">{record.description}</span>
                    </span>
                    <span className="mdc-list-item__end-detail multiple-end-detail">
                        <a href="#" className="material-icons" aria-label="View more information" title="More info">
                            info
                        </a>
                        <a href="#" className="material-icons" aria-label="Edit" title="Edit">
                            edit
                        </a>
                        <a href="#" className="material-icons" aria-label="Delete" title="Delete">
                            delete
                        </a>
                    </span>
                </a>
            );
        }
    }
});

//<tr>
//    {fieldList.map((field, index) =>
//        <DataTableColumn key={field.name} record={record} field={field.name} isFirstColumn={index == 0} />

//    )}
//</tr>