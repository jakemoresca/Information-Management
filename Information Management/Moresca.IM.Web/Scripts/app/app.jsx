
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
                                <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <a className="navbar-brand" href="#">Information Management</a>

                                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <Link className="nav-link active" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/about">About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/topics">Topics</Link>
                                            </li>
                                        </ul>
                                        <form className="form-inline my-2 my-lg-0">
                                            <input className="form-control mr-sm-2" placeholder="Search" type="text" />
                                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </div>
                                </nav>
                                <div className="container">
                                    <Route strict path="/" component={Home} />
                                    <Route path="/about" component={About} />
                                    <Route path="/topics" component={Topics} />
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
        });
});