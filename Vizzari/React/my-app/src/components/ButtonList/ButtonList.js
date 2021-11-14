import React from "react";

class ButtonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render(){
        const listElements = [];

        for(let cont=0; cont < this.state.count; cont++) {
            listElements.push(<li>{cont}</li> )
        }

        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count+1})}>{this.props.name}
                </button>
                <ul>{listElements}</ul>
            </div>
        );



    }
}

export default ButtonList;