fetch('/api/v1/projects/all')
  .then(response => response.json())
  .then((data) => {
      //console.log(data.data.projects);
      
      data.data.projects.forEach(el => {
          //console.log(el);
          renderProjectCards(el);
      })
});

$('#filter-all').click(() => {
    console.log('vanilla');
    fetch('/api/v1/projects/all')
    .then(response => response.json())
    .then((data) => {
        //console.log(data.data.projects);
        $('#project-section').fadeOut(100, () => {
            $('#project-section').hide()
            $('#project-section').empty()
            data.data.projects.forEach(el => {
                //console.log(el);
                renderProjectCards(el);
            })
            $('#project-section').fadeIn(100)
        })
    });
})

$('#filter-vanilla').click(() => {
    //console.log('vanilla');
    fetch('/api/v1/projects/javascript')
    .then(response => response.json())
    .then((data) => {
        //console.log(data.data.projects);
        $('#project-section').fadeOut(100, () => {
            $('#project-section').hide()
            $('#project-section').empty()
            data.data.projects.forEach(el => {
                //console.log(el);
                renderProjectCards(el);
            })
            $('#project-section').fadeIn(100)
        })
        

    });
})

$('#filter-node').click(() => {
    //console.log('vanilla');
    fetch('/api/v1/projects/node')
    .then(response => response.json())
    .then((data) => {
        //console.log(data.data.projects);
        $('#project-section').fadeOut(100, () => {
            $('#project-section').hide()
            $('#project-section').empty()
            data.data.projects.forEach(el => {
                //console.log(el);
                renderProjectCards(el);
            })
            $('#project-section').fadeIn(100)
        })
    });
})

$('#filter-html').click(() => {
    //console.log('vanilla');
    fetch('/api/v1/projects/html_css')
    .then(response => response.json())
    .then((data) => {
        console.log(data.data.projects);
        $('#project-section').fadeOut(100, () => {
            $('#project-section').hide()
            $('#project-section').empty()
            data.data.projects.forEach(el => {
                //console.log(el);
                renderProjectCards(el);
            })
            $('#project-section').fadeIn(100)
        })
    });
})

function renderProjectCards(project) {
    let item = `<div class="card ${project.slug}"><figure class="display-box"><img src="${project.heroimg}" alt="card-img"></figure><div class="info-box"><h3><strong>${project.name}</strong></h3><p class="hover-hide">${project.description}</p></div><a class="button repo" href="${project.repo}">Git Repository</a><a class="button" href="${project.url}">View Project</a></div>`

    $('#project-section').append(item).hide().fadeIn(100);
        
}







