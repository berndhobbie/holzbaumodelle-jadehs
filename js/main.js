// tell the engine where to find the libs folder
OV.SetExternalLibLocation("libs");

const getMetaModelData = () => {
  //get the id of the model from the url
  var GET = {};
  var query = window.location.search.substring(1).split("&");
  for (var i = 0, max = query.length; i < max; i++) {
    if (query[i] === "")
      // check for trailing & with no param
      continue;

    var param = query[i].split("=");
    GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
  }

  const id = parseInt(GET.id);
  getAllModels().then(() => {
    const model = allModels.find((model) => model.id === id);
    loadModel(model?.filename);
    generateModelInfoFooter(model);
  });
};

const loadModel = (filename) => {
  // get the parent element of the viewer
  let parentDiv = document.getElementById("viewer");

  // initialize the viewer with the parent element and some parameters
  let viewer = new OV.EmbeddedViewer(parentDiv, {
    camera: new OV.Camera(
      new OV.Coord3D(-1.5, -3.0, 2.0),
      new OV.Coord3D(0.0, 0.0, 0.0),
      new OV.Coord3D(0.0, 0.0, 1.0)
    ),
    backgroundColor: new OV.Color(33, 37, 41),
    defaultColor: new OV.Color(200, 200, 200),
    edgeSettings: {
      showEdges: false,
      edgeColor: new OV.Color(0, 0, 0),
      edgeThreshold: 1,
    },
    environmentMap: [
      "../website/assets/envmaps/grayclouds/posx.jpg",
      "../website/assets/envmaps/grayclouds/negx.jpg",
      "../website/assets/envmaps/grayclouds/posy.jpg",
      "../website/assets/envmaps/grayclouds/negy.jpg",
      "../website/assets/envmaps/grayclouds/posz.jpg",
      "../website/assets/envmaps/grayclouds/negz.jpg",
    ],
    onModelLoaded: () => {
      console.log("Model loaded");
    },
  });

  //load the model with the id
  viewer.LoadModelFromUrls([`../assets/${filename}`]);
};

const generateModelInfoFooter = (model) => {
  const footer = document.getElementById("modelInfoFooter");
  const modelNameHeader = document.createElement("h3");
  let footerTitle = `${model?.name}`;
  if (model?.year) footerTitle += ` (${model?.year})`;
  modelNameHeader.innerHTML = footerTitle;
  const modelDescription = document.createElement("p");
  modelDescription.innerHTML = model?.description;
  const tagDiv = createTagDiv(model.tags);
  footer.appendChild(modelNameHeader);
  footer.appendChild(modelDescription);
  footer.appendChild(tagDiv);
};

//set the link of the homeLink to the github repo
const setHomeLink = () => {
  const homeLink = document.getElementById("homeLink");
  const githubRepo = getHostLink();
  homeLink.href = githubRepo;
};

setHomeLink();
getMetaModelData();
