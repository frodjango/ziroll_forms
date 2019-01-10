import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {

    // jokesData.map(joke => {
    //     return <Joke question={joke.question} punchLine={joke.punchLine} />
    // })

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

    const jokesComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)


    return (
        <div>

            {/* <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
            
            <Joke
                question="What's the best thing about Switzerland?"
                punchLine="I don't know, but the flag is a big plus!"
            />

            <Joke
                question="Did you hear about the mathematician who's afraid of negative numbers?"
                punchLine="He'll stop at nothing to avoid them!"
            />

            <Joke
                question="Hear about the new restaurant called Karma?"
                punchLine="There’s no menu: You get what you deserve."
            />

            <Joke
                question="Did you hear about the actor who fell through the floorboards?"
                punchLine="He was just going through a stage."
            />

            <Joke
                question="Did you hear about the claustrophobic astronaut?"
                punchLine="He just needed a little space."
            /> */}

            {jokesComponents}

        </div>
    )
}

export default App