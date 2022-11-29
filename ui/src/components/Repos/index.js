import { Button, Card, CardContent, Typography } from '@mui/material';
import useReposController from '../../redux/controller/repos';
import './index.css';

const Repos = () => {
  const reposData = useReposController();

  const RepoList = () => {
    const repos = reposData?.value?.items?.map((repo) => (
      <Card sx={{ width: 350, height: 200 }} className='card'>
        <CardContent>
          <Typography className='card-subtitle' color="text.secondary" gutterBottom>{repo.full_name}</Typography>
          <Typography className='card-title' gutterBottom>{repo?.name}</Typography>
          <Typography className='card-description' color="text.secondary" gutterBottom>{repo.description}</Typography>
          <Button href={repo.html_url} variant='outlined' size='small'>Open Repo</Button>
        </CardContent>
      </Card>
    ))
    return <div className='cards'>{repos}</div>
  }

  return reposData?.value?.items ? (<RepoList/>) : (<div>Repos getting loaded!</div>);
}

export default Repos;