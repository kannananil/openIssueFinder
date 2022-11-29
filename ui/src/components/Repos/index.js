import useReposController from '../../redux/controller/repos';

const Repos = () => {
  const reposData = useReposController();

  const RepoList = () => {
    const repos = reposData?.value?.items?.map((repo) => (
      <div>
        <p>{repo.full_name}</p>
      </div>
    ))
    return <div>{repos}</div>
  }

  return reposData?.value?.items ? (<RepoList/>) : (<div>Repos getting loaded!</div>);
}

export default Repos;