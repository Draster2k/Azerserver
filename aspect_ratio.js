function setAspectRatio(){
    var container = document.getElementById('container');
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var aspectRatio = screenWidth / screenHeight;

    if (aspectRatio >= 16/9){
        container.style.paddingBottom = (9 / 16 * 100) + '%'
    } else{
        container.style.paddingBottom = (16 / 9 * 100) + '%'
    }
}

window.onload = setAspectRatio;
window.onresize = setAspectRatio;