
//Carousel Crop
function cropImage(){
  
  var imgs = document.getElementsByClassName("imgCrop");
  for(var i = 0 ; i < imgs.length ; i++ ){
   var l = imgs[i].height
   var w = imgs[i].width
   var cX1 = 0;
   var cX2 = w;
   var cY1 = 0;
   var cY2 = l;
    if(l > w){
      var xtra = l - w;
      cY1 = (xtra/2);
      cY2 = l - (xtra/2);
    }else if(w > l){
      var xtra = w - l;
      cX1 = (xtra/2);
      cX2 = w - (xtra/2);
    }

    imgs[i].style.clip = "rect("+cX1+"px,"+cX2 +"px,"+cY2+"px,"+cY1+"px)" ;
    imgs[i].style.position = "absolute";
  };
}


//EventListeners
window.addEventListener("load", cropImage())