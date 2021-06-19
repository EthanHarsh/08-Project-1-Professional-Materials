fetch('/api/v1/projects/all')
  .then(response => response.json())
  .then((data) => {
      console.log(data.data.projects);
      
      data.data.projects.forEach(el => {
          console.log(el);
      })
  });