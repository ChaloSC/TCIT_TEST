import Posts from "../database/models.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll(); // Se busca todos los posts con Sequelize

    if (posts.length === 0) {
      return res.status(404).json({ message: "No se han encontrado posts" });
    }

    // Responde con todos los posts
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    if (!nombre) {
      return res.status(400).json({ error: "Falta ingresar nombre del post" });
    }

    if (!descripcion) {
      return res
        .status(400)
        .json({ error: "Falta ingresar descripcion del post" });
    }

    const nuevoPost = await Posts.create({
      // Crea un nuevo post con Sequelize
      nombre: nombre,
      descripcion: descripcion,
    });

    // Devuelve el nuevo post creado
    res.status(201).json([nuevoPost]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const posts = await Posts.findByPk(id);

    // Verificar si el post existe
    if (!posts) {
      return res.status(404).json({ message: `Post no encontrado.` });
    }

    await posts.destroy(); // Destruye el post con Sequelize

    // Devuelve un mensaje con el contenido del post eliminado
    return res.status(200).json({
      message: "Post eliminado correctamente.",
      posts,
    });
  } catch (error) {
    console.error("Error al eliminar el post:", error);
    return res.status(500).json({ error: error.message });
  }
};
