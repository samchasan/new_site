let ids = [];
let keys;

function setup(){
  keys = Object.keys(photos);
  keys.forEach(function(key){
    const array = photos[key]
    array.forEach(function(file,i){
      // console.log(file)

    let thumb = file.includes("100px")
    if (thumb){
      // console.log(file)
      const name = file.substring(0,file.length-10)
      const img = createImg("/static/" + key + "/" + file)
      const id = `${name}`
      img.id(id)
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
      $(hash).css({top: 200, left: 200, position:'absolute'});
    }
  })
})
  ids.forEach(function(id){
    const hash = '#'+id
    $(hash).mouseover(function() {
    showLarge(id)
    console.log(id)
    });
    $(hash).mouseout(function() {
    hideLarge(id)
    });
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
