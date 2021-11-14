import React from "react";

class BottoneMagico extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.initCount
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => this.incCount()} style={{color: this.props.myColor}}> 
                    {this.props.name} Nada {this.state.count}
                </button>
            </div>
        );
    }

    incCount() {
        let counter = this.state.count;
        counter++;
        this.setState({
            count: counter
        });
    }
}

export default BottoneMagico;