import { useState } from 'react';
import './App.css';
import { searchRepositories } from './api';

const App = () => {
  const [isReposListLoading, setIsRepoListLoading] = useState(true);
  const [queries, setQueries] = useState({language: 'javascript', topic: 'hacktoberfest'})
  const [repoList, setRepoList] = useState([])

  searchRepositories(queries).then((data) => {
    console.log(data)
    setRepoList(data.items)
    setIsRepoListLoading(false)
  })


  const RepoList = () => {
    const repos = repoList.map((repo) => (
      <div>
        <p>{repo.full_name}</p>
      </div>
    ))
    return <div>{repos}</div>
  }

  return (
    <div className="App">
      Open Issue Finder
      {!isReposListLoading && <RepoList/>}
    </div>
  );
}

export default App;
