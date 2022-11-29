import axios from "axios";

export const searchRepositories = () => {
  return new Promise((resolve, reject) => {
    axios.get('/api/github/repository')
      .then((data) => resolve(data.data))
      .catch((err) => reject(err))
  });
};