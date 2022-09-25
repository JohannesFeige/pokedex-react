export type Pokemon = {
    id: number;
    name: string;
    types: string[];
    imageSrc: string;
};

export type PokedexResult = {
    pokedex: Pokemon[];
    next: string | null;
    previous: string | null;
};
