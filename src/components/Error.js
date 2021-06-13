import React from 'react';



class Error extends React.Component {
  render() {
    return (
      <div>
       {this.props.displayErrMsg &&
          <div>
          <h3 style={{ marginLeft: 530}}>💢{this.props.error}💢</h3>

          </div>
        }
      </div>
    );
  }
}

export default Error;