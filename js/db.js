//read the local json file and return the data
const getAllModels = async () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  let githubRepo = '';
  if (!host.includes('127.0.0.1')) {
    githubRepo = '/holzbaumodelle';
  }

  const jsonModelDataUrl = `${protocol}//${host}${githubRepo}/assets/models.json`;
  const data = await fetch(jsonModelDataUrl);
  const json = await data.json();
  return json;
};
