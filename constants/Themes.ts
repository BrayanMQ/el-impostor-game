import { Language } from "./i18n";

export type ThemeKey =
    | 'Sports'
    | 'Animals'
    | 'Food'
    | 'Movies'
    | 'Countries'
    | 'Custom';

export const PREDEFINED_THEMES: Record<Exclude<ThemeKey, 'Custom'>, true> = {
    Sports: true,
    Animals: true,
    Food: true,
    Movies: true,
    Countries: true,
};

export const THEME_WORDS_BY_LANG: Record<Language, Record<Exclude<ThemeKey, 'Custom'>, string[]>> = {
    es: {
        Sports: ['Fútbol', 'Baloncesto', 'Tenis', 'Natación', 'Béisbol', 'Voleibol', 'Golf', 'Boxeo', 'Esquí', 'Surf', 'Rugby', 'Ciclismo', 'Karate', 'Esgrima', 'Remo', 'Arquería', 'Hockey', 'Patinaje', 'Yoga', 'Judo'],
        Animals: ['León', 'Elefante', 'Tiburón', 'Águila', 'Pingüino', 'Serpiente', 'Perro', 'Gato', 'Delfín', 'Tigre', 'Jirafa', 'Cebra', 'Canguro', 'Koala', 'Lobo', 'Zorro', 'Búho', 'Pulpo', 'Tortuga', 'Camaleón'],
        Food: ['Pizza', 'Sushi', 'Hamburguesa', 'Pasta', 'Tacos', 'Filete', 'Helado', 'Chocolate', 'Ensalada', 'Sopa', 'Paella', 'Ramen', 'Burrito', 'Croissant', 'Hot Dog', 'Lasaña', 'Ceviche', 'Sándwich', 'Brownie', 'Pancake'],
        Movies: ['Star Wars', 'Titanic', 'Avatar', 'Inception', 'Matrix', 'Parque Jurásico', 'El Padrino', 'Frozen', 'Tiburón', 'Rocky', 'El Rey León', 'Pulp Fiction', 'Toy Story', 'Gladiator', 'Joker', 'Parasite', 'Alien', 'Batman', 'Spiderman', 'Interstellar'],
        Countries: ['Francia', 'Japón', 'Brasil', 'EE.UU.', 'Italia', 'India', 'China', 'Australia', 'Egipto', 'México', 'España', 'Canadá', 'Argentina', 'Rusia', 'Alemania', 'Tailandia', 'Grecia', 'Turquía', 'Marruecos', 'Portugal'],
    },
    en: {
        Sports: ['Soccer', 'Basketball', 'Tennis', 'Swimming', 'Baseball', 'Volleyball', 'Golf', 'Boxing', 'Skiing', 'Surfing', 'Rugby', 'Cycling', 'Karate', 'Fencing', 'Rowing', 'Archery', 'Hockey', 'Skating', 'Yoga', 'Judo'],
        Animals: ['Lion', 'Elephant', 'Shark', 'Eagle', 'Penguin', 'Snake', 'Dog', 'Cat', 'Dolphin', 'Tiger', 'Giraffe', 'Zebra', 'Kangaroo', 'Koala', 'Wolf', 'Fox', 'Owl', 'Octopus', 'Turtle', 'Chameleon'],
        Food: ['Pizza', 'Sushi', 'Burger', 'Pasta', 'Tacos', 'Steak', 'Ice Cream', 'Chocolate', 'Salad', 'Soup', 'Paella', 'Ramen', 'Burrito', 'Croissant', 'Hot Dog', 'Lasagna', 'Ceviche', 'Sandwich', 'Brownie', 'Pancake'],
        Movies: ['Star Wars', 'Titanic', 'Avatar', 'Inception', 'The Matrix', 'Jurassic Park', 'The Godfather', 'Frozen', 'Jaws', 'Rocky', 'The Lion King', 'Pulp Fiction', 'Toy Story', 'Gladiator', 'Joker', 'Parasite', 'Alien', 'Batman', 'Spiderman', 'Interstellar'],
        Countries: ['France', 'Japan', 'Brazil', 'USA', 'Italy', 'India', 'China', 'Australia', 'Egypt', 'Mexico', 'Spain', 'Canada', 'Argentina', 'Russia', 'Germany', 'Thailand', 'Greece', 'Turkey', 'Morocco', 'Portugal'],
    },
    fr: {
        Sports: ['Football', 'Basket-ball', 'Tennis', 'Natation', 'Base-ball', 'Volley-ball', 'Golf', 'Boxe', 'Ski', 'Surf', 'Rugby', 'Cyclisme', 'Karaté', 'Escrime', 'Aviron', 'Tir à l\'arc', 'Hockey', 'Patinage', 'Yoga', 'Judo'],
        Animals: ['Lion', 'Éléphant', 'Requin', 'Aigle', 'Manchot', 'Serpent', 'Chien', 'Chat', 'Dauphin', 'Tigre', 'Girafe', 'Zèbre', 'Kangourou', 'Koala', 'Loup', 'Renard', 'Hibou', 'Poulpe', 'Tortue', 'Caméléon'],
        Food: ['Pizza', 'Sushi', 'Burger', 'Pâtes', 'Tacos', 'Steak', 'Glace', 'Chocolat', 'Salade', 'Soupe', 'Paella', 'Ramen', 'Burrito', 'Croissant', 'Hot-dog', 'Lasagne', 'Ceviche', 'Sandwich', 'Brownie', 'Pancake'],
        Movies: ['Star Wars', 'Titanic', 'Avatar', 'Inception', 'Matrix', 'Jurassic Park', 'Le Parrain', 'La Reine des Neiges', 'Les Dents de la Mer', 'Rocky', 'Le Roi Lion', 'Pulp Fiction', 'Toy Story', 'Gladiator', 'Joker', 'Parasite', 'Alien', 'Batman', 'Spiderman', 'Interstellar'],
        Countries: ['France', 'Japon', 'Brésil', 'États-Unis', 'Italie', 'Inde', 'Chine', 'Australie', 'Égypte', 'Mexique', 'Espagne', 'Canada', 'Argentine', 'Russie', 'Allemagne', 'Thaïlande', 'Grèce', 'Turquie', 'Maroc', 'Portugal'],
    },
    de: {
        Sports: ['Fußball', 'Basketball', 'Tennis', 'Schwimmen', 'Baseball', 'Volleyball', 'Golf', 'Boxen', 'Skifahren', 'Surfen', 'Rugby', 'Radfahren', 'Karate', 'Fechten', 'Rudern', 'Bogenschießen', 'Hockey', 'Eislaufen', 'Yoga', 'Judo'],
        Animals: ['Löwe', 'Elefant', 'Hai', 'Adler', 'Pinguin', 'Schlange', 'Hund', 'Katze', 'Delfin', 'Tiger', 'Giraffe', 'Zebra', 'Känguru', 'Koala', 'Wolf', 'Fuchs', 'Eule', 'Oktopus', 'Schildkröte', 'Chamäleon'],
        Food: ['Pizza', 'Sushi', 'Burger', 'Pasta', 'Tacos', 'Steak', 'Eis', 'Schokolade', 'Salat', 'Suppe', 'Paella', 'Ramen', 'Burrito', 'Croissant', 'Hotdog', 'Lasagne', 'Ceviche', 'Sandwich', 'Brownie', 'Pfannkuchen'],
        Movies: ['Star Wars', 'Titanic', 'Avatar', 'Inception', 'Matrix', 'Jurassic Park', 'Der Pate', 'Die Eiskönigin', 'Der Weiße Hai', 'Rocky', 'Der König der Löwen', 'Pulp Fiction', 'Toy Story', 'Gladiator', 'Joker', 'Parasite', 'Alien', 'Batman', 'Spiderman', 'Interstellar'],
        Countries: ['Frankreich', 'Japan', 'Brasilien', 'USA', 'Italien', 'Indien', 'China', 'Australien', 'Ägypten', 'Mexiko', 'Spanien', 'Kanada', 'Argentinien', 'Russland', 'Deutschland', 'Thailand', 'Griechenland', 'Türkei', 'Marokko', 'Portugal'],
    },
    it: {
        Sports: ['Calcio', 'Basket', 'Tennis', 'Nuoto', 'Baseball', 'Pallavolo', 'Golf', 'Pugilato', 'Sci', 'Surf', 'Rugby', 'Ciclismo', 'Karate', 'Scherma', 'Canottaggio', 'Tiro con l\'arco', 'Hockey', 'Pattinaggio', 'Yoga', 'Judo'],
        Animals: ['Leone', 'Elefante', 'Squalo', 'Aquila', 'Pinguino', 'Serpente', 'Cane', 'Gatto', 'Delfino', 'Tigre', 'Giraffa', 'Zebra', 'Canguro', 'Koala', 'Lupo', 'Volpe', 'Gufo', 'Polpo', 'Tartaruga', 'Camaleonte'],
        Food: ['Pizza', 'Sushi', 'Burger', 'Pasta', 'Tacos', 'Bistecca', 'Gelato', 'Cioccolato', 'Insalata', 'Zuppa', 'Paella', 'Ramen', 'Burrito', 'Croissant', 'Hot dog', 'Lasagna', 'Ceviche', 'Sandwich', 'Brownie', 'Pancake'],
        Movies: ['Star Wars', 'Titanic', 'Avatar', 'Inception', 'Matrix', 'Jurassic Park', 'Il Padrino', 'Frozen', 'Lo Squalo', 'Rocky', 'Il Re Leone', 'Pulp Fiction', 'Toy Story', 'Il Gladiatore', 'Joker', 'Parasite', 'Alien', 'Batman', 'Spiderman', 'Interstellar'],
        Countries: ['Francia', 'Giappone', 'Brasile', 'USA', 'Italia', 'India', 'Cina', 'Australia', 'Egitto', 'Messico', 'Spagna', 'Canada', 'Argentina', 'Rusia', 'Alemania', 'Thailandia', 'Grecia', 'Turquía', 'Marocco', 'Portogallo'],
    }
};