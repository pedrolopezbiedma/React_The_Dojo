// Styles
import "./ProjectInfo.css";

// Components
import Avatar from "./Avatar";

const ProjectInfo = ({ project }) => {
  return (
    <div>
      <div className="project-info">
        <h2 className="page-title">{project.name}</h2>
        <p>Created by: {project.createdBy.displayName}</p>
        <p className="due-date">{project.dueDate.toDate().toDateString()}</p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.users.length > 0 &&
            project.users.map((user) => (
              <div key={user.userId}>
                <Avatar user={user} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
