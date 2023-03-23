function Tweet(props){
    return(
        <section>
            <p>{props.name}</p>
            <p>@{props.username}</p>
            <p>{props.date}</p>
            <p>{props.message}</p>
        </section>
    )
}