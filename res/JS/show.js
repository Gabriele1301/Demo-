function show(id,imgId) {
    console.log('show avviato')
    let element=document.getElementById(id);
    // img
    if (imgId) {
        routateImg(imgId)
    }
    // show list
    if (element.style.display=='none'||element.style.display=='') {
        element.style.display='block'

    }else{
        element.style.display='none';
    }
}
function routateImg(imgId) {
    let img=document.getElementById(imgId);
    if (img.style.transform == 'rotate(180deg)') {
        img.style.transform='rotate(0deg)';
    }else{
        img.style.transform='rotate(180deg)';
    }
}