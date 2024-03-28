import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

const URL = "http://localhost:8000/api/auth";
function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  console.log(todos);
  function handleSubmit(e) {
    console.log(e);
    axios
      .post(`${URL}/add`, { task: task })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
    setTodos([...todos, { task: task }]);
  }

  useEffect(() => {
    axios
      .get(URL + "/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put(URL + "/update/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
    setTodos(todos);
  };
  const handleDelete = (id) => {
    axios
      .delete(URL + "/delete/" + id)
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="Container">
      <h2>Todo List</h2>
      <div className="input">
        <input
          type="text"
          placeholder="Enter Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
        <div className="list">
          {todos.length > 0
            ? todos.map((t) => (
                <div key={t._id} className="task">
                  <div className="checkbox" onClick={() => handleEdit(t._id)}>
                    {t.done ? (
                      <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                    ) : (
                      <BsCircleFill className="icon" />
                    )}
                    <p className={t.done ? "line_through" : ""}>{t.task}</p>
                  </div>
                  <div>
                    <span>
                      <BsFillTrashFill
                        className="icon"
                        onClick={() => {
                          handleDelete(t._id);
                        }}
                      />
                    </span>
                  </div>
                </div>
              ))
            : "No Record"}
        </div>
      </div>
    </div>
  );
}

export default App;
