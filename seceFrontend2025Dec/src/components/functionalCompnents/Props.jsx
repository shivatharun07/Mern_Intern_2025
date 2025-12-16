const Props = (props) =>{
    return(
        <div>
            <p>This is Props Component</p>
            <ol>
                <li>Props are:</li>
                <ul>
                    <li>{props.hi}</li>
                    <li>I completed my {props.grade} grade by the age of {props.age} years old</li>
                    <li><img src={props.img} alt="" /></li>
                </ul>
            </ol>
        </div>
    )
}
export default Props;