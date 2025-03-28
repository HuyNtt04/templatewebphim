
const userData = {
    id: 1234,
    displayName: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
    bio: "Người yêu phim hành động và phiêu lưu.",
    avatarUrl: "/api/placeholder/120/120",
    coverUrl: "/api/placeholder/1200/300"
};
const favoriteMovies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        year: 2019,
        poster: "/api/placeholder/180/270",
        isFavorite: true,
        genre: "Hành động"
    },
    {
        id: 2,
        title: "Spider-Man: No Way Home",
        year: 2021,
        poster: "/api/placeholder/180/270",
        isFavorite: true,
        genre: "Hành động"
    },
    {
        id: 3,
        title: "Joker",
        year: 2019,
        poster: "/api/placeholder/180/270",
        isFavorite: true,
        genre: "Tâm lý"
    },
    {
        id: 4,
        title: "Parasite",
        year: 2019,
        poster: "/api/placeholder/180/270",
        isFavorite: true,
        genre: "Tâm lý"
    },
    {
        id: 5,
        title: "Dune",
        year: 2021,
        poster: "/api/placeholder/180/270",
        isFavorite: true,
        genre: "Viễn tưởng"
    },
    {
        id: 6,
        title: "The Batman",
        year: 2022,
        poster: "/api/placeholder/180/270",
        isFavorite: true,
        genre: "Hành động"
    },
    {
        id: 7,
        title: "Everything Everywhere All at Once",
        year: 2022,
        poster: "/api/placeholder/180/270",
        isFavorite: true,
        genre: "Hành động"
    },
    {
        id: 8,
        title: "Top Gun: Maverick",
        year: 2022,
        poster: "/api/placeholder/180/270",
        isFavorite: true,
        genre: "Hành động"
    }
];

const historyMovies = [
    {
        id: 9,
        title: "The Matrix",
        year: 1999,
        poster: "/api/placeholder/180/270",
        progress: 75,
        lastWatched: "2024-02-27T10:30:00",
        episode: null, // null for movies
        genre: "Hành động"
    },
    {
        id: 10,
        title: "Inception",
        year: 2010,
        poster: "/api/placeholder/180/270",
        progress: 45,
        lastWatched: "2024-02-26T21:15:00",
        episode: null,
        genre: "Khoa học viễn tưởng"
    },
    {
        id: 11,
        title: "Breaking Bad",
        year: 2008,
        poster: "/api/placeholder/180/270",
        progress: 80,
        lastWatched: "2024-02-25T19:00:00",
        episode: "S02E05",
        genre: "Tội phạm"
    },
    {
        id: 12,
        title: "Stranger Things",
        year: 2016,
        poster: "/api/placeholder/180/270",
        progress: 30,
        lastWatched: "2024-02-24T22:45:00",
        episode: "S04E03",
        genre: "Viễn tưởng"
    },
    {
        id: 13,
        title: "The Shawshank Redemption",
        year: 1994,
        poster: "/api/placeholder/180/270",
        progress: 95,
        lastWatched: "2024-02-23T18:30:00",
        episode: null,
        genre: "Tâm lý"
    },
    {
        id: 14,
        title: "Game of Thrones",
        year: 2011,
        poster: "/api/placeholder/180/270",
        progress: 60,
        lastWatched: "2024-02-22T20:10:00",
        episode: "S06E08",
        genre: "Phiêu lưu"
    },