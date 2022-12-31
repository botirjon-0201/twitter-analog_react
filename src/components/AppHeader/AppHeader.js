import "./AppHeader.css";
import { useSelector } from "react-redux";

const AppHeader = () => {
  const { data } = useSelector((state) => state);
  const allPosts = data.length;
  const liked = data.filter((item) => item.like).length;

  return (
    <div className="app-header d-flex">
      <h1>Botirjon Umurzoqov</h1>
      <h2>
        {allPosts} posts, like {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
