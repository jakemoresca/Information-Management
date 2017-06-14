
require(["reactRouterDom"], function (RouterDOM)
{
    window.Router = RouterDOM.BrowserRouter;
    window.Link = RouterDOM.Link;
    window.Route = RouterDOM.Route;

    require(["react", "reactDOM", "./components/footer"],
        function (React, ReactDOM, Footer)
        {
            const Home = () => (
                <div>
                    <h1 className="cover-heading">Cover your page.</h1>
                    <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                    </p>
                </div>
            )

            const About = () => (
                <div>
                    <h2>About</h2>
                </div>
            )

            const Topics = ({ match }) => (
                <div>
                    <h2>Topics</h2>
                    <ul>
                        <li>
                            <Link to={`${match.url}/rendering`}>
                                Rendering with React
                            </Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/components`}>
                                Components
                            </Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/props-v-state`}>
                                Props v. State
                            </Link>
                        </li>
                    </ul>

                    <Route path={`${match.url}/:topicId`} component={Topic} />
                    <Route exact path={match.url} render={() => (
                        <h3>Please select a topic.</h3>
                    )} />
                </div>
            )

            const Topic = ({ match }) => (
                <div>
                    <h3>{match.params.topicId}</h3>
                </div>
            )

            class App extends React.Component
            {
                render()
                {
                    return (
                        <div className="site-wrapper-inner">
                            <Router>
                                <div className="cover-container">
                                    <div className="masthead clearfix">
                                        <div className="inner">
                                            <h3 className="masthead-brand">Cover</h3>
                                            <nav className="nav nav-masthead">
                                                <Link className="nav-link active" to="/">Home</Link>
                                                <Link className="nav-link" to="/about">About</Link>
                                                <Link className="nav-link" to="/topics">Topics</Link>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="inner cover">
                                        <Route exact path="/" component={Home} />
                                        <Route path="/about" component={About} />
                                        <Route path="/topics" component={Topics} />
                                    </div>
                                    <Footer />
                                </div>
                            </Router>
                        </div>
                    );
                }
            }

            ReactDOM.render(
                <App />,
                document.getElementById('root')
            );
        });
});