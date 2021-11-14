import { render } from "@testing-library/react";
import React from "react";
import { alignPropType } from "react-bootstrap/esm/types";

/*class MyButton extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        clicked: false
    };
}

    render() {
        if (this.state.clicked === false) {
            return <button onClick={(event)=>this.bClicked()}>{this.props.hello}</button>
        } else {
            return <button onClick={(event)=>this.bClicked()}>{this.props.hello}{this.props.name}</button>
        }
        
    }
    
    bClicked(){
        let isClicked = this.state.clicked;
        isClicked = !this.state.clicked;
        this.setState(
            {clicked : isClicked}
            );
            alert(this.state.clicked);
        
       
    }
    
}
*/

function MyButton(props) {
    if (props.typeOfBtn === "text"){ 

    } else if (props.typeOfBtn === "full")  {

    } else if (props.typeOfBtn === "outline") {

    }
    return   <button type="button">{props.mylabel}{props.onlyText}{props.outline}</button>;
}

export default MyButton;