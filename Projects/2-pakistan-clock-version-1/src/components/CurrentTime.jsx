function CurrentTime () {

    let time = new Date();

    return <p className="lead fw-medium ">This is current time: {time.toLocaleString()}</p>

}

export default CurrentTime;