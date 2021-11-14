import React from "react";

class ButtonLabelCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render(){
        return (
        <div>
            <button onClick={() => this.setState({count: this.state.count+1})}>{this.props.name}
            </button>
            <p>You clicked {this.state.count} times</p>
        </div>
        );



    }
}

export default ButtonLabelCounter;