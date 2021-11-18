import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Components/Home';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import Footer from './Components/Footer';
import About from './Components/About';
import Missing from './Components/Missing';
import { Route, Switch,useHistory } from 'react-router';
import {useState, useEffect} from 'react'

function App() {
  const [posts,setPosts] = useState([{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi tneque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi ",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }])
  const [search, setSearch] = useState('');
  const [searchResults, setsearchResults] = useState([]);
  const history = useHistory()
  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    history.push('/')
  }
  return (
    <div className="App">
      <Header title="React JS Blog"/>
      <Nav search={search} setSearch={setSearch}/>
      <Switch>
        <Route path="/" exact>
          <Home posts={posts}/>
        </Route>
        <Route path="/post"  exact>
          <NewPost />
        </Route>
        <Route path="/post/:id">
          <PostPage posts={posts} handleDelete={handleDelete}/>
        </Route>
        <Route path="/about" component={About}  exact />
        <Route path="*" component={Missing}  />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
