// Hooks
import { useFirestoreGet } from "../../hooks/useFirestoreGet";

const Dashboard = () => {
  const { documents: projects, error } = useFirestoreGet("projects");

  return (
    <div className="dashboard">
      <h2 className="page.title">Dashboard</h2>
      {error && <div className="error">{error}</div>}
      {projects && projects.map((project) => <p>{project.name}</p>)}
    </div>
  );
};

export default Dashboard;
