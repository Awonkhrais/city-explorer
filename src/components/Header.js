import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    render() {
        return (
            <div>

                <Navbar expand="lg" bg="dark" variant="dark">
                
                        <Navbar.Brand href="#home" style={{marginLeft:670}}>🌃 City Explorer 🌃</Navbar.Brand>
                
                </Navbar>

            </div>
        )
    }
}
export default Header;