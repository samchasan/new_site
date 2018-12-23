let ids = [];
let keys;

function setup(){
  noCanvas()
  keys = Object.keys(photos);
  keys.forEach(function(key){
    const photoGroup = photos[key]
    const box = createDiv()
    box.id(key)
    innerContent(photoGroup, key)
  })


  ids.forEach(function(id){
    const hash = '#'+id
    $(document).ready(function() {
      hideLarge(id)
    })
    $(hash).mouseover(function() {
      showLarge(id)
    // console.log(id)
    });
    $(hash).mouseout(function() {
      hideLarge(id)
    });
  })
}

function innerContent(photos,key){
  photos.forEach(function(file,i){
    // console.log(file)
  if (file.includes("100px")){
    // console.log(file)
    const name = file.substring(0,file.length-10)
    const div = document.createElement("div")
    const id = `${name}`
    const img = document.createElement("img")
    img.setAttribute("src","/static/" + key + "/" + file)
    $(img).attr('id',id)

    // $(key).append(name)
    const objTo = document.getElementById(key)
    console.log(objTo)

    objTo.appendChild(img)
    ids.push(id)
    // console.log(id)
  } else if(file.includes("350px")){
    // console.log(file)
    const name = file.substring(0,file.length-6)
    const img = createImg("/static/" + key + "/" + file)
    const id = `${name}`
    img.id(id)
    const hash = '#'+id
    $(hash).parent().css({position: 'relative'});
    $(hash).css({top: 0, left: 410, position:'absolute'});
  }
  })
}

function showLarge(id){
  keys.forEach(function(key){
    const array = photos[key]
    array.forEach(function(file,i){
    if(file.includes(id) && file.includes("350px")){
      const name = file.substring(0,file.length-6);
      const hash = '#'+name;
      // console.log(hash)
      $(`${hash}`).show();
    }
  })
})
}


function hideLarge(id){
  keys.forEach(function(key){
    const array = photos[key]
    array.forEach(function(file,i){
    if(file.includes(id) && file.includes("350px")){
      const name = file.substring(0,file.length-6);
      const hash = '#'+name;
      // console.log(hash)
      $(`${hash}`).hide();
    }
  })
})
}
