//Jquery
$document.ready(function(){
    if(screen.width < 992){
      $("img:odd").detach().
     }
  });
//Poppers
function assignPopper(){
  var 
}  

//Carousel Crop
function cropImage(){
  var imgs = document.getElementsByClassName("imgCrop");
  for(var i = 0 ; i < imgs.length ; i++ ){
   var l = img[i].height
   var w = img[i].widht
   cX1 = 0;
   cX2 = w;
   cY1 = 0;
   cY2 = l;
    if(l > w){
      var xtra = l - w;
      cY1 = (xtra/2);
      cY2 = l - (xtra/2);
    }else if(w > l){
      var xtra = w - l;
      cX1 = (xtra/2);
      cX2 = w - (xtra/2);
    }

    img[i].styles.clip = "rect("+cX1+"px,"+cX2 +"px,"+cY2+"px,"+cY1+"px)"
  };

}


//EventListeners
window.addEventListener("load", cropImage)