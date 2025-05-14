import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setEditTodo } from "../features/todo/todoSlice";

const Card = ({ id, title, description }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    dispatch(setEditTodo({ id, title, description }));
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition w-full">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
        <button
          onClick={handleEdit}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
