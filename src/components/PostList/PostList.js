import { useSelector } from "react-redux";
import { filterPost, searchPost } from "../../redux/actions";
import PostListItem from "../PostListItem";
import "./PostList.css";

const PostList = () => {
  const { data, term, filter } = useSelector((state) => state);
  const visiblePosts = filterPost(searchPost(data, term), filter);

  return (
    <ul className="app-list list-group">
      {visiblePosts.map((item) => {
        return (
          <li key={item.id} className="list-group-item">
            <PostListItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
