function Person(props){
    let canVote = props.age >= 18 ? 'please go vote' : 'you must be 18';
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)

    return(
        <section>
            <p>Learn some more info about this person:</p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies: 
                    {hobbies}
                </ul>
            </ul>
            <h3>{canVote}</h3>
        </section>
    )
}