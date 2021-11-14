import React from "react";
class CheckList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { check: false};
    }
    render(){
        const listElements = ["Fare i compiti di TASD","Fare i compiti di Interaction Design", "Fare i compiti di CVeDI"];

        for(let cont=0; cont < listElements.length; cont++) {
            return listElements;

        }

        return (
            <div>
                <ul className={"todo"}> To Do List
                    {listElements}<button onClick={() => this.setState({check: this.state, className: "done"})}>
                    </button>
                </ul>
                <button onClick={() => this.setState({check: this.state, className: "done"})}>
                </button>

                <ul className={"done"}>Done
                    {listElements}<button onClick={() => this.setState({check: this.state, className: "todo"})}>
                    </button>
                </ul>

            </div>







        );



    }
}

export default CheckList;