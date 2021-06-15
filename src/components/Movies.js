import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class Movies extends React.Component {
    render() {
        //   let forecastData = this.props.weather;
        return (
            <div>
                <Card style={{width:'50%',height:'50%',marginLeft:380}} >

                    <ListGroup variant="flush">
                        <ListGroup.Item>{this.props.moives.title}</ListGroup.Item>
                        <ListGroup.Item>{this.props.moives.overview}</ListGroup.Item>
                        <ListGroup.Item>{this.props.moives.average_votes}</ListGroup.Item>
                        <ListGroup.Item>{this.props.moives.total_votes}</ListGroup.Item>
                        <ListGroup.Item><img src={this.props.moives.poster_path} style={{width:'100%'}}></img></ListGroup.Item>
                        <ListGroup.Item>{this.props.moives.popularity}</ListGroup.Item>
                        <ListGroup.Item>{this.props.moives.released_on}</ListGroup.Item>
                    </ListGroup>

                </Card>

                {/* <p>{this.props.weather[0].date}</p> */}

            </div>
        );
    }
}

export default Movies;