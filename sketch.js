let ids = [];
let allKeys = [];
let keys;
const largeSize = "350px";
const smallSize = "100px";
let titles;

function setup(){
  noCanvas()
  keys = Object.keys(photos);
  keys.forEach(function(key){
    allKeys.push(key)
    const photoGroup = photos[key]
    const box = createDiv()
    box.id(key)
    innerContent(photoGroup, key)
    buildList(key)
    addListFunction(key)
    let hash = '#'+key
    $(`${hash}`).hide();
  })

  showAndHideLargePhotos()

}



function addListFunction(key){
// select clicked LI element
  let hash_li = '#'+key+'_li'
  $(hash_li).click(function() {
    $(hash_li).css({
          'background-color': 'red',
          'color': 'white',
      });
// select associated div and show
  let hash = '#'+key
  $(`${hash}`).show();

// deselect/hide other li options and dives
    let arr_lis = allKeys.filter(value => value !== key);
    arr_lis.forEach(function(key){
      let hash_li = '#'+key+'_li'
      $(hash_li).css({
            'background-color': 'orange',
            'color': 'black',
        });
// select other divs and hide        
      let hash= '#'+key
      $(`${hash}`).hide();
    })
})
}

function showAndHideLargePhotos(){
    ids.forEach(function(id){
      const hash = '#'+id
      $(document).ready( () => {
        hideLarge(id)
      })
      $(hash).mouseover( () => {
        showLarge(id)
      // console.log(id)
      });
      $(hash).mouseout( () => {
        hideLarge(id)
      });
    })
  }


function buildList(id){
  const list = document.getElementById('titles')
  const element = document.createElement("LI");
  const id2 = id+'_li'
  element.innerHTML = id
  element.setAttribute("id", id2);
  list.appendChild(element);
  // console.log(x)
}

function innerContent(photos,key){
  photos.forEach(function(file,i){
    // console.log(file)
  if (file.includes(smallSize)){
    // console.log(file)
    const name = file.substring(0,file.length-10)
    const div = document.createElement("div")
    const id = `${name}`
    const img = document.createElement("img")
    img.setAttribute("src","/static/" + key + "/" + file)
    $(img).attr('id',id)
    const objTo = document.getElementById(key)
    // console.log(objTo)
    objTo.appendChild(img)
    ids.push(id)
    // console.log(id)
  } else if(file.includes(largeSize)){
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
