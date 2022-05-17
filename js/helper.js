const createTagDiv = (tags) => {
  if (!tags || tags.length === 0) return;
  const tagDiv = document.createElement("div");
  tagDiv.classList.add("mb-2");
  for (let i = 0; i < tags.length; i++) {
    const tag = document.createElement("span");
    tag.classList.add("badge", "bg-secondary", "me-1", "shadow-sm");
    tag.innerHTML = tags[i];
    tagDiv.appendChild(tag);
  }
  return tagDiv;
};

const getHostLink = () => {
  //generate the id as param for the link
  const host = window.location.host;
  const port = window.location.port;
  const protocol = window.location.protocol;
  let link = `${protocol}//${host}`;
  if (!host.includes("127.0.0.1")) {
    link += "/holzbaumodelle-jadehs";
  }
  return link;
};
