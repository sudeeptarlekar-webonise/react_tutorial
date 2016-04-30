var Comment = React.createClass({
  render: function() {
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {marked(this.props.children.toString())}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Sudeep"> This is one comment </Comment>
        <Comment author="Pallavi"> This is *second* comment </Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  displayName: "CommentForm",
  render: function() {
    return(
      React.createElement('div', {className: "commentForm"},
        "I am Comment Form."
      )
    )
  }
});

var CommentBox = React.createClass({
  render: function() {
    return(
     <div className="commentBox">
      <CommentList />
      <CommentForm />
     </div>
    );
  }
});

ReactDOM.render(
  React.createElement(CommentBox, null), document.getElementById('content')
)
