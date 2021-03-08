import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "../taskSlice";
import TaskItem from "../taskItem/TaskItem";
import styles from "./taskList.module.scss";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTasks);

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
