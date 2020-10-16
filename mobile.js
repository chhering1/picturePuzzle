
let pictures = document.querySelectorAll('.picdrag')
let containers = document.querySelectorAll('.modtager')
let counter = 0;
let again = document.querySelector('.again')

containers.forEach(container => {
  container.addEventListener("dragover", function (event) {
    event.preventDefault();
  })
  
    container.addEventListener('drop',   function (event)  {
    event.preventDefault();
    counter ++;
  let first= event.dataTransfer.getData('URL')
  let second = first.split('/')
  let rightimg = second.pop()
  console.log(rightimg)
  event.target.appendChild(dropElement);
  if (event.target.dataset.img == rightimg && counter > 8){
    console.log('right place')
    // containers.style.border = 'none';
    var gif = document.querySelector('#gifimage')
    gif.style.display = 'block';
    window.setTimeout(function () {
      console.log(containers)
    gif.style.display = 'none';
    container.style.border = '0px';
  }, 5000)
  } 
   else if (event.target.dataset.img !== rightimg && counter > 8){
    again.style.display='block'
  }
    })
})

pictures.forEach(img => {
  img.addEventListener("dragstart", function (ev) {
    dropElement = ev.target;
  })
});






