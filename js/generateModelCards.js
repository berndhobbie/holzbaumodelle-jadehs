const modelRow = document.getElementById('modelRow');

getAllModels().then((models) => {
  //generate a bootstrap card for each model and add it to the modelRow
  models.forEach((model) => {
    const card = document.createElement('div');
    card.classList.add('card', 'p-0', 'm-2');
    card.style.width = '18rem';
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    const imgSrcModel = `${model.id}-${model.name.toLowerCase()}-thumb.jpg`;
    img.src = `./assets/img/thumb/${imgSrcModel}`;
    img.alt = model.name;
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = model.name;
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML = model.description;
    const cardLink = document.createElement('a');
    cardLink.classList.add('btn', 'btn-primary');
    cardLink.innerHTML = 'Details';
    //generate the id as param for the link
    cardLink.href = `/pages/showModel.html?id=${model.id}`;
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    card.appendChild(img);
    card.appendChild(cardBody);
    modelRow.appendChild(card);
  });
});
