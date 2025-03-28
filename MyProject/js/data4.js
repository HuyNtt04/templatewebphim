        // Sample movie data
        const movies = [
            {
                title: "Umjolo: Yêu Vô Phương Cứu",
                image: "images/poster1s.webp",
                quality: "P.ĐB"
            },
            {
                title: "Tình Yêu Bất Diệt",
                image: "images/poster6.webp",
                quality: "P.ĐB"
            },
            {
                title: "Umjolo: Yêu Vô Phương Cứu",
                image: "images/poster1s.webp",
                quality: "P.ĐB"
            },
            {
                title: "Tình Yêu Bất Diệt",
                image: "images/poster6.webp",
                quality: "P.ĐB"
            },
            {
                title: "Umjolo: Yêu Vô Phương Cứu",
                image: "images/poster1s.webp",
                quality: "P.ĐB"
            },
            {
                title: "Tình Yêu Bất Diệt",
                image: "images/poster6.webp",
                quality: "P.ĐB"
            },
            {
                title: "Umjolo: Yêu Vô Phương Cứu",
                image: "images/poster1s.webp",
                quality: "P.ĐB"
            },
            {
                title: "Tình Yêu Bất Diệt",
                image: "images/poster6.webp",
                quality: "P.ĐB"
            },
            {
                title: "Umjolo: Yêu Vô Phương Cứu",
                image: "images/poster1s.webp",
                quality: "P.ĐB"
            },
            {
                title: "Tình Yêu Bất Diệt",
                image: "images/poster6.webp",
                quality: "P.ĐB"
            },
            {
                title: "Umjolo: Yêu Vô Phương Cứu",
                image: "images/poster1s.webp",
                quality: "P.ĐB"
            },
            {
                title: "Tình Yêu Bất Diệt",
                image: "images/poster6.webp",
                quality: "P.ĐB"
            },
            {
                title: "Umjolo: Yêu Vô Phương Cứu",
                image: "images/poster1s.webp",
                quality: "P.ĐB"
            },
            {
                title: "Tình Yêu Bất Diệt",
                image: "images/poster6.webp",
                quality: "P.ĐB"
            },
            {
                title: "Umjolo: Yêu Vô Phương Cứu",
                image: "images/poster1s.webp",
                quality: "P.ĐB"
            },
            {
                title: "Tình Yêu Bất Diệt",
                image: "images/poster6.webp",
                quality: "P.ĐB"
            },
            {
                title: "Umjolo: Yêu Vô Phương Cứu",
                image: "images/poster1s.webp",
                quality: "P.ĐB"
            },
            {
                title: "Tình Yêu Bất Diệt",
                image: "images/poster6.webp",
                quality: "P.ĐB"
            },
        ];

        // Function to create movie cards
        function createMovieGrid() {
            const grid = document.querySelector('.movie-grid');
            
            movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                
                // Create image element with error handling
                const img = new Image();
                img.src = movie.image;
                img.alt = movie.title;
                
                // Error handling for images
                img.onerror = function() {
                    console.log(`Failed to load image for: ${movie.title}`);
                    // Fallback to a default image
                    this.src = './assets/images/default-poster.jpg';
                };
                
                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}" onerror="this.src='./assets/images/default-poster.jpg'">
                    <div class="quality-badge">${movie.quality}</div>
                    <div class="movie-title">${movie.title}</div>
                `;
                
                grid.appendChild(movieCard);
            });
        }

        // Initialize the grid
        document.addEventListener('DOMContentLoaded', () => {
            createMovieGrid();
        });