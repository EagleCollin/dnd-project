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

export type Proficiencies = [
  acrobatics: false,
  animalHandling: false,
  arcana: false,
  athlethics: false,
  deception: false,
  history: false,
  insight: false,
  intimidation: false,
  investigation: false,
  medicine: false,
  nature: false,
  perception: false,
  religion: false,
  sleightOfHand: false,
  stealth: false,
  survival: false
];

export type OtherProficiencies = string[];

export type Character = {
  name: string;
  class: string;
  level: number;
  race: string;
  background: string;
  attributes: Attributes;
  alignment: string;
  proficiencies: Proficiencies;
  otherProficiencies: OtherProficiencies;
};
