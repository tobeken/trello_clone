import React from "react";

const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskDeleteButton(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
