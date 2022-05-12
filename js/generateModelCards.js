const modelRow = document.getElementById('modelRow');

getAllModels().then((models) => {
  allModels = models;
  //generate a bootstrap card for each model and add it to the modelRow
  models.forEach((model) => {
    const card = document.createElement('div');
    card.classList.add('card', 'p-0', 'm-2', 'shadow-sm');
    card.style.width = '18rem';
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = `./assets/img/thumb/${model.thumbnail}`;
    img.alt = model.name;
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = model.name;
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML = model.description;
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('mb-2');
    for (let i = 0; i < model?.tags?.length; i++) {
      const tag = document.createElement('span');
      tag.classList.add('badge', 'bg-secondary', 'me-1', 'shadow-sm');
      tag.innerHTML = model.tags[i];
      tagDiv.appendChild(tag);
    }
    const cardLink = document.createElement('a');
    cardLink.classList.add('btn', 'btn-primary', 'shadow-sm', 'fw-bold');
    cardLink.innerHTML = 'Zum Modell';
    //generate the id as param for the link
    let githubRepo = '';
    const host = window.location.host;
    if (!host.includes('127.0.0.1')) {
      githubRepo = '/holzbaumodelle';
    }
    cardLink.href = `${githubRepo}/pages/showModel.html?id=${model.id}`;

    //year of the model
    if (model?.year) {
      const year = document.createElement('span');
      year.classList.add(
        'badge',
        'rounded-pill',
        'bg-secondary',
        'shadow-sm',
        'position-absolute',
        'top-0',
        'end-0',
        'm-2'
      );
      year.innerHTML = model.year;
      card.appendChild(year);
    }

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(tagDiv);
    cardBody.appendChild(cardLink);
    card.appendChild(img);
    card.appendChild(cardBody);
    modelRow.appendChild(card);
  });
});
