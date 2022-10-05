import React from "react";

export default class Counter extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    handleIncrement = () => {
        this.setState({ count : this.state.count + 1})
        this.setState({ count : this.state.count + 1})
    }
    handleDecrement = () => {
        this.setState((state) => ({ count : state.count -  1}))
    }

    render(){
        return (
        <div 
        style={{
            width: "250px",
            height: "250px",
            textAlign: "center",
            margin: "0 auto",
        }}
        >
            <h1>Counter</h1>
            <p>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
            </p>
            {this.state.count === 2 && <Info/>}
        </div>
        )
    }
}

class Info extends React.Component {
    componentDidMount() {
        console.log("El componente se montó")
    }
    componentWillUnmount(){
        console.log("El componente se desmontó")
    }
    render() {
        return <div>INFO</div>
    }
}