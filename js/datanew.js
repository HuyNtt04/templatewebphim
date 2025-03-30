const carouselGroups = [
    {
        title: `<span class='text-2xl font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent'>Phim Hàn Quốc mới</span>`,
      data: [
        { title: "Kẻ Thù Dấu Yêu", image: "images/thumbnail1.jpg" },
        { title: "Lưỡi Dao Hiểm Hóc",image: "images/thumbnail1.jpg"  },
        { title: "Quán Ăn Của Ngài Heo", image: "images/thumbnail1.jpg"  },
        { title: "Anh Em Đại Bàng", image: "images/thumbnail1.jpg"  },
        { title: "Trái Tim Bị Chôn Vùi",image: "images/thumbnail1.jpg"  }
      ]
    },
    {
        title: `<span class='text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent'>Phim Trung Quốc mới</span>`,
      data: [
        { title: "Hoàng Tước", image: "images/thumbnail1.jpg"  },
        { title: "Khi Chim Nhạn Trở Về", image: "images/thumbnail1.jpg"  },
        { title: "Niệm Vô Song", image: "images/thumbnail1.jpg"  },
        { title: "Gió Xuân Chậm Lựa Tình",image: "images/thumbnail1.jpg"  },
        { title: "Bạn Trai Nội Trợ Của Tôi", image: "images/thumbnail1.jpg"  }
      ]
    },
    {
        title: `<span class='text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent'>Phim Anime mới</span>`,
      data: [
        { title: "Tôi Rời Tổ Đội Hạng A...", image: "images/thumbnail1.jpg"  },
        { title: "Tôi Thăng Cấp Một Mình", image: "images/thumbnail1.jpg"  },
        { title: "Sakamoto Days", image: "images/thumbnail1.jpg"  },
        { title: "Blue Box", image: "images/thumbnail1.jpg"  },
        { title: "Hồi Sinh Thế Giới", image: "images/thumbnail1.jpg"  }
      ]
    }
  ];

  const carouselContainer = document.getElementById("carouselContainer");

  carouselGroups.forEach((group, groupIndex) => {
    const groupWrapper = document.createElement("div");
    groupWrapper.className = "relative";

    groupWrapper.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold" >${group.title}</h2>
        <a href="#" class="text-sm text-white/70 hover:text-white transition-all">Xem toàn bộ <i class='fas fa-chevron-right text-xs'></i></a>
      </div>
      <div class="overflow-hidden">
        <div id="carouselTrack-${groupIndex}" class="flex transition-transform duration-500 ease-in-out"></div>
      </div>
      <button id="prevBtn-${groupIndex}" class="absolute left-0 top-[40%] bg-white text-black hover:bg-white/90 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition hidden">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="nextBtn-${groupIndex}" class="absolute right-0 top-[40%] bg-white text-black hover:bg-white/90 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition">
        <i class="fas fa-chevron-right"></i>
      </button>
    `;

    carouselContainer.appendChild(groupWrapper);

    const track = groupWrapper.querySelector(`#carouselTrack-${groupIndex}`);
    const prevBtn = groupWrapper.querySelector(`#prevBtn-${groupIndex}`);
    const nextBtn = groupWrapper.querySelector(`#nextBtn-${groupIndex}`);

    let currentIndex = 0;
    const visibleItems = 3;

    function renderCarouselItems() {
      track.innerHTML = "";
      group.data.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "min-w-[33.3333%] px-2 box-border";
        itemDiv.innerHTML = `
          <div class="bg-[#1d1d1d] rounded-xl overflow-hidden shadow-lg">
            <img src="${item.image}" alt="${item.title}" class="w-full h-[170px] object-cover" />
            <div class="p-2">
              <h3 class="text-lg font-semibold">${item.title}</h3>
            </div>
          </div>
        `;
        track.appendChild(itemDiv);
      });
      updateButtons();
      updateSlide();
    }

    function updateSlide() {
      const offset = -(currentIndex * (100 / visibleItems));
      track.style.transform = `translateX(${offset}%)`;
    }

    function updateButtons() {
      prevBtn.classList.toggle("hidden", currentIndex === 0);
      nextBtn.classList.toggle("hidden", currentIndex >= group.data.length - visibleItems);
    }

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
        updateButtons();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < group.data.length - visibleItems) {
        currentIndex++;
        updateSlide();
        updateButtons();
      }
    });

    renderCarouselItems();
  });