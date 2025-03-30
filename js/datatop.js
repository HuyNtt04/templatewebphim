const top10 = [
  {
    titleVN: "Kẻ Thù Dấu Yêu",
    titleEN: "My Dearest Nemesis",
    season: "Phần 1",
    episode: "Tập 12",
    tag1: "PĐ. 12",
    tag2: "TM. 12",
    image: "images/TOP1.webp"
  },
  {
    titleVN: "Khi Chim Nhạn Trở Về",
    titleEN: "The Glory",
    season: "Phần 1",
    episode: "Tập 19",
    tag1: "PĐ. 19",
    tag2: "TM. 15",
    image: "images/TOP2.webp"
  },
  {
    titleVN: "Trái Tim Bị Chôn Vùi",
    titleEN: "Buried Hearts",
    season: "Phần 1",
    episode: "Tập 10",
    tag1: "PĐ. 10",
    tag2: "TM. 5",
    image: "images/TOP4.webp"
  },
  {
    titleVN: "Tự Cẩm",
    titleEN: "Si Jin",
    season: "Phần 1",
    episode: "Tập 40",
    tag1: "PĐ. 40",
    tag2: "TM. 40",
    image: "images/TOP5.webp"
  },
  {
    titleVN: "Suýt, Quốc Vương Đang Ngủ Đông",
    titleEN: "Ski Into Love",
    season: "Phần 1",
    episode: "Tập 23",
    tag1: "PĐ. 23",
    tag2: "TM. 23",
    image: "images/TOP3.webp"
  },
  {
    titleVN: "Tình Yêu Của AI",
    titleEN: "AI Love Story",
    season: "Phần 2",
    episode: "Tập 8",
    tag1: "PĐ. 8",
    tag2: "TM. 8",
    image: "https://via.placeholder.com/300x400?text=Phim+6"
  },
  {
    titleVN: "Cô Gái Sao Hỏa",
    titleEN: "Mars Girl",
    season: "Phần 1",
    episode: "Tập 1",
    tag1: "PĐ. 1",
    tag2: "TM. 1",
    image: "https://via.placeholder.com/300x400?text=Phim+7"
  },
  {
    titleVN: "Cuộc Hẹn Cùng Bóng Tối",
    titleEN: "Shadow Date",
    season: "Phần 1",
    episode: "Tập 5",
    tag1: "PĐ. 5",
    tag2: "TM. 5",
    image: "https://via.placeholder.com/300x400?text=Phim+8"
  },
  {
    titleVN: "Bầu Trời Ảo Mộng",
    titleEN: "Sky Dreamers",
    season: "Phần 3",
    episode: "Tập 15",
    tag1: "PĐ. 15",
    tag2: "TM. 15",
    image: "https://via.placeholder.com/300x400?text=Phim+9"
  },
  {
    titleVN: "Trở Về Quá Khứ",
    titleEN: "Back to the Past",
    season: "Phần 1",
    episode: "Tập 10",
    tag1: "PĐ. 10",
    tag2: "TM. 10",
    image: "https://via.placeholder.com/300x400?text=Phim+10"
  }
];

let currentTopIndex = 0;
const visibleTopItems = 5;
const top10Track = document.getElementById("top10Track");

function renderTop10() {
  top10Track.innerHTML = "";
  top10.forEach((movie, i) => {
    const div = document.createElement("div");
    div.className = "min-w-[20%] px-2 box-border";

    div.innerHTML = `
      <div class="relative group">
  <span class="absolute top-2 left-2 z-10 text-[3.5rem] font-bold text-yellow-400 drop-shadow-[0_0_6px_rgba(0,0,0,0.7)] font-[anton] leading-none">
    ${i + 1}
</span>

       <img src="${movie.image}"
  class="w-full h-[380px] object-cover rounded-2xl rotate-[1deg] z-0 relative
         transition-all duration-300 ease-in-out
         group-hover:scale-90
         group-hover:filter group-hover:sepia group-hover:hue-rotate-10 group-hover:brightness-110
         group-hover:ring-4 group-hover:ring-yellow-400/60"
/>



      </div>
      <div class="mt-2">
        <h3 class="text-base font-semibold">${movie.titleVN}</h3>
        <p class="text-sm text-white/60 italic">${movie.titleEN}</p>
        <div class="text-xs mt-1 text-white/80">${movie.season} • ${movie.episode}</div>
        <div class="mt-1 flex gap-2 text-xs">
          <span class="bg-gray-700 px-2 py-0.5 rounded">${movie.tag1}</span>
          <span class="bg-green-600 px-2 py-0.5 rounded">${movie.tag2}</span>
        </div>
      </div>
    `;
    top10Track.appendChild(div);
  });
  updateTop10();
}

function updateTop10() {
  const offset = -(currentTopIndex * (100 / visibleTopItems));
  top10Track.style.transform = `translateX(${offset}%)`;

  document.getElementById("prevTop10").classList.toggle("hidden", currentTopIndex === 0);
  document.getElementById("nextTop10").classList.toggle("hidden", currentTopIndex >= top10.length - visibleTopItems);
}

function nextTop10() {
  if (currentTopIndex < top10.length - visibleTopItems) {
    currentTopIndex++;
    updateTop10();
  }
}

function prevTop10() {
  if (currentTopIndex > 0) {
    currentTopIndex--;
    updateTop10();
  }
}

renderTop10();