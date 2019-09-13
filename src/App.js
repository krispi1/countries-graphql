import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import GetCountries from './components/Countries';
//import GetCountry from './components/Country';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
});

/* // Trial data fetch -- turns out successful
client
  .query({
    query: gql`
    {
      country(code: "KE"){
        code,
        name,
        native,
        phone,
        currency,
        emoji,
        emojiU,
        continent {
          code,
          name, 
          countries {
            name,
            code
          }
        },
        languages {
          code,
          name,
          native
        }
      }
    }
    `
}).then(result => console.log("result")) */

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/countries" exact component={GetCountries} />
            {/* <Route path="/countries/:id" component={GetCountry} /> */}
          {<GetCountries />}
          </Switch>
          {/* GetCountry /> */}
        </div>
      </Router>
    </ApolloProvider>
  );

} // end App()

function Home() {
  return (
    <div className="container">
      <h1>Scoutbase Frontend Siele</h1>  
    </div>
  );

} // end Home()

export default App;

/** Scoutbase Frontend Instructions 

# Front-end task of Code Challenge for Scoutbase

This task is for demonstrating your understanding of HTML, CSS, Javascript, React & related libraries.

If you’re doing the front-end only, you must use the https://countries.trevorblades.com endpoint for GraphQL API.

Preferred libraries:
  1. `styled-components` for styling
  2. `apollo-client` for consuming GraphQL API
  3. `react-router` or any alternative to implement routing

Instructions:

1. Create a `create-react-app` repo. ------completed
2. Add a router with routes:
  - `/` - for displaying basic links for the other routes ------incomplete
  - `/countries` - for requesting GraphQL API and rendering the list ------completed
  - `/countries/(:code)` - for requesting GraphQL API and rendering the properties of a continent ------incomplete
3. Design is totally by you.
4. Countries list at `/countries` must contain the list of countries and the languages spoken in that country. ------completed
   Both in English and native languages. It should also contain the continent it is located in. ------completed
5. `/countries/(:code)` must render the currency and a area code (phone) of that country. ------incomplete
6. Routes must be fully loadable with a direct link. `/countries/CI` must render the page for Ivory Coast, for example. ------incomplete
7. End. 
*/