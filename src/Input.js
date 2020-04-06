import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      suggestions: [],
      colors: this.props.colors
    };
  }

  filter = e => {
    let input = e.target.value;
    let list = [];
    this.props.colors.forEach(color => {
      if (color.name.includes(input)) {
        list.push(color.name);
      }
    });
    this.setState(prevState => ({
      suggestions: list
    }));
  };

  addToList = color => {
    this.setState(prevState => ({
      tags: [...prevState.tags, color]
    }));
  };

  remove = tag => {};

  render() {
    return (
      <div>
        <ul className="tagList">
          {this.state.tags.map((tag, index) => (
            <li onClick={this.remove(tag)} key={index}>
              {tag}
            </li>
          ))}
        </ul>
        <form>
          <input type="text" onChange={this.filter} />
          <ul className="suggestions">
            {this.state.suggestions.map((suggestion, index) => (
              <li onClick={e => this.addToList(suggestion)} key={index}>
                {suggestion}
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
