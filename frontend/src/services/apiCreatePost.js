import { toast } from "sonner";
import { createPost } from "../redux/userSlice";

export const addPost = (newPost) => async (dispatch) => {
  try {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const data = await response.json();
    if (response.status === 201) {
      toast.success("Post creado exitosamente");
      // Si la creación es exitosa, actualizamos el estado con el nuevo post
      dispatch(createPost(data[0]));
      return { success: true, message: "Post creado correctamente" };
    } else {
      toast.error(data.error);

      return {
        success: false,
        message: data.error || "Error al crear el post",
      };
    }
  } catch (error) {
    console.error("Error creating post:", error);
    toast.error(" Error al crear el post");
    return { success: false, message: error.message };
  }
};
