import { toast } from "sonner";
import { deletePost } from "../redux/userSlice";

export const removePost = (postId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    });

    if (response.status === 200) {
      toast.success("Post borrado exitosamente");
      // Si la eliminación fue exitosa, despachamos la acción `deletePost` para actualizar el estado
      dispatch(deletePost(postId));
      return { success: true, message: "Post borrado correctamente" };
    } else {
      const data = await response.json();
      return {
        success: false,
        message: data.message || "Failed to delete post",
      };
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false, message: error.message };
  }
};
