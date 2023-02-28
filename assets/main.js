window.arenaCallback = () => {

const content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);

const filteredData = data.filter(item => item.description.includes('fear'));

filteredData.forEach(item => {
  const block = document.createElement('div');
  block.innerHTML = item.description;
  content.appendChild(block);
});

}
