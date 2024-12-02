abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
        }
    }

    getFavorites(): string[] {
        return this.favorites.sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(item: string): void {
        this.favorites.unshift(item);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

const movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("Inception");
movieManager.addFavorite("The Matrix");
movieManager.addFavorite("Interstellar");
movieManager.addFavorite("The Matrix"); 

const bookManager = new BooksFavoriteManager();
bookManager.addFavorite("1984");
bookManager.addFavorite("Brave New World");
bookManager.addFavorite("Fahrenheit 451");

console.log("Filmes Favoritos (ordem alfabética):");
console.log(movieManager.getFavorites());

console.log("Livros Favoritos (ordem de adição):");
console.log(bookManager.getFavorites());