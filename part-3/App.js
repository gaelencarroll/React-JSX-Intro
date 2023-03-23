function App(){
    return(
        <div>
            <Person 
                name="Willow"
                age={53}
                hobbies={['cooking', 'tennis', 'shopping']}
            />
            <Person 
                name="Steve"
                age={46}
                hobbies={['eating', 'photograpy', 'snowshoeing']}
            />
            <Person 
                name="Graham"
                age={27}
                hobbies={['sailing', 'walking', 'skiing']}
            />
        </div>
    )
}