fetch('/api/v1/projects/all')
  .then(response => response.json())
  .then((data) => {
      console.log(data.data.projects);
      
      data.data.projects.forEach(el => {
          console.log(el);
          renderProjectCards(el);
      })
});

function renderProjectCards(project) {
    let item = `<div class="card ${project.slug}"><figure class="display-box"><img src="${project.heroimg}" alt="card-img"></figure><div class="info-box"><h3><strong>${project.name}</strong></h3><p class="hover-hide">${project.description}</p></div><a class="button repo" href="${project.repo}">Git Repository</a><a class="button" href="${project.url}">View Project</a></div>`

    $('#project-section').append(item);
}
