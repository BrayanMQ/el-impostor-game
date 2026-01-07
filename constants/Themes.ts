export const PREDEFINED_THEMES = {
    Sports: ['Soccer', 'Basketball', 'Tennis', 'Swimming', 'Baseball', 'Volleyball', 'Golf', 'Boxing', 'Skiing', 'Surfing'],
    Animals: ['Lion', 'Elephant', 'Shark', 'Eagle', 'Penguin', 'Snake', 'Dog', 'Cat', 'Dolphin', 'Tiger'],
    Food: ['Pizza', 'Sushi', 'Burger', 'Pasta', 'Tacos', 'Steak', 'Ice Cream', 'Chocolate', 'Salad', 'Soup'],
    Movies: ['Star Wars', 'Titanic', 'Avatar', 'Inception', 'The Matrix', 'Jurassic Park', 'The Godfather', 'Frozen', 'Jaws', 'Rocky'],
    Countries: ['France', 'Japan', 'Brazil', 'USA', 'Italy', 'India', 'China', 'Australia', 'Egypt', 'Mexico'],
};

export type ThemeKey = keyof typeof PREDEFINED_THEMES | 'Custom';
