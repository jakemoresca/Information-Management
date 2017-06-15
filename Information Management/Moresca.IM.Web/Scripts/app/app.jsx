
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
                                        <Route strict path="/" component={Home} />
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