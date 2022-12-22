import React from "react";
import { PropTypes } from "prop-types";

function Comment({ comment }) {
  return (
    <div className="col-md-10 offset-md-1 comment-block mt-4">
      <div className="comment-body mb-2 mt-3">{comment.body}</div>
      <small>
        <em>
          Created <span>{comment.created_at}</span> ago by:
        </em>
        {comment.user.full_name}
      </small>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
