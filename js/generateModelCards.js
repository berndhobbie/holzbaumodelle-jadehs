const modelRow = document.getElementById("modelRow");
const searchButton = document.getElementById("searchButton");
const searchTextInput = document.getElementById("searchTextInput");
const resultMessage = document.getElementById("resultMessage");
const resetButton = document.getElementById("resetButton");
let filteredModels = [];

const renderModelOverview = (animate) => {
  modelRow.innerHTML = "";
  //generate a bootstrap card for each model and add it to the modelRow
  filteredModels.forEach((model, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "shadow-sm");
    if (animate) {
      card.classList.add("slide-in-left");
      card.style.animationDelay = `${index * 0.4}s`;
      card.style.zIndex = `${index}`;
    }
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = `./assets/img/thumb/${model.thumbnail}`;
    img.alt = model.name;
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = model.name;
    let cardText = null;
    if (model?.description) {
      cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerHTML = model.description;
    }
    const tagDiv = createTagDiv(model?.tags);
    const cardLink = document.createElement("a");
    cardLink.classList.add("btn", "btn-primary", "shadow-sm", "fw-bold");
    cardLink.innerHTML = "Zum Modell";
    //generate the id as param for the link
    let githubRepo = getHostLink();
    cardLink.href = `${githubRepo}/pages/showModel.html?id=${model.id}`;

    //year of the model
    if (model?.year) {
      const year = document.createElement("span");
      year.classList.add(
        "badge",
        "rounded-pill",
        "bg-secondary",
        "shadow-sm",
        "position-absolute",
        "top-0",
        "end-0",
        "m-2"
      );
      year.innerHTML = model.year;
      card.appendChild(year);
    }

    cardBody.appendChild(cardTitle);
    cardText && cardBody.appendChild(cardText);
    tagDiv && cardBody.appendChild(tagDiv);
    cardBody.appendChild(cardLink);
    card.appendChild(img);
    card.appendChild(cardBody);
    modelRow.appendChild(card);
  });
};

getAllModels().then(() => {
  filteredModels.push(...allModels);
  renderModelOverview(true);
});

searchButton.addEventListener("click", () => {
  searchModels();
});

searchTextInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchModels();
  }
});

resetButton.addEventListener("click", () => {
  searchTextInput.value = "";
  filteredModels = [];
  filteredModels.push(...allModels);
  resultMessage.hidden = true;
  resetButton.hidden = true;
  renderModelOverview(false);
});

const searchModels = () => {
  const searchVal = searchTextInput.value.trim().toLowerCase();
  //get all values from all models which include the search val
  const searchResults = allModels.filter((model) => {
    const searchableValues = [
      model?.name?.toLowerCase(),
      model?.description?.toLowerCase(),
      model?.tags?.join(" ").toLowerCase(),
    ];
    return searchableValues.some((value) => value?.includes(searchVal));
  });
  filteredModels = searchResults;
  createMessage(searchResults.length, searchVal);
  renderModelOverview(false);
};

const createMessage = (count, searchVal) => {
  resultMessage.hidden = false;
  resetButton.hidden = false;
  resultMessage.innerHTML = `${count} Ergebnisse für ${searchVal}`;
};
