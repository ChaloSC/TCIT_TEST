import { toast } from "sonner";
import { setPost } from "../redux/userSlice";

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await fetch("/api/posts");
    const data = await response.json();
    if (response.status === 200) {
      toast.success("Posts obtenidos correctamente");
      dispatch(setPost(data)); // Despacha los datos de los posts al store
    }

    if (response.status === 404) {
      toast.error("No se encontraron posts, intente creando uno.");
      return {
        success: false,
        message: "No se encontraron posts, intente creando uno.",
      };
    }

    if (response.status !== 200) {
      toast.error("Error interno del servidor");
      return { success: false, message: "Error interno del servidor" };
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { success: false, message: error.message };
  }
};
