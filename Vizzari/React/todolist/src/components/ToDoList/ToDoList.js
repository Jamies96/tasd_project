import React from "react";
import { ThemeProvider } from "react-bootstrap";
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
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-2 text-center">ToDoList Exercise</h1>
                        </div>
                    </div>
                </div>
                <div className="container  text-center">
                    <div className="row">
                        <div className="col">
                            <h3>All</h3>
                        </div>
                        <div className="col">
                        <h3>Done</h3>
                        </div>
                        <div className="col">
                        <h3>Todo</h3>
                        </div>
                    </div>
                    <hr className="bg-white"/>
                    <div className="row  ">
                        <div className="col">
                            <ul className="list-group">{lista}</ul>
                        </div>
                        <div className="col">
                            <ul className="list-group">{listDone}</ul>
                        </div>
                        <div className="col">
                            <ul className="list-group">{listTodo}</ul>
                        </div>
                    </div>
                    <div className="row top-gutter ">
                        <div className="col-md-4 offset-md-4">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" value={this.state.textInput} onChange={(event) => this.handleChange(event)} onKeyUp={(event)=>this.checkKeyIsEnter(event)}/>
                                <button className="btn btn-outline-info left-gutter" onClick={() => this.addElement()}>Add Item</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        )

    }

    checkKeyIsEnter(event) {
        if(event.key === "Enter") {
            this.addElement()
        }
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
            return <li className="list-group-item bg-info top-gutter " onClick={() => this.changeCheck(x.position)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>&nbsp;
                <del>{x.text}</del></li>;
        } else {
            return <li className="list-group-item bg-info top-gutter" onClick={() => this.changeCheck(x.position)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                    <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                </svg>&nbsp;
                {x.text}
            </li>;
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