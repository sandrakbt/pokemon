interface Pokemon {
  id: number;
  order: number;
  name: string;
  abilities: AbiShort[];
  forms: FormShort[];
  types: TypeShort[];
  weight: number;
  sprites: Sprite;
}

interface Sprite {
  front_default: string;
  other: {
    'official-artwork': {
      front_default: string;
    };
  }
}

type AbiShort = {
  ability: Reference;
  is_hidden: boolean;
  slot: number;
}

type TypeShort = {
  type: Reference;
  slot: number;
}

type PokeShort = Reference

type FormShort = Reference

interface Reference {
  name: string;
  url: string;
}
