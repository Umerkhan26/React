function Hello (){

    let myName = 'Umar';
    let number = 450;

    let fullName = () =>{
        return 'Umar Faiz'
    }

    return <h3>
        Hello i am Learning React .I am student {fullName()}  <br/>
        Message No: {number} Is am {myName}
        

        {/* {}= This is called Dynamic .using this we can directly embaded with any JS expression.includs var,fun etc.In This we can diffrent comp,expression at the same time */}
    </h3>
}

export default Hello;