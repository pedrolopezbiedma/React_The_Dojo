// Hooks
import { useFirestoreGet } from "../../hooks/useFirestoreGet";

// Components
import ProjectList from "../../components/ProjectList";

const Dashboard = () => {
  const { documents: projects, error } = useFirestoreGet("projects");

  return (
    <div className="dashboard">
      <h2 className="page.title">Dashboard</h2>
      {error && <div className="error">{error}</div>}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};

export default Dashboard;
