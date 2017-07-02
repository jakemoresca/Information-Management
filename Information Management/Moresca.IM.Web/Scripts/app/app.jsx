
require(["reactRouterDom"], function (RouterDOM)
{
    window.Router = RouterDOM.HashRouter;
    window.Link = RouterDOM.Link;
    window.Route = RouterDOM.Route;

    require(["react", "reactDOM", "./components/footer", "./components/home", "./modules/about/about", "./modules/topics/topics"],
        function (React, ReactDOM, Footer, Home, About, Topics)
        {
            class App extends React.Component
            {
                render()
                {
                    return (
                        <Router>
                            <div>
                                <header className="mdc-toolbar mdc-toolbar--fixed">
                                    <div className="mdc-toolbar__row">
                                        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                                            <a href="#" className="material-icons mdc-toolbar__icon--menu menu">menu</a>
                                            <span className="mdc-toolbar__title">Job Tracker</span>
                                        </section>
                                    </div>
                                </header>
                                <aside className="mdc-temporary-drawer mdc-typography">
                                    <nav className="mdc-temporary-drawer__drawer">
                                        <header className="mdc-temporary-drawer__header">
                                            <div className="mdc-temporary-drawer__header-content">
                                                Job Tracker
                                            </div>
                                        </header>
                                        <nav id="icon-with-text-demo" className="mdc-temporary-drawer__content mdc-list">
                                            <Link className="mdc-list-item mdc-temporary-drawer--selected" to="/">
                                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">home</i>Home
                                            </Link>
                                            <Link className="mdc-list-item" to="/about">
                                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>About
                                            </Link>
                                        </nav>
                                    </nav>
                                </aside>
                                <div className="mdc-layout-grid">
                                    <div className="mdc-layout-grid__inner">
                                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet">
                                            <Route strict path="/" component={Home} />
                                            <Route path="/about" component={About} />
                                            <Route path="/topics" component={Topics} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Router>
                    );
                }
            }

            ReactDOM.render(
                <App />,
                document.getElementById('root')
            );

            let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
            document.querySelector('.menu').addEventListener('click', () => drawer.open = true);

            mdc.autoInit();
        });
});

//<div>
//    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
//        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
//            <span className="navbar-toggler-icon"></span>
//        </button>
//        <a className="navbar-brand" href="#">Information Management</a>

//        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
//            <ul className="navbar-nav mr-auto">
//                <li className="nav-item active">
//                    <Link className="nav-link active" to="/">Home</Link>
//                </li>
//                <li className="nav-item">
//                    <Link className="nav-link" to="/about">About</Link>
//                </li>
//                <li className="nav-item">
//                    <Link className="nav-link" to="/topics">Topics</Link>
//                </li>
//            </ul>
//            <form className="form-inline my-2 my-lg-0">
//                <input className="form-control mr-sm-2" placeholder="Search" type="text" />
//                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//            </form>
//        </div>
//    </nav>
//    <div className="container">
//        <Route strict path="/" component={Home} />
//        <Route path="/about" component={About} />
//        <Route path="/topics" component={Topics} />
//    </div>
//</div>