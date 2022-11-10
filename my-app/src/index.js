import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{<App />}</React.StrictMode>);

// Опис компонента <Profile>
// Компонент повинен приймати кілька пропсів з інформацією про користувача:

// username — ім'я користувача
// tag — тег в соціальній мережі без @
// location — місто і країна
// avatar — посилання на зображення
// stats — об'єкт з інформацією про активності
// Компонент повинен створювати DOM елемент наступної структури.
// {/* <div class='profile'>
//   <div class='description'>
//     <img
//       src='https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
//       alt='User avatar'
//       class='avatar'
//     />
//     <p class='name'>Petra Marica</p>
//     <p class='tag'>@pmarica</p>
//     <p class='location'>Salvador, Brasil</p>
//   </div>

//   <ul class='stats'>
//     <li>
//       <span class='label'>Followers</span>
//       <span class='quantity'>1000</span>
//     </li>
//     <li>
//       <span class='label'>Views</span>
//       <span class='quantity'>2000</span>
//     </li>
//     <li>
//       <span class='label'>Likes</span>
//       <span class='quantity'>3000</span>
//     </li>
//   </ul>
// </div>; */}

// Приклад використання
// import user from 'path/to/user.json;

// <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />
