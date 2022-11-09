import Description from "./components/Description";
import user from "./user.json";

export default function App() {
  return (
    <div class='profile'>
      <Description
        url={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
      />
    </div>
  );
}
