const circle = document.querySelectorAll('.circle');

for (let i = 0; i < circle.length; i++) {
  const el = circle[i];
  el.onclick = (e) => {
    //find the active circle
    const activeCircle = document.querySelectorAll('.circle.active')[0];
    if (activeCircle) {
      activeCircle.classList.remove("active");
    }
    const currentCircle = e.target;
    if (currentCircle !== activeCircle) {
      currentCircle.classList.add("active");
    }
  }
}

const submit = document.querySelectorAll('.btn');

for (let i = 0; i < submit.length; i++) {
    const el = submit[i];
    el.onclick = () => {
      for (let j = 0; j < submit.length; j++) {
        const color = submit[j] === el ? '#fff' : 'hsl(25, 97%, 53%)';
        submit[j].style.backgroundColor = color;
        submit[j].style.color = 'hsl(25, 97%, 53%)';
      }
    }
  }
