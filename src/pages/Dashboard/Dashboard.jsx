// Hooks
import { useFirestoreCollectionGet } from "../../hooks/useFirestoreCollectionGet";

// Components
import ProjectList from "../../components/ProjectList";
import ProjectsFilter from "../../components/ProjectsFilter";

const Dashboard = () => {
  const { documents: projects, error } = useFirestoreCollectionGet("projects");

  return (
    <div className="dashboard">
      <h2 className="page.title">Dashboard</h2>
      <ProjectsFilter />
      {error && <div className="error">{error}</div>}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};

export default Dashboard;
