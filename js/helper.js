const createTagDiv = (tags) => {
  if (tags.length === 0) return;
  const tagDiv = document.createElement('div');
  tagDiv.classList.add('mb-2');
  for (let i = 0; i < tags.length; i++) {
    const tag = document.createElement('span');
    tag.classList.add('badge', 'bg-secondary', 'me-1', 'shadow-sm');
    tag.innerHTML = tags[i];
    tagDiv.appendChild(tag);
  }
  return tagDiv;
};
