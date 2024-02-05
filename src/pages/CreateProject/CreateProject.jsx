// React
import { useState } from "react";
import Select from "react-select";

// Styles
import "./CreateProject.css";

// Hooks
import { useFirestoreGet } from "../../hooks/useFirestoreGet";

// Categories
const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

const CreateProject = () => {
  const { documents: users } = useFirestoreGet("users");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState(null);
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  const usersOptions = users.map((user) => {
    return { value: user, label: user.displayName };
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormError(null);
    if (!category) {
      setFormError("You need to assign a category");
      return;
    }

    if (assignedUsers.length === 0) {
      setFormError("You need to assign at least one user");
      return;
    }

    console.log(
      "Values in the form are >>",
      name,
      details,
      dueDate,
      category,
      assignedUsers
    );
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            required
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <textarea
            required
            type="text"
            value={details}
            onChange={(event) => setDetails(event.target.value)}
          />
        </label>
        <label>
          <input
            required
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </label>
        <label>
          <Select
            value={category}
            options={categories}
            value={category}
            onChange={(event) => setCategory(event)}
          />
        </label>
        <label>
          <Select
            isMulti
            options={usersOptions}
            onChange={(event) => setAssignedUsers([...event])}
          />
        </label>
        <button className="btn">Create Project</button>
        {formError && <div className="error">{formError}</div>}
      </form>
    </div>
  );
};

export default CreateProject;
