
// Movie data
const movies = [
    {
        id: 1,
        title: 'What If...Mùa 2',
        description: 'Khám phá những khoảnh khắc then chốt từ Vũ trụ Điện ảnh Marvel và đảo ngược chúng, dẫn dắt khán giả vào những vùng đất chưa được khám phá.',
        thumbnail: 'images/thumbnail2.jpg',
        heroImage: 'images/thumbnail2.jpg',
        imdb: '8.1',
        year: '2024',
        season: 'Phần 1',
        episode: 'Tập 10',
        genres: ['Chính Kịch', 'Gay Cấn', 'Tình Cảm', 'Gia Đình', 'Bí Ẩn']
    },
    {
        id: 2,
        title: 'Trò chơi con mực',
        description: 'Hàng trăm người chơi kẹt tiền chấp nhận một lời mời kỳ lạ thi đấu trong các trò chơi trẻ con. Đón chờ họ là một giải thưởng hấp dẫn – và những rủi ro chết người.',
        thumbnail: 'images/thumbnail1.jpg',
        heroImage: 'images/thumbnail1.jpg',
        imdb: '8.0',
        year: '2021',
        season: 'Phần 2',
        episode: 'Tập 7',
        genres: ['Chính Kịch', 'Hành Động', 'Khoa Học', 'Bí Ẩn', 'Phiêu Lưu']
    },
    {
        id: 3,
        title: 'Interstellar',
        description: '?????',
        thumbnail: 'images/thumbnail3.jpg',
        heroImage: 'images/thumbnail3.jpg',
        imdb: '8.0',
        year: '2021',
        season: 'Phần 2',
        episode: 'Tập 7',
        genres: ['Chính Kịch', 'Hành Động', 'Khoa Học', 'Bí Ẩn', 'Phiêu Lưu']
    },
    {
        id: 4,
        title: 'Starguardian of the Galaxy vol.3',
        description: '?????',
        thumbnail: 'images/thumbnail4.jpeg',
        heroImage: 'images/thumbnail4.jpeg',
        imdb: '8.0',
        year: '2021',
        season: 'Phần 2',
        episode: 'Tập 7',
        genres: ['Chính Kịch', 'Hành Động', 'Khoa Học', 'Bí Ẩn', 'Phiêu Lưu']
    }
    
    
];

// Initialize variables
let currentMovieIndex = 0;
const thumbnailContainer = document.getElementById('thumbnailContainer');
const heroSection = document.querySelector('.hero-section');
const movieTitle = document.querySelector('.movie-title');
const movieDescription = document.querySelector('.movie-description');
const movieMeta = document.querySelector('.movie-meta');
const movieGenres = document.querySelector('.movie-genres');
const autoRotateInterval = 5000; // 3 giây (bạn có thể thay đổi)

function startAutoRotate() {
    setInterval(() => {
        // Tăng index, nếu đến cuối thì quay lại đầu
        currentMovieIndex = (currentMovieIndex + 1) % movies.length;
        updateMovie(currentMovieIndex);
        
        // Cập nhật trạng thái hover (active) của thumbnail
        updateThumbnailsHover(currentMovieIndex);
    }, autoRotateInterval);
}
function updateThumbnailsHover(index) {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}



// Update movie metadata
function updateMovieMeta(movie) {
    movieMeta.innerHTML = `
        <span class="badge bg-warning">IMDb ${movie.imdb}</span>
        <span class="badge bg-secondary">${movie.year}</span>
        <span class="badge bg-info">${movie.season}</span>
        <span class="badge bg-primary">${movie.episode}</span>
    `;
}

// Update movie genres
function updateMovieGenres(movie) {
    movieGenres.innerHTML = movie.genres
        .map(genre => `<span class="genre">${genre}</span>`)
        .join('');
}

// Create thumbnails
function createThumbnails() {
    movies.forEach((movie, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = movie.thumbnail;
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.alt = movie.title;

        // Sự kiện click để chọn thumbnail
        thumbnail.addEventListener('click', () => updateMovie(index));

        // Thêm vào container
        thumbnailContainer.appendChild(thumbnail);
    });
}

function updateThumbnailsHover(index) {
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Update movie content
function updateMovie(index) {
    currentMovieIndex = index;
    const movie = movies[index];
    
    // Update hero section
    heroSection.style.backgroundImage = `url(${movie.heroImage})`;
    movieTitle.textContent = movie.title;
    movieDescription.textContent = movie.description;
    
    // Update metadata and genres
    updateMovieMeta(movie);
    updateMovieGenres(movie);
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Initialize the page
function init() {
    createThumbnails();  // Tạo thumbnail
    updateMovie(0);      // Hiển thị phim đầu tiên
    startAutoRotate();   // Bắt đầu auto slide
}
document.addEventListener('DOMContentLoaded', init);

// Remove auto-rotation to keep slides fixed until clicked

// Movie Data for each section
const movieSections = {
    'new-releases': [
        { id: 1, title: 'Moana 2', image: 'images/poster1.jpeg', rating: '8.5', year: '2024' },
        { id: 2, title: 'Đấu Phá Thương Khung 3:Trừ Ác', image: 'images/poster2.webp', rating: '7.9', year: '2024' },
        { id: 3, title: 'Ác mộng tình yêu', image: 'images/poster3.webp', rating: '7.9', year: '2024' },
        { id: 4, title: 'Trở về', image: 'images/poster4.webp', rating: '7.9', year: '2024' },
        { id: 5, title: 'Trò chơi con mực', image: 'images/poster5.webp', rating: '7.9', year: '2024' },
        { id: 6, title: 'Deadpool & Wolverine', image: 'images/poster6.webp', rating: '7.9', year: '2024' },
        { id: 7, title: 'Exhuma:Quật Mộ Trùng Ma', image: 'images/poster7.webp', rating: '7.9', year: '2024' },
        // Add more movies...
    ],
    'top-10': [
        { id: 1, title: 'Trò Chơi Con Mực', image: 'images/poster5.webp', rating: '9.0', year: '2024', rank: 1 },
        { id: 2, title: 'KRAVEN:Thợ săn thủ lĩnh', image: 'images/best1.webp', rating: '8.8', year: '2024', rank: 2 },
        { id: 3, title: 'ARCANE', image: 'images/best2.webp', rating: '9.8', year: '2024', rank: 3 },
        { id: 4, title: 'Venom:Kèo cuối', image: 'images/besr3.webp', rating: '7.8', year: '2024', rank: 4 },
        { id: 5, title: 'Monoa 2', image: 'images/best4.webp', rating: '8.8', year: '2024', rank: 5 },
        // Add more movies...
    ],
    // Add data for other sections...
};

// Initialize all carousels
function initializeCarousels() {
    const sections = document.querySelectorAll('.movie-section');
    
    sections.forEach(section => {
        const movieList = section.querySelector('.movie-list');
        const sectionId = movieList.dataset.section;
        const prevBtn = section.querySelector('.prev-btn');
        const nextBtn = section.querySelector('.next-btn');
        let currentPosition = 0;
        
        // Populate movies
        if (movieSections[sectionId]) {
            movieSections[sectionId].forEach(movie => {
                const movieCard = createMovieCard(movie, sectionId === 'top-10');
                movieList.appendChild(movieCard);
            });
        }
        
        // Navigation handlers
        nextBtn.addEventListener('click', () => {
            const maxScroll = movieList.scrollWidth - movieList.clientWidth;
            currentPosition = Math.min(currentPosition + 600, maxScroll);
            movieList.style.transform = `translateX(-${currentPosition}px)`;
        });
        
        prevBtn.addEventListener('click', () => {
            currentPosition = Math.max(currentPosition - 600, 0);
            movieList.style.transform = `translateX(-${currentPosition}px)`;
        });
    });
}

// Create movie card element
function createMovieCard(movie, showRank = false) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    card.innerHTML = `
        ${showRank ? `<div class="rank-number">${movie.rank}</div>` : ''}
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-info">
            <h4 class="movie-title">${movie.title}</h4>
            <div class="movie-meta">
                <span class="rating">IMDb ${movie.rating}</span>
                <span class="year">${movie.year}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        // Update hero section when clicking on a movie card
        updateMovie(movie);
    });
    
    return card;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousels();
});

// Add touch support for mobile devices
function addTouchSupport() {
    const carousels = document.querySelectorAll('.movie-carousel');
carousels.forEach(carousel => {
        let startX;
        let scrollLeft;
        let isDown;
        
        carousel.addEventListener('mousedown', e => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        
        carousel.addEventListener('mouseleave', () => {
            isDown = false;
        });
        
        carousel.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        carousel.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    });
}


// Add touch support
addTouchSupport();
