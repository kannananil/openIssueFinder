import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reposActions } from '../slices/repos';

const useReposController = () => {
  const reposData = useSelector(((state) => state.repos?.reposData));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reposActions.fetchRepos());
  }, [dispatch]);

  return reposData;
}

export default useReposController;
