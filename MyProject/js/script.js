// Sample movie data
const movies = {
    recommended: [
        { title: "Phim 1", img: "https://static.nutscdn.com/vimg/300-0/65a6510d906cedd18416aaaef3ae6340.jpg", meta: "2024" },
        { title: "Phim 2", img: "https://static.nutscdn.com/vimg/300-0/65a6510d906cedd18416aaaef3ae6340.jpg", meta: "HD" },
        { title: "Phim 3", img: "https://static.nutscdn.com/vimg/300-0/65a6510d906cedd18416aaaef3ae6340.jpg", meta: "T18" },
        { title: "Phim 4", img: "https://static.nutscdn.com/vimg/300-0/65a6510d906cedd18416aaaef3ae6340.jpg", meta: "2023" },
        { title: "Phim 5", img: "https://static.nutscdn.com/vimg/300-0/65a6510d906cedd18416aaaef3ae6340.jpg", meta: "HD" },
    ],
    top10: [
        { title: "Top 1", img: "https://static.nutscdn.com/vimg/300-0/65a6510d906cedd18416aaaef3ae6340.jpg", meta: "IMDb 8.5" },
        { title: "Top 2", img: "https://static.nutscdn.com/vimg/300-0/65a6510d906cedd18416aaaef3ae6340.jpg", meta: "IMDb 8.0" },
        { title: "Top 3", img: "https://static.nutscdn.com/vimg/300-0/65a6510d906cedd18416aaaef3ae6340.jpg", meta: "IMDb 7.8" },
    ]
};

// Render movie cards
function renderMovies() {
    const recommendedList = document.getElementById("recommended");
    const top10List = document.getElementById("top-10");

    movies.recommended.forEach(movie => {
        recommendedList.innerHTML += `
            <div class="movie-card">
                <img src="${movie.img}" alt="${movie.title}">
                <div class="movie-info">
                    <h4 class="movie-title">${movie.title}</h4>
                    <div class="movie-meta">${movie.meta}</div>
                </div>
            </div>
        `;
    });

    movies.top10.forEach((movie, index) => {
        top10List.innerHTML += `
            <div class="movie-card">
                <div class="movie-index">${index + 1}</div>
                <img src="${movie.img}" alt="${movie.title}">
                <div class="movie-info">
                    <h4 class="movie-title">${movie.title}</h4>
                    <div class="movie-meta">${movie.meta}</div>
                </div>
            </div>
        `;
    });
}

// Carousel navigation
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        const list = document.getElementById(target);
        const scrollAmount = btn.classList.contains("prev-btn") ? -400 : 400;
        list.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

// Initialize
renderMovies();