const modelleRow = document.getElementById('modelleRow');

const holzbaumodelle = [
  {
    id: 1,
    name: 'Holzbaumodell 1',
    image: 'https://via.placeholder.com/350x150',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
  },
];

//generate a bootstrap card for each modelle and add it to the modelleRow
holzbaumodelle.forEach((modelle) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '18rem';
  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.src = modelle.image;
  img.alt = modelle.name;
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = modelle.name;
  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerHTML = modelle.description;
  const cardLink = document.createElement('a');
  cardLink.classList.add('btn', 'btn-primary');
  cardLink.innerHTML = 'Details';
  //generate the id as param for the link
  cardLink.href = `/test.html?id=${modelle.id}`;
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardLink);
  card.appendChild(img);
  card.appendChild(cardBody);
  modelleRow.appendChild(card);
});

{
  /* <div class="card m-2" style="width: 18rem;">
<img src="https://placeimg.com/640/480/arch" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */
}
