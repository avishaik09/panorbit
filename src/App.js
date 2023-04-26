
import UserList from './Component/UserList';

import './App.css';

import { Routes, Route } from 'react-router';
import ProfileHome from './Component/ProfileHome';
import Posts from './Component/Posts';
import Todo from './Component/Todo';
import Gallery from './Component/Gallery';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        {/* <Route path="/users" element={<ProfileHome />} /> */}
        <Route path="/user/:id/profile" element={<ProfileHome/>} />
        <Route path="/user/:id/posts" element={<Posts/>} />
        <Route path="/user/:id/todo" element={<Todo/>} />
        <Route path="/user/:id/gallery" element={<Gallery/>} />

      </Routes>
    </div>

  );
}

export default App;
