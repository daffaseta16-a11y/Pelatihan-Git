import '../style.css'

const Wellcome = (props) => {
    return ( 
    <>
    <div className='card'>
    <h1>Hello, {props.name}</h1>
    <h1>City : {props.city}</h1>
    <h1>Age : {props.age}</h1>
    </div>
    </>
    )
}

export default Wellcome