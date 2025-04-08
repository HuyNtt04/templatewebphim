const movieDataS3 = {
    korean: [
        { title: "Trò Chơi Con Mực", image: "images/thumbnail1.jpg", rating: "PD.7", lt: "LT.7" },
        { title: "Giám Định Viên Ân Xá Lee Han Shin", image: "images/desktop1.jpg", rating: "PD.12" },
        { title: "Em Xin Lỗi, Được Chưa?", image: "images/desktop3.webp", rating: "PD.4" },
        { title: "Chọn Làm Người Một Nhà", image: "images/thumbnail1.jpg", rating: "PD.16", lt: "TM.16" },
        { title: "Nên Duyên Vợ Chồng", image: "images/thumbnail1.jpg", rating: "PD.10" }
    ],
    chinese: [
        { title: "Tuổi Trẻ Vút Bay", image: "images/thumbnail1.jpg", rating: "PD.22" },
        { title: "Mật Mã Thành Minh Thương Hà Đồ", image: "images/thumbnail1.jpg", rating: "PD.22" },
        { title: "Biên Sơ Tình Yêu", image: "images/thumbnail1.jpg", rating: "PD.23" },
        { title: "Niết Bàn Thiên Kim", image: "images/thumbnail1.jpg", rating: "PD.22" },
        { title: "Thao Thiết Ký", image: "images/thumbnail1.jpg", rating: "PD.36" }
    ],
    thai: [
        { title: "Người Tình Yêu Dấu Của Tôi", image: "images/thumbnail1.jpg", rating: "PD.19" },
        { title: "Bắt Cóc", image: "images/thumbnail1.jpg", rating: "PD.12" },
        { title: "Cho Đến Khi Ta Yêu Nhau", image: "images/thumbnail1.jpg", rating: "PD.32" },
        { title: "Đảo Ngược Thời Gian Vì Em", image: "images/thumbnail1.jpg", rating: "PD.8" },
        { title: "Thiện Sứ Tội Lỗi", image: "images/thumbnail1.jpg", rating: "PD.21" }
    ]
};

function createMovieElementS3(movie) {
    return `
        <div class="movie-item-s3">
            <div class="movie-rating-s3">${movie.rating}</div>
            ${movie.lt ? `<div class="movie-rating-s3 lt">${movie.lt}</div>` : ''}
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info-s3">
                <h3 class="movie-title-s3">${movie.title}</h3>
            </div>
        </div>
    `;
}

function initializeSliderS3(containerId, movies) {
    const container = document.getElementById(containerId);
    container.innerHTML = movies.map(createMovieElementS3).join('');
    
    const row = container.parentElement;
    const prevBtn = row.querySelector('.prev-btn-s3');
    const nextBtn = row.querySelector('.next-btn-s3');
    
    nextBtn.addEventListener('click', () => {
        const scrollAmount = container.offsetWidth * 0.8;
        container.scrollLeft += scrollAmount;
    });
    
    prevBtn.addEventListener('click', () => {
        const scrollAmount = container.offsetWidth * 0.8;
        container.scrollLeft -= scrollAmount;
    });
}

// Initialize all sliders
document.addEventListener('DOMContentLoaded', () => {
    initializeSliderS3('korean-movies-s3', movieDataS3.korean);
    initializeSliderS3('chinese-movies-s3', movieDataS3.chinese);
    initializeSliderS3('thai-movies-s3', movieDataS3.thai);
});