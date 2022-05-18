//read the local json file and return the data
const allModels = [];

const getAllModels = async () => {
  const host = getHostLink();

  const jsonModelDataUrl = `${host}/assets/models.json`;
  const data = await fetch(jsonModelDataUrl);
  const json = await data.json();
  allModels.push(...json);
};
