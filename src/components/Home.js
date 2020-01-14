// Modules
import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

// Components
import Loading from './Loading';
import Error from './Error';

// Utils
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
  console.log("Rendering Home...");
  let countries;
  countries = JSON.parse(window.localStorage.getItem("countries"));
  //console.log(countries);

  // Destructure results obtained from execution of useQuery 
  const { loading, error, data } = useQuery(FETCH_COUNTRIES);
  console.log("loading -->", loading);
  console.log("error -->", error);
  console.log("data -->", data);

  if (countries) console.log("Retrieved countries from localStorage");
  else if (loading) return <Loading />;
  else if (error) return <Error error={error}/>;
  else {
    if (data) {
      console.log("cData -->", data.countries);
      console.log("cDataL -->", data.countries.length);
      countries = data.countries;
      window.localStorage.setItem("countries", JSON.stringify(countries));
      console.log("Store countries in localStorage");
      console.log("cLength -->", countries.length);
    }
  }
  // window.localStorage.setItem("countries", JSON.stringify(countries));

  // Make the following variables available throughout 
  // this Home component
  let newIndex = null;
  let country = null;
  let flagUrl = '';
  let shinyFlag = '';
  let flagCode = '';
  let flagShiny = '';
  let flagSize = '';

  // Produce an index within the range of all countries  
  function genRandomCountry() {
    console.log("Countries length: ", countries.length);
    console.log("Countries type: ", typeof countries);
    newIndex = Math.floor(Math.random() * countries.length);
    return newIndex;
  }

  // Generate a random country to display in the home page
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
  
  return (
    <div className="content-area">
      <h2>Countries GraphQL</h2><hr />

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
  ); // return
} // Home



/****************************************************** */

// https://github.com/trojanowski/react-apollo-hooks/issues/158

/* 
use the returned data as it is like below:

const { loading, data, error } = useQuery(SOME_QUERY)

if (loading) return <Loader />
if (error) return <Error />

// safe to assume data now exist and you can use data.
const mutatedData = React.useMemo(() => {
  // if you want to mutate the data for some reason
  return data
}, [data])

return <YourComponent data={mutatedData}  /> */

/***********************or************************* */
/* 
But if you must store the returned data, could do below:

const { loading, data, error } = useQuery(SOME_QUERY)
const [state, setState] = React.useState([])

React.useEffect(() => {
  // do some checking here to ensure data exist
  if (data) {
    // mutate data if you need to
    setState(data)
  }
}, [data]) */
/****************************************************** */
