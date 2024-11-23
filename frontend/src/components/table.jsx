import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import searchIcon from "../assets/searchIcon.svg";
import { removePost } from "../services/apiRemovePost.js";

const Table = ({ data }) => {
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilter = () => {
    const query = searchTerm.toLowerCase();
    const filtered = data.filter((item) => {
      return (
        item.nombre.toLowerCase().includes(query) ||
        item.descripcion.toLowerCase().includes(query)
      );
    });
    if (filtered.length === 0) {
      toast.error("No se encontraron resultados");
    }
    if (filtered.length > 0) {
      toast.success(`${filtered.length} coincidencias encontradas`);
    }
    setFilteredData(filtered);
  };

  const handleDelete = (postId) => {
    dispatch(removePost(postId)); // Despacha removePost para eliminar el post
  };

  return (
    <div className="container mt-12 dark:text-white text-black ">
      <div className="flex flex-row items-center justify-between py-2 rounded-t border-b w-auto">
        <div className="relative w-auto sm:w-auto">
          <img
            src={searchIcon}
            alt="Buscar"
            className="absolute w-4 left-2 top-1/2 transform -translate-y-1/2"
          />
          <input
            className="bg-transparent border dark:border-gray-300 border-gray-700 rounded pl-7 w-full"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado
            placeholder="Filtro de nombre"
          />
        </div>
        <button
          className="dark:bg-white min-w-[100px] sm:mt-0 mt-2 dark:text-black bg-black text-white rounded px-4 shadow-lg py-2 font-bold"
          onClick={handleFilter}
        >
          Buscar
        </button>
      </div>
      <div className="overflow-auto max-h-[500px] border dark:border-gray-300 border-gray-700">
        <div className="text-left">
          <table className="w-full min-w-[200px] sm:min-w-[1000px]">
            <thead className="dark:bg-neutral-400 bg-gray-400 text-white dark:text-black">
              <tr>
                <th className="sticky top-0 border-r dark:border-gray-300 border-gray-700 px-4 py-2 dark:bg-neutral-400 bg-gray-400">
                  Nombre
                </th>
                <th className="sticky top-0 border-r dark:border-gray-300 border-gray-700 px-4 py-2 dark:bg-neutral-400 bg-gray-400">
                  Descripción
                </th>
                <th className="sticky top-0 px-4 py-2 dark:bg-neutral-400 bg-gray-400">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="dark:border-white border-black">
              {filteredData && filteredData.length > 0 ? (
                filteredData.map((row) => (
                  <tr
                    key={row.id}
                    className="odd:bg-white even:bg-gray-300 dark:odd:bg-neutral-800 dark:even:bg-neutral-500"
                  >
                    <td className="border-r dark:border-gray-300 border-gray-700 px-4 py-2">
                      {row.nombre}
                    </td>
                    <td className="border-r dark:border-gray-300 border-gray-700 px-4 py-2">
                      {row.descripcion}
                    </td>
                    <td
                      className="px-4 py-2 hover:underline hover:cursor-pointer"
                      onClick={() => handleDelete(row.id)}
                    >
                      Eliminar
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                  >
                    No se han encontrado datos
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
