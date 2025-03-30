
  // HERO DATA
  const heroSlides = [
    {
      title: "Sông Dài Sáng Tỏ",
      description: "Mickey, một nữ cảnh sát tuần tra ở Philadelphia...",
      image: "images/thumbnail2.jpg"
    },
    {
      title: "Bóng Tối Tái Sinh",
      description: "Một thám tử tỉnh dậy trong thế giới bị thao túng...",
      image: "images/thumbnail3.jpg"
    }
  ];

  // SUB CAROUSEL DATA
  const subCarouselData = [
    {
      category: "Phim Mới",
      movies: [
        { title: "Phim A", image: "images/TOP1.webp" },
        { title: "Phim B", image: "images/TOP1.webp" },
        { title: "Phim C", image: "images/TOP1.webp" },
        { title: "Phim D", image: "images/TOP1.webp" },
        { title: "Phim E", image: "images/TOP1.webp" },
        { title: "Phim A", image: "images/TOP1.webp" },
        { title: "Phim B", image: "images/TOP1.webp" },
        { title: "Phim C", image: "images/TOP1.webp" },
        { title: "Phim D", image: "images/TOP1.webp" },
        { title: "Phim E", image: "images/TOP1.webp" },
        { title: "Phim A", image: "images/TOP1.webp" },
        { title: "Phim B", image: "images/TOP1.webp" },
        { title: "Phim C", image: "images/TOP1.webp" },
        { title: "Phim D", image: "images/TOP1.webp" },
        { title: "Phim E", image: "images/TOP1.webp" },
      ]
    },
    {
      category: "Xem Nhiều Nhất",
      movies: [
        { title: "Phim X", image: "images/TOP1.webp" },
        { title: "Phim Y", image: "images/TOP1.webp" },
        { title: "Phim Z", image: "images/TOP1.webp" },
        { title: "Phim K", image: "images/TOP1.webp" },
        { title: "Phim M", image: "images/TOP1.webp" },
        { title: "Phim A", image: "images/TOP1.webp" },
        { title: "Phim B", image: "images/TOP1.webp" },
        { title: "Phim C", image: "images/TOP1.webp" },
        { title: "Phim D", image: "images/TOP1.webp" },
        { title: "Phim E", image: "images/TOP1.webp" },
      ]
    }
  ];

  // HERO RENDER
  let currentHeroIndex = 0;

  function renderHeroSlide() {
    const hero = heroSlides[currentHeroIndex];
    const container = document.getElementById("heroContainer");
    container.innerHTML = `
      <div class="absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out">
        <div class="flex flex-col md:flex-row h-full">
  <div class="w-full md:w-[45%] p-6 md:p-10 flex flex-col justify-center z-10">
            <h2 class="text-3xl md:text-4xl font-bold mb-3">${hero.title}</h2>
            <p class="text-white/80 text-sm max-w-xl mb-5">${hero.description}</p>
            <button class="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-5 py-2 rounded-full text-sm flex items-center gap-2 w-fit">
              <i class="fa fa-play"></i> Xem ngay
            </button>
          </div>
         <div class="w-full md:w-[55%] relative rounded-r-2xl overflow-hidden">
    <img src="${hero.image}" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
  </div>
</div>

        </div>
      </div>
    `;
    setTimeout(() => {
      container.querySelector('div').classList.add("opacity-100");
    }, 10);
  }

  setInterval(() => {
    currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length;
    renderHeroSlide();
  }, 6000);

  renderHeroSlide();

  // SUB CAROUSEL RENDER
  const subContainer = document.getElementById("subCarousels");

  subCarouselData.forEach((group, groupIndex) => {
    const wrapper = document.createElement("div");
    wrapper.className = "relative";

    wrapper.innerHTML = `
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-xl font-bold">${group.category}</h3>
        <div class="flex gap-2">
          <button id="prev-${groupIndex}" class="text-white bg-white/10 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20">
            <i class="fa fa-chevron-left text-sm"></i>
          </button>
          <button id="next-${groupIndex}" class="text-white bg-white/10 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20">
            <i class="fa fa-chevron-right text-sm"></i>
          </button>
        </div>
      </div>
      <div class="overflow-hidden">
        <div id="track-${groupIndex}" class="flex transition-transform duration-500 ease-in-out"></div>
      </div>
    `;

    const track = wrapper.querySelector(`#track-${groupIndex}`);
    group.movies.forEach(movie => {
      const div = document.createElement("div");
      div.className = "min-w-[160px] mr-3 group cursor-pointer";
      div.innerHTML = `
        <div class="rounded overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
          <img src="${movie.image}" alt="${movie.title}" class="w-full h-[240px] object-cover rounded" />
          <div class="text-sm mt-1 text-white/80">${movie.title}</div>
        </div>
      `;
      track.appendChild(div);
    });

    subContainer.appendChild(wrapper);

    // SLIDE Logic
    let index = 0;
    const visible = 5;
    const prevBtn = wrapper.querySelector(`#prev-${groupIndex}`);
    const nextBtn = wrapper.querySelector(`#next-${groupIndex}`);

    function updateSlide() {
      const offset = -(index * (100 / visible));
      track.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.onclick = () => {
      if (index > 0) index--;
      updateSlide();
    };
    nextBtn.onclick = () => {
      if (index < group.movies.length - visible) index++;
      updateSlide();
    };

    updateSlide();
  });

