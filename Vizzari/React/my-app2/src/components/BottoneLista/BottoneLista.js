import React from "react";

class BottoneLista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextItem: 0,
            list: []
        }
    }
    render(){        
        return(
            <div>
                <button onClick={()=>this.addElement()}>Aggiungi l'elemento {this.state.nextItem} alla lista</button>
                <ul>
                    {this.state.list}
                </ul>
            </div>
        )
        
    }

    addElement(){
        let nextI = this.state.nextItem;
        let otherList = this.state.list;

        otherList.push(<li>{nextI}</li>)
        nextI++;

        this.setState( {
            nextItem: nextI,
            list: otherList

        })

        
    }
}

export default BottoneLista;