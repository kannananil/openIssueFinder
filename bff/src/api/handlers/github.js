const { searchRepositories } = require('../gateway/github');
const { info, error } = require('../../logger');

const listRepositories = async (req, res) => {
  const { repos } = req.app.locals
  const timeDifference = new Date().getTime() - new Date(repos?.refreshedAt).getTime();
  const isExpired = !repos?.refreshedAt || (timeDifference > 120 * 1000);
  if(isExpired) {
    info('Refreshing respository cache!')
    return searchRepositories()
      .then((response) => {
        req.app.locals.repos = { refreshedAt: new Date().getTime(), data: response };
        info('Repository cache refreshed successfully!')
        res.json(response);
      })
      .catch((err) => {
        error('Failed to refresh repository cache!', err)
        res.status(500).json(err)
      });
  }
  return res.json(repos?.data);
};

module.exports = { listRepositories };