// Modules
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// Utils
import "./App.css";
import ButtonLinks from "./utilities/ButtonLinks";

// Components
import Nav from "./components/Nav";
import Loading from "./components/Loading";
const About = lazy(() => import("./components/About"));
const Home = lazy(() => import("./components/Home"));
const Countries = lazy(() => import("./components/Countries"));
const Country = lazy(() => import("./components/Country"));

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
});

function App() {
  console.log("Rendering App..");
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Suspense fallback={<Loading />}>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/countries" component={Countries} />
              <Route exact path="/countries/:code" component={Country} />
              <Route component={Page404} />
            </Switch>
          </div>
        </Suspense>
      </Router>
    </ApolloProvider>
  ); // return
} // App

function Page404({ location }) {
  const style404 = {
    marginTop: "30px",
    fontSize: "2.9em"
  };

  return (
    <div className="content-area">
      <h2 style={style404}>
        Sorry, we couldn't find the page you requested:
        <br />
        <code>{location.pathname}</code>
      </h2>
      <br />
      <ButtonLinks />
    </div>
  );
} // Page404

export default App;
