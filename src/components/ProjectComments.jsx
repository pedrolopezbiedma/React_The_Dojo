// React
import { useState } from "react";
import { useParams } from "react-router-dom";

// Styles
import "./ProjectComments.css";

// Firebase
import { timestamp } from "../firebase/config";

// Hooks
import { useAuthenticationContext } from "../hooks/useAuthenticationContext";
import { useFirestoreUpdate } from "../hooks/useFirestoreUpdate";

const ProjectComments = ({ project }) => {
  const { id: docId } = useParams();
  const { updateDocument } = useFirestoreUpdate("projects");
  const [newComment, setNewComment] = useState(``);
  const { user } = useAuthenticationContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = {
      id: Math.random() * 100,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      user: {
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
    };
    const commentsToUpdate = [...project.comments, comment];
    updateDocument(docId, { comments: commentsToUpdate });
    setNewComment(``);
  };

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comments</span>
          <textarea
            required
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
};

export default ProjectComments;
