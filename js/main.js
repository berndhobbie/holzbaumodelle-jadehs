// tell the engine where to find the libs folder
OV.SetExternalLibLocation('libs');
let viewer = null;
window.addEventListener('load', () => {
  // get the parent element of the viewer
  let parentDiv = document.getElementById('viewer');

  // initialize the viewer with the parent element and some parameters
  viewer = new OV.EmbeddedViewer(parentDiv, {
    camera: new OV.Camera(
      new OV.Coord3D(-1.5, -3.0, 2.0),
      new OV.Coord3D(0.0, 0.0, 0.0),
      new OV.Coord3D(0.0, 0.0, 1.0)
    ),
    backgroundColor: new OV.Color(255, 255, 255),
    defaultColor: new OV.Color(200, 200, 200),
    edgeSettings: {
      showEdges: false,
      edgeColor: new OV.Color(0, 0, 0),
      edgeThreshold: 1,
    },
    environmentMap: [
      '../website/assets/envmaps/grayclouds/posx.jpg',
      '../website/assets/envmaps/grayclouds/negx.jpg',
      '../website/assets/envmaps/grayclouds/posy.jpg',
      '../website/assets/envmaps/grayclouds/negy.jpg',
      '../website/assets/envmaps/grayclouds/posz.jpg',
      '../website/assets/envmaps/grayclouds/negz.jpg',
    ],
    onModelLoaded: () => {
      console.log('Model loaded');
    },
  });

  //get the id of the model from the url
  var GET = {};
  var query = window.location.search.substring(1).split('&');
  for (var i = 0, max = query.length; i < max; i++) {
    if (query[i] === '')
      // check for trailing & with no param
      continue;

    var param = query[i].split('=');
    GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || '');
  }

  const id = GET.id;

  //load the model with the id
  viewer.LoadModelFromUrls([`../assets/17-sparrenpfettenanker.ply`]);
});
