import React from "react";
import './Joke.css'

class JokeUsingClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = { vote: 0 };
        this.text = this.props.text;
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);


    }
        upVote = ({id, vote}) => {
            this.setState({ vote: this.state.vote + 1})
        }

        downVote = ({id, vote}) => {
            this.setState({ vote: this.state.vote -1})
        }
    
    render() {
        return (
            <div className="Joke">
                <div className="Joke-votearea">
                    <button onClick={this.upVote}>
                        <i className="fas fa-thumbs-up" />
                    </button>

                    <button onClick={this.downVote}>
                        <i className="fas fa-thumbs-down" />
                    </button>

                    {this.state.vote}
                </div>

                <div className="Joke-text">{this.text}</div>
            </div>
        )
    }
}

export default JokeUsingClasses;