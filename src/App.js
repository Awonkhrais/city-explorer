import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import City from './components/City';
import Error from './components/Error';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/Weather';
import Movies from './components/Movies';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locData: '',
      errMsg: '',
      displayErrMsg: false,
      displayMap: false,
      mapLink: '',
      weatherData: [],
      movieData:[],



    }
  }

  getLocation = async (event) => {
    event.preventDefault();
    let findLocation = event.target.searchLocation.value


    try {
      let locUrl = `https://us1.locationiq.com/v1/search.php?key=pk.107d35e31b396d7967b4a082300e1644&q=${findLocation}&format=json`;
      let locResult = await axios.get(locUrl);
      let locationArray = locResult.data;
      console.log(locResult.data[0]);
      console.log(locationArray)

      let serverRoute = process.env.REACT_APP_SERVER;
      let weatherUrl = `${serverRoute}weather?cityname=${findLocation}`
      const weatherArray = await axios.get(weatherUrl);
      console.log(weatherArray)

      let serverRouteMov = process.env.REACT_APP_SERVER;
      let movieUrl=`${serverRouteMov}movies?cityname=${findLocation}`
      const movieArray= await axios.get(movieUrl);
      console.log(movieArray)


      this.setState(
        {
          locData: locResult.data[0],
          displayMap: true,
          mapLink: `https://maps.locationiq.com/v3/staticmap?key=pk.107d35e31b396d7967b4a082300e1644&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=14`,
          weatherData: weatherArray.data[0],
          movieData:movieArray.data[0]
        }
      )



    }
    catch {
      this.setState({
        errMsg: `Error 404 : Unable to geocode`,
        displayErrMsg: true,

        // displayMap: true,


      }

      )

    }

  }


  render() {
    return (

      <div>
        <Header />

        {/* <form onSubmit={this.getLocation}>
          <input type='text' placeholder='enter city name' name='searchLocation' />
          <input type='submit' value='search' />
        </form> */}

        <Form onSubmit={this.getLocation} >

          <Form.Control type="text" placeholder="enter city name" name='searchLocation' onChange={this.update} style={{ width: 250, display: 'inline-block', marginTop: 25, marginLeft: 10 }} />

          <Button variant="primary" type="submit" value='search' style={{ marginLeft: 10, marginBottom: 5 }}>
            explore!
          </Button>

        </Form>

        <Error error={this.state.errMsg} displayErrMsg={this.state.displayErrMsg} />


        <City
          city={this.state.locData.display_name}
          latitude={this.state.locData.lat}
          longitude={this.state.locData.lon}
          displayResults={this.state.displayMap}
          mapLink={this.state.mapLink}

        />

        <Weather
          weather={this.state.weatherData}
        />

        <Movies moives={this.state.movieData} />



        {/* <p>{this.state.locData.display_name}</p>
        <p>{this.state.locData.lon}</p>
        <p>{this.state.locData.lat}</p>
        {this.state.displayErrMsg && this.state.errMsg}
        {this.state.displayMap && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.107d35e31b396d7967b4a082300e1644&center=${this.state.locData.lat},${this.state.locData.lon}`} alt={'map'}></img>} */}

        <Footer />
      </div>

    )
  }
}

export default App;
