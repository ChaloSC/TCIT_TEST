import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../services/apiCreatePost.js";

const NewPost = () => {
  const dispatch = useDispatch();

  const [newPost, setNewPost] = useState({
    nombre: "",
    descripcion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postToCreate = {
      ...newPost,
    };

    dispatch(addPost(postToCreate));

    setNewPost({
      nombre: "",
      descripcion: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center sm:items-start justify-between dark:text-white text-black  sm:space-x-12 mt-8 mb-6"
    >
      <input
        type="text"
        name="nombre"
        value={newPost.nombre}
        onChange={handleInputChange}
        placeholder="Nombre"
        className="border dark:border-gray-300 border-gray-700 mb-4 sm:mb-0 p-2 rounded w-full "
      />
      <input
        type="text"
        name="descripcion"
        value={newPost.descripcion}
        onChange={handleInputChange}
        placeholder="Descripción"
        className="border dark:border-gray-300 border-gray-700 mb-4 sm:mb-0 p-2 rounded w-full "
      />
      <button
        type="submit"
        className="dark:bg-white dark:text-black min-w-[100px] bg-black text-white rounded shadow-lg py-2 font-bold w-full sm:w-auto"
      >
        Crear
      </button>
    </form>
  );
};

export default NewPost;
