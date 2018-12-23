let brianIDs = []
let brian = obj.brian

function setup(){
  // console.log(obj.brian)
  const keys = Object.keys(photos)
  brian.forEach(function(file, i){
    let thumb = file.includes("100px")
    if (thumb){
      // console.log(file)
      const name = file.substring(0,file.length-10)
      const img = createImg("/static/brian/" + file)
      const id = `${name}`
      img.id(id)
      brianIDs.push(id)
    } else if(file.includes("350px")){
      console.log(file)
      const name = file.substring(0,file.length-6)
      const img = createImg("/static/brian/" + file)
      const id = `${name}`
      img.id(id)
      const hash = '#'+id
      $(hash).parent().css({position: 'relative'});
      $(hash).css({top: 200, left: 200, position:'absolute'});
    }
  })
  brianIDs.forEach(function(id){
    const hash = '#'+id
    $(hash).mouseover(function() {
    showLarge(id)
    });
    $(hash).mouseout(function() {
    hideLarge(id)
    });
  })
}

function showLarge(id){
  brian.forEach(function(file){
    if(file.includes(id) && file.includes("350px")){
      const name = file.substring(0,file.length-6);
      const hash = '#'+name;
      console.log(hash)
      $(`${hash}`).show();
    }
  })
}


function hideLarge(id){
  brian.forEach(function(file){
    if(file.includes(id) && file.includes("350px")){
      const name = file.substring(0,file.length-6);
      const hash = '#'+name;
      // console.log(hash)
      $(`${hash}`).hide();
    }
  })
}
