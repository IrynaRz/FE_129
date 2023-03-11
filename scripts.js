function openImg(imgs) {
    // Get the expanded image
    let expandImg = document.getElementById("expandedImg");
    // Get the image text
    let imgText = document.getElementById("imgtext");

    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;

    expandImg.parentElement.style.display = "block";
}
  