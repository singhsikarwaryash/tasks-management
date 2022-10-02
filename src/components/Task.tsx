import clsx from "clsx";
import { HiPencil, HiTrash } from "react-icons/hi";
import { TaskAction, TaskType } from "../pages/app";
import IconButton from "./IconButton";

type TaskProps = {
  task: TaskType;
} & TaskAction;

export const Task = ({
  task,
  actions: { toggleCompleted, deleteTask, openUpdateModal },
}: TaskProps) => {
  return (
    <li className="bg-white p-4 rounded-md  flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          onChange={() => {
            toggleCompleted(task.id, task.isCompleted);
          }}
          checked={task.isCompleted}
          className="text-indigo-500 p-3 rounded-md transition-all duration-200 focus:ring-0"
        />
        <div className="flex flex-col">
          <span
            className={clsx(
              "font-semibold text-gray-600",
              task.isCompleted && "line-through text-gray-400"
            )}
          >
            {task.task}
          </span>
          <span className="text-sm text-gray-500">{task.createdAt}</span>
        </div>
      </div>
      {/* Actions */}
      <div className="flex items-center space-x-2">
        {/* Delete */}
        <IconButton onClick={() => deleteTask(task.id)}>
          <HiTrash className="text-gray-600" />
        </IconButton>
        {/* Update */}
        <IconButton onClick={() => openUpdateModal(task.id)}>
          <HiPencil className="text-gray-600" />
        </IconButton>
      </div>
    </li>
  );
};
