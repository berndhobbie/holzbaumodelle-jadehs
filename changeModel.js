const changeModelButton = document.getElementById('changeModelButton');

changeModelButton.addEventListener('click', () => {
  viewer.LoadModelFromUrls(['assets/17-sparrenpfettenanker.ply']);
});
