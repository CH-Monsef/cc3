import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ListProduits = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.todo.data.todos);
  const userTodo = data.filter((item) => {
    return item.userId === parseInt(id);
  });
  console.log(userTodo);

  return <div></div>;
};

export default ListProduits;
