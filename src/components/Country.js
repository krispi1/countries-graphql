// Modules
import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

// Components
import Error from './Error';
import Loading from './Loading';

// Utils
import { flagBaseUrl, flagStyle } from '../utilities/flags';
import ButtonLinks from '../utilities/ButtonLinks';

export default function Country({ match }) {
  console.log("Rendering Country..");

  let code = match.params.code.toUpperCase();

  // Destructure the useQuery fetch results
  const { loading, error, data } = useQuery(
    gql`
      query {
        country(code: "${code}") {
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
  ); // query

  if (loading) return <Loading />;

  if (error) return <Error error={error}/>;
  
  // Pull out country from data object
  const country = data.country;
  
  // console.log(typeof country);
  
  // Grab the country code of current country & set up flag
  let flagCode = code;
  let flagShiny = "/shiny";
  let flagSize = "/64.png";
  let flagUrl = `${flagBaseUrl}${flagCode}${flagStyle}${flagSize}`;  
  let shinyFlag = `${flagBaseUrl}${flagCode}${flagShiny}${flagSize}`;
  //console.log(flagUrl); // For debugging

  return (
    <Fragment>
      {
        country ? 
        <div className="content-area">
        <h2><strong>{`${country.name.toUpperCase()}`}</strong></h2>
        <div><img 
          src={flagUrl} 
          alt={`${country.name} flag`}/>
        </div>
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Item</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Currency</td>
                <th scope="row">{country.currency}</th>
              </tr>
              <tr>
                <td>Phone</td>
                <th scope="row">{country.phone}</th>
              </tr>
              <tr>
                <td>Native</td>
                <th scope="row">{country.native}</th>
              </tr>
              <tr>
                <td>Emoji</td>
                <th scope="row">{country.emoji}</th>
              </tr>
              <tr>
                <td>Continent</td>
                <th scope="row">{country.continent.name}</th>
              </tr>
              <tr>
                <td>Countries in {country.continent.name}</td>
                <th scope="row">{country.continent.countries.length}</th>
              </tr>
            </tbody>
          </table>
          <div className="shiny-flag">
            <img 
              src={shinyFlag} 
              alt={`${country.name} flag`}/>
          </div>
        </div><hr/>
        <ButtonLinks />
      </div> : 
        <div className="content-area">
          <br/>
          <span style={{ color: 'red', fontSize: '1.9em' }}>Error: that's not a valid country code.</span><br/><br/>
          <ButtonLinks />
        </div>
      }
    </Fragment>
  ) // return
} // Country


/**Example country result

  code: null
  continent: {code: "AF", name: "Africa", countries: Array(58), __typename: "Continent"}
  currency: "KES"
  emoji: "🇰🇪"
  emojiU: "U+1F1F0 U+1F1EA"
  languages: (2) [{…}, {…}]
  name: "Kenya"
  native: "Kenya"
  phone: "254" 

  */
  