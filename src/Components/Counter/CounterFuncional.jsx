import React from "react";

//ESTA FUNCION ESTA DENTRO DE Counterfunc

function InfoFunc() {
    React.useEffect(() => {
        console.log("El componente se montó de InfoFunc");
        return () => {
            console.log("El componente InfoFunc se desmontó")
        }
    }, [])
    return <div>INFO</div>
}

export default function Counterfunc() {
    
  

    const [count,setCount] = React.useState(0);

    React.useEffect(() => {
        console.log("El componente se montó de Counterfunc");
        return () => {
            console.log("El componente Counterfuncs se desmontó")
        };
    }, [count])

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }

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
            <h2>{count}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </p>
        {count === 2 && <InfoFunc/>}
    </div>
    )
}

// class Info extends React.Component {
//     componentDidMount() {
//         console.log("El componente se montó")
//     }
//     componentWillUnmount(){
//         console.log("El componente se desmontó")
//     }
//     render() {
//         return <div>INFO</div>
//     }
// }