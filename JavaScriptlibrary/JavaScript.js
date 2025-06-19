function update(previewPic) {
  console.log("Sự kiện đã được kích hoạt");
  console.log("Alt: ", previewPic.alt);
  console.log("Src: ", previewPic.src);
  
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
