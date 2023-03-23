function App(){
    return(
        <div>
            <Tweet
                name="Joe"
                username="joey234"
                date={new Date().toDateString()}
                message="I love twitter!"
            ></Tweet>
            <Tweet
                name="Bob"
                username="bobby590"
                date={new Date().toDateString()}
                message="React is awesome"
            ></Tweet>
            <Tweet
                name="Mary"
                username="maryeliza"
                date={new Date().toDateString()}
                message="Coding is super cool"
            ></Tweet>
        </div>
    )
}