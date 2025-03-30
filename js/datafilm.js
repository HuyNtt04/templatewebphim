let currentIndex = 0;
const visibleItems = 8;

function updateCarousel() {
  const track = document.getElementById("carouselTrack");
  const offset = -(currentIndex * (100 / visibleItems));
  track.style.transform = `translateX(${offset}%)`;

  document.getElementById("prevBtn").classList.toggle("hidden", currentIndex === 0);
  document.getElementById("nextBtn").classList.toggle("hidden", currentIndex >= movies.length - visibleItems);
}

function nextSlide() {
  if (currentIndex < movies.length - visibleItems) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}
const movies = [
    { title: "Shin Movie", img: "https://via.placeholder.com/150x220", tag: "L.Tiếng" },
    { title: "Bí Mật Không Thể Nói", img: "https://via.placeholder.com/150x220", tag: "P.Đề" },
    { title: "Shin Movie", img: "https://via.placeholder.com/150x220", tag: "L.Tiếng" },
    { title: "Bí Mật Không Thể Nói", img: "https://via.placeholder.com/150x220", tag: "P.Đề" },
    { title: "Shin Movie", img: "https://via.placeholder.com/150x220", tag: "L.Tiếng" },
    { title: "Bí Mật Không Thể Nói", img: "https://via.placeholder.com/150x220", tag: "P.Đề" },
    { title: "Shin Movie", img: "https://via.placeholder.com/150x220", tag: "L.Tiếng" },
    { title: "Bí Mật Không Thể Nói", img: "https://via.placeholder.com/150x220", tag: "P.Đề" },
    { title: "Shin Movie", img: "https://via.placeholder.com/150x220", tag: "L.Tiếng" },
    { title: "Bí Mật Không Thể Nói", img: "https://via.placeholder.com/150x220", tag: "P.Đề" },
    { title: "Shin Movie", img: "https://via.placeholder.com/150x220", tag: "L.Tiếng" },
    { title: "Bí Mật Không Thể Nói", img: "https://via.placeholder.com/150x220", tag: "P.Đề" },
    { title: "Shin Movie", img: "https://via.placeholder.com/150x220", tag: "L.Tiếng" },
    { title: "Bí Mật Không Thể Nói", img: "https://via.placeholder.com/150x220", tag: "P.Đề" },
    { title: "Shin Movie", img: "https://via.placeholder.com/150x220", tag: "L.Tiếng" },
    { title: "Bí Mật Không Thể Nói", img: "https://via.placeholder.com/150x220", tag: "P.Đề" },
    { title: "Shin Movie", img: "https://via.placeholder.com/150x220", tag: "L.Tiếng" },
    { title: "Bí Mật Không Thể Nói", img: "https://via.placeholder.com/150x220", tag: "P.Đề" },
    // ... thêm 10–12 phim để test
  ];
  
  const track = document.getElementById("carouselTrack");
  movies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "min-w-[12.5%] px-1 box-border"; // 100/8 = 12.5%
    div.innerHTML = `
      <div class="bg-[#1d1d1d] rounded-xl overflow-hidden shadow-lg">
        <img src="${movie.img}" class="w-full h-[220px] object-cover rounded-t-xl" />
        <div class="p-2 text-sm">
          ${movie.tag ? `<span class="inline-block bg-blue-500 text-white text-xs px-2 py-0.5 rounded mb-1">${movie.tag}</span>` : ""}
          <h3 class="mt-1 font-semibold leading-tight">${movie.title}</h3>
        </div>
      </div>
    `;
    track.appendChild(div);
  });
  
  updateCarousel();