const images = [
    { name:"1080p_HBK_autumn-morning_GI.jpg" , category: "nature" },
    { name: "1080p_HBK_autumn-morning_GI.jpg", category: "nature" },
    { name: "Zugpsitze_mountain.jpg", category: "forest" },
    { name: "Zugpsitze_mountain.jpg", category: "forest" },
    { name: "images (9).jpg", category: "bird" },
  ];
  
  const gallery = document.getElementById("gallery");
  const filter = document.getElementById("filter");
  const sort = document.getElementById("sort");
  const fullscreen = document.getElementById("fullscreen");
  const fullscreenImg = document.getElementById("fullscreen-img");
  
  function renderGallery() {
    let filteredImages = images;
  
    if (filter.value !== "all") {
      filteredImages = filteredImages.filter(img => img.category === filter.value);
    }
  
    if (sort.value === "asc") {
      filteredImages.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filteredImages.sort((a, b) => b.name.localeCompare(a.name));
    }
  
    gallery.innerHTML = "";
    filteredImages.forEach(img => {
      const imageElement = document.createElement("img");
      imageElement.src = `images/${img.name}`;
      imageElement.alt = img.name;
      imageElement.onclick = () => openFullscreen(img.name);
      gallery.appendChild(imageElement);
    });
  }
  
  function openFullscreen(name) {
    fullscreen.style.display = "flex";
    fullscreenImg.src = `images/${name}`;
  }
  
  fullscreen.onclick = () => {
    fullscreen.style.display = "none";
  };
  
  filter.onchange = renderGallery;
  sort.onchange = renderGallery;
  
  renderGallery();
  