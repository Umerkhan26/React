
function Random (){

    let number = Math.random() * 100;
    return <h2 style={{'background-color': '#776671'}}> Random number is: {Math.round(number)}</h2>

    // we can reuse Component 

}

export default Random;