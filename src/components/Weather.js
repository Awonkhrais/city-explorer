import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class Weather extends React.Component {
    render() {
        //   let forecastData = this.props.weather;
        return (
            <div>
                <Card style={{width:'50%',height:'50%',marginLeft:380}} >

                    <ListGroup variant="flush">
                        <ListGroup.Item>{this.props.weather.date}</ListGroup.Item>
                        <ListGroup.Item>{this.props.weather.description}</ListGroup.Item>
                    </ListGroup>

                </Card>

                {/* <p>{this.props.weather[0].date}</p> */}

            </div>
        );
    }
}

export default Weather;