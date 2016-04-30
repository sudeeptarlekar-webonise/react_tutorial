var Comment = React.createClass({
  displayName: "Comment",
  render: function() {
    return(
      React.createElement('div', {className: "comment"},
        React.createElement('h2', {className: "commentAuthor"},
          {this.props.author}
        )
        {this.props.children}
      )
    )
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",
  render: function() {
    return (
      React.createElement('div', {className: "commentList"},
        React.createElement(Comment, {author: "Sudeep"})
      )
    )
  }
});

var CommentForm = React.createClass({
  displayName: "CommentForm",
  render: function() {
    return (
      React.createElement('div', {className: "commentForm"},
        "I am comment form"
      )
    )
  }
});

ReactDOM.render(
  React.createElement(CommentList, null), document.getElementById('content')
);