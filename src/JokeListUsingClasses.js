import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import JokeUsingClasses from './JokeUsingClasses'
import "./JokeList.css";

class JokeListUsingClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = { jokes: [] }
        this.numJokesToGet = 10;
    }

    async componentDidMount() {
        let j = this.state;
        let seenJokes = new Set();
        try {
            while (j.length < this.numJokesToGet) {
                let res = await axios.get("https://icanhazdadjoke.com", {
                    headers: { Accept: "application/json" }
                });
                let { status, ...jokeObj } = res.data;

                if (!seenJokes.has(jokeObj.id)) {
                    seenJokes.add(jokeObj.id);
                    j.push({ ...jokeObj, votes: 0 });
                } else {
                    console.error("duplicate found!");
                }
            }
            this.setState({ jokes: [j]});
        } catch (e) {
            console.log(e);
        }
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.todoId !== this.props.todoId) {
            let j = this.state.jokes;
            let seenJokes = new Set();
            try {
                while (j.length < this.numJokesToGet) {
                    let res = await axios.get("https://icanhazdadjoke.com", {
                        headers: { Accept: "application/json" }
                    });
                    let { status, ...jokeObj } = res.data;

                    if (!seenJokes.has(jokeObj.id)) {
                        seenJokes.add(jokeObj.id);
                        j.push({ ...jokeObj, votes: 0 });
                    } else {
                        console.error("duplicate found!");
                    }
                }
                this.setState({ jokes: [...j] });
            } catch (e) {
                console.log(e);
            }
        }
    };









    vote = (id, delta) => {
        this.setJokes(allJokes =>
            allJokes.map(j => (j.id === id ? { ...j, votes: j.votes + delta } : j))
        );
    }

    render() {
        if (this.state.jokes.length) {
            let sortedJokes = this.state.jokes.sort((a, b) => b.votes - a.votes);

            return (
                <div className="JokeList">
                    <button className="JokeList-getmore" onClick={console.log('placeholderFunction ')}>
                        Get New Jokes
                    </button>

                    {sortedJokes.map(j => (
                        <JokeUsingClasses text={j.joke} key={j.id} id={j.id} votes={j.votes} />
                    ))}
                </div>
            );
        }

        return null;
    }
}

export default JokeListUsingClasses;