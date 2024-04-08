const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=> {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');

    }
  });
});

const hiddenAbout = document.querySelectorAll('.about-container ')
hiddenAbout.forEach((el)=> observer.observe(el));

const project =new IntersectionObserver((entries)=>{
  entries.forEach((entry)=> {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('showproj');
    } else {
      entry.target.classList.remove('showproj');

    }
  });
});
const hiddenProject = document.querySelectorAll('.project-contanier ')
hiddenProject.forEach((el)=> observer.observe(el));


