function Comment({ username, text }) {
  return (
    <div className="comment">
      <p className="comment-username">{username}</p>
      <p className="comment-text">{text}</p>
    </div>
  );
}

export default Comment;