//read the local json file and return the data
const getAllModels = async () => {
  const data = await fetch('./assets/models.json');
  const json = await data.json();
  return json;
};
