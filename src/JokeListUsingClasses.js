import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import JokeUsingClasses from './JokeUsingClasses'
import "./JokeList.css";

class JokeListUsingClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = { jokes: [] }
    }

    componentDidMount() {

        
    }




    render() {
        if (jokes.length) {
            let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

            return (
                <div className="JokeList">
                    <button className="JokeList-getmore" onClick={generateNewJokes}>
                        Get New Jokes
                    </button>

                    {sortedJokes.map(j => (
                        <JokeUsingClasses text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={vote} />
                    ))}
                </div>
            );
        }

        return null;
    }
}

export default JokeListUsingClasses;