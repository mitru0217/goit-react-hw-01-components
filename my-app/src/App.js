import Description from "./components/Description";
import Stats from "./components/Stats";
import StatList from "./components/StatList";
import user from "./user.json";
import data from "./data.json";

export default function App() {
  return (
    <div className='container'>
      <div class='profile'>
        <h2>1.Профіль соціальної мережі</h2>
        <Description
          url={user.avatar}
          name={user.username}
          tag={user.tag}
          location={user.location}
        />
        <Stats
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
        />
      </div>
      <section className='statistics'>
        <h2>2- Секція статистики</h2>
        <StatList title='Upload stats' items={data} />
        <StatList items={data} />
      </section>
      <div>
        <h2>3 - Список друзів</h2>
      </div>
    </div>
  );
}
