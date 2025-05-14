import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, clearEditTodo } from "../features/todo/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { todo, isEdit } = useSelector((state) => state.todos.edit);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isEdit) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [isEdit, todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    if (isEdit) {
      dispatch(updateTodo({ id: todo.id, title, description }));
      dispatch(clearEditTodo());
    } else {
      dispatch(addTodo({ id: Date.now(), title, description }));
    }

    setTitle("");
    setDescription("");
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    dispatch(clearEditTodo());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-xl w-full mx-auto p-6 mt-10 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        {isEdit ? "Edit Todo" : "Add a New Todo"}
      </h2>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">Title</label>
        <input
          type="text"
          placeholder="Enter title"
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Description
        </label>
        <textarea
          placeholder="Enter description"
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-4 rounded-lg w-full font-semibold"
        >
          {isEdit ? "Update Todo" : "Add Todo"}
        </button>
        {isEdit && (
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 hover:bg-gray-600 transition text-white py-2 px-4 rounded-lg w-full font-semibold"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
