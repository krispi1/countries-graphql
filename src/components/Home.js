import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Loading from './Loading';
import Error from '../components/Error';
import { flagBaseUrl, flagStyle } from '../utilities/flags';
import ButtonLinks from '../utilities/ButtonLinks';

const style = {
  bigSpan: {
    color: '#aa00ff',
    fontSize: '50px',
    fontWeight: 'bold',
  }, 
  smallSpan: {
    color: '#aa00ff',
    fontSize: '30px',
    fontWeight: 'bold',
  }
}

const FETCH_COUNTRIES = gql`
{
  countries {
    name,
    code,
    native,
    phone,
    currency,
    languages {
      name,
      native
    },
    continent {
      name,
      code,
      countries {
        name
      }
    }
  }
}
`; // end FETCH_COUNTRIES query

export default function Home() {

  const { loading, error, data } = useQuery(FETCH_COUNTRIES);

  if (loading) return <Loading />;

  if (error) return <Error error={error}/>;
  
  const countries = data.countries;
  // console.log(countries[8]); // For debugging

  // Make the following variables available throughout 
  // this Home component
  let newIndex = null;
  let country = null;
  let flagUrl = '';
  let shinyFlag = '';
  let flagCode = '';
  let flagShiny = '';
  let flagSize = '';

  function genRandomCountry() {
    newIndex = Math.floor(Math.random() * countries.length);
    return newIndex;
  }

  if (newIndex === null || country === null) {
    newIndex = genRandomCountry();
    country = countries[newIndex];
  }

  // Grab the country code of current country
  // Set up country's flag
  flagCode = country.code;
  flagShiny = "/shiny";
  flagSize = "/64.png";
  flagUrl = `${flagBaseUrl}${flagCode}${flagStyle}${flagSize}`;  
  shinyFlag = `${flagBaseUrl}${flagCode}${flagShiny}${flagSize}`;
  
  // For debugging
  // console.log(flagUrl); 
  // console.log(`flagCode: ${flagCode}`);
  // console.log(country);

  return (
    <div className="content-area">
      <h2>Countries Frontend Siele</h2>

      <div>
        <img 
          src={shinyFlag} 
          alt={`${country.name} flag`}/>
      </div>
      <h3>{`${country.code} `}<span style={style.bigSpan}>|</span>{` ${country.name}`}</h3>
      {country.phone}
      <div>
        <img 
          src={flagUrl} 
          alt={`${country.name} flag`}/>
      </div> 
      <p>{`${country.continent.code} `}<span style={style.smallSpan}>|</span>{` ${country.continent.name}`}</p>
      <p>
        <small>
          Countries in {country.continent.name}: <strong>{country.continent.countries.length}</strong>
        </small>
      </p>  
      <hr />
      <ButtonLinks />
    </div>
  ) // end return

} // end Home