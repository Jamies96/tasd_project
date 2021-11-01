// ====FUNCTIONS==========

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] != null && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


// ======COMPONENTS===============
/*
function Square(props) {
    return (
        React.createElement("button", { className: "square", onClick: props.onClick },
            props.value));
}*/

class Square extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            React.createElement("button", { className: "square", onClick: this.props.onClick },
                this.props.value));
    }
}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner != null) {
            status = 'Winner: ' + winner;
        } else {
            if (this.state.xIsNext === true) {
                status = 'Next player: ' + 'X';
            } else {
                status = 'Next player: ' + 'O';
            }
        }

        return /*#__PURE__*/ (
            React.createElement("div", null,
                React.createElement("div", { className: "status" }, status),
                React.createElement("div", { className: "board-row" },
                    this.renderSquare(0),
                    this.renderSquare(1),
                    this.renderSquare(2)),

                React.createElement("div", { className: "board-row" },
                    this.renderSquare(3),
                    this.renderSquare(4),
                    this.renderSquare(5)),

                React.createElement("div", { className: "board-row" },
                    this.renderSquare(6),
                    this.renderSquare(7),
                    this.renderSquare(8)))
        );
    }

    handleClick(i) {
        const squaresCopy = this.state.squares.slice();
        if (calculateWinner(squaresCopy) || squaresCopy[i] != null) {
            return;
        }
        if (this.state.xIsNext === true) {
            squaresCopy[i] = 'X';
        } else {
            squaresCopy[i] = 'O';
        }
        this.setState({
            squares: squaresCopy,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i) {
        return /*#__PURE__*/ (
            React.createElement(Square, {
                value: this.state.squares[i],
                onClick: () => this.handleClick(i)
            }));
    }
}


class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            React.createElement("div", { className: "game" },
                React.createElement("div", { className: "game-board" },
                    React.createElement(Board, null))));
    }
}


/*function Game(props) {
    return (
        React.createElement("div", { className: "game" },
            React.createElement("div", { className: "game-board" },
                React.createElement(Board, null))));
} */

// ========================================

ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));