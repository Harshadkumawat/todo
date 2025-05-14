import { useSelector } from "react-redux";
import Card from "./Card";

const CardContainer = () => {
  const todos = useSelector((state) => state.todos.allTodos); // Make sure path is correct

  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo) => (
        <Card
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;
