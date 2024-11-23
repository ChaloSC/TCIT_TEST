import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { fetchPosts } from "./services/apiFetchPosts.js"; // Importa el thunk removePost
import Table from "./components/table.jsx";
import NewPost from "./components/addPost.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts()); // Despacha fetchPosts al montar el componente
  }, [dispatch]);

  const posts = useSelector((state) => state.user.posts);

  return (
    <>
      <div className="text-center py-12">
        <Table data={posts} />
        <NewPost />
      </div>
      <Toaster
        theme="system"
        visibleToasts={3}
        dir="auto"
        richColors
        duration={2500}
      />
    </>
  );
}

export default App;
