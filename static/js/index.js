const options = {
  threshold: 0.1,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("img-animation");
  });
};

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll(".card");
targets.forEach((img) => observer.observe(img));
