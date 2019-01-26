tools = document.querySelectorAll(".tools-item");
subtitle = document.querySelector('.tools-explainations h4')

textToDisplay = (event) => {
  console.log(event.target)
  subtitle.innerHTML = datas[event.target.id]
  if (event.type === 'mouseout') { subtitle.innerHTML = datas['init'] };
}

tools.forEach((tool) => {
  tool.addEventListener("mouseover", textToDisplay)
  tool.addEventListener("mouseout", textToDisplay)
});


datas = {
  'init': 'Here, you could find tools to customize your racquet easily.',
  'database':'Find your raquet model among a large racquets database',
  'me-tool': 'Calculate the exact mass and balance of your own racquets',
  'customizator': 'Customize racquets calculating in real-time the modified parameters (mass, balance, swingweight)'
}
