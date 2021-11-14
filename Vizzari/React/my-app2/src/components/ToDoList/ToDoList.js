import React from "react";
import './ToDoList.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            textInput: ""
        }

        /*
        prototipo:
        itemList: [
            {
                text: spesa,
                checked: true
    
            }
        ]
    */

    }

    render() {

        let listDone = this.state.itemList.filter((x) => { return x.checked === true });
        let listTodo = this.state.itemList.filter((x) => { return x.checked === false });

        let lista = this.state.itemList.map((x) => this.trasformListItemsAndCheck(x));
        listTodo = listTodo.map((x) => this.trasformListItemsAndCheck(x));
        listDone = listDone.map((x) => this.trasformListItemsAndCheck(x));

        return (
            <div>
                <h1>ToDoList Exercise</h1>
                <div className="container bg-dark">
                    <div className="row">
                        <div className="col-md-4">All
                        </div>
                        <div className="col-md-4">Done
                        </div>
                        <div className="col-md-4">Todo
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="list-group">{lista}</ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-group">{listDone}</ul>
                        </div>
                        <div className="col-md-4">
                        <ul className="list-group">{listTodo}</ul>
                        </div>
                    </div>

                </div>
                <input type="text" value={this.state.textInput} onChange={(event) => this.handleChange(event)} />
                <button onClick={() => this.addElement()}>Add Item</button>
            </div>
        )

    }

    handleChange(event) {
        let text = event.target.value;
        let itemListCopy = this.state.itemList
        this.setState({
            textInput: text,
            itemList: itemListCopy
        });
    }

    addElement(event) {
        if (this.state.textInput.trim() === "") {
            return;
        }
        let list = this.state.itemList;
        let pos = list.length;
        list.push({
            text: this.state.textInput,
            checked: false,
            position: pos
        });
        this.setState({
            textInput: "",
            itemList: list
        });

    }

    trasformListItemsAndCheck(x) {
        if (x.checked === true) {
            return <li className="list-group-item bg-info" onClick={() => this.changeCheck(x.position)}> ✓<del>{x.text}</del></li>;
        } else {
            return <li className="list-group-item bg-info" onClick={() => this.changeCheck(x.position)}>◻{x.text}</li>;
        }
    }

    changeCheck(position) {
        let list = this.state.itemList;
        list[position].checked = !list[position].checked;
        this.setState({
            itemList: list,
            textInput: this.state.textInput
        });
    }
}

export default ToDoList;