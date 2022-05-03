export type Attributes = {
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  constitution: number;
};

export type Skills = {
  acrobatics: number;
  animalHandling: number;
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleightOfHand: number;
  stealth: number;
  survival: number;
};

export type Character = {
  name: string;
  class: string;
  level: number;
  race: string;
  background: string;
  attributes: Attributes;
  alignment: string;
  proficiencies: string[];
};
