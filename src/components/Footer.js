import React from 'react';
import Card from 'react-bootstrap/Card';

class Footer extends React.Component {
    render() {
      return (
        <div>
          <Card bg='dark' text='info' style={{marginTop:525}}>
            <Card.Body className="text-right">
              <p style={{marginLeft:650}}>&copy; 2021 Awon Khrais - ASAC</p>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
  
  export default Footer;