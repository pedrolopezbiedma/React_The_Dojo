// React
import { useParams } from "react-router-dom";
// Hooks
import { useFirestoreDocumentGet } from "../../hooks/useFirestoreDocumentGet";

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
      {project && <h1>{project.name}</h1>}
    </div>
  );
};

export default ProjectDetails;
