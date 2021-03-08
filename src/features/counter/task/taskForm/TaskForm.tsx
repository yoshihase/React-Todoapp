import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import styles from "./TaskFrom.module.scss";

type Inputs = {
  taskTitle: string;
};
const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    console.log(data);
  };
  return (
    <div className={styles.root}>
      <form
        onSubmit={handleSubmit(handleCreate)}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="新しいタスク"
          variant="outlined"
        />
      </form>
    </div>
  );
};

export default TaskForm;
