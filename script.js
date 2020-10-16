
let pictures = document.querySelectorAll('.picdrag')
let containers = document.querySelectorAll('.modtager')
let counter = 0;


containers.forEach(container => {
  container.addEventListener("touchend", function (ev) {
    ev.preventDefault();
  })
container.addEventListener('drop', rightPlace, function (ev)  {
    ev.preventDefault();
  })
})

pictures.forEach(img => {
  // console.log(img)
  img.addEventListener("touchstart", function (ev) {
    console.log(ev)
    dropElement = ev.target;
  })
});

function rightPlace (event) {
  let first= event.dataTransfer.getData('URL')
  let second = first.split('/')
  let rightimg = second.pop()
  if (event.target.dataset.img== rightimg) {
    event.target.appendChild(dropElement);
  done();
  }
  
}

function done() {
  counter++;
  if (counter > 8) {
    var gif = document.querySelector('#gifimage')
    gif.style.display = 'block';
    // containers.style.border = none;
    window.setTimeout(function () {
      gif.style.display = 'none';
    }, 5000)
  }
}


