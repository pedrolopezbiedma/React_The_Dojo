// React
import { useParams } from "react-router-dom";

// Hooks
import { useFirestoreDocumentGet } from "../../hooks/useFirestoreDocumentGet";

// Components
import ProjectInfo from "../../components/ProjectInfo";

const ProjectDetails = () => {
  const { id: docId } = useParams();
  const { document: project, error } = useFirestoreDocumentGet(
    "projects",
    docId
  );
  return (
    <div className="project-details">
      {error && <div className="error">{error}</div>}
      {!error && project === "" && <div>No data for that id.</div>}
      {project && <ProjectInfo project={project} />}
    </div>
  );
};

export default ProjectDetails;
