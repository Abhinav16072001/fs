var hideon=function(event){
  var w=window.innerWidth;
  if (w<768) {
    $(".collapse").collapse('hide');
  }
};

document.querySelector("button").addEventListener("blur",hideon);