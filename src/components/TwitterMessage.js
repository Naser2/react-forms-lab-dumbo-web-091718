import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      remainingChars: props.maxChars
    };
  }

  updateTweet = (e) => {
    const tweet = e.target.value;
    this.setState({
      tweet,
      remainingChars: this.props.maxChars - tweet.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.updateTweet} />
        <h4>Your reamining characters are: {this.state.remainingChars}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
