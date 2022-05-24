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

export type Proficiencies = {
  strength: boolean;
  dexterity: boolean;
  constitution: boolean;
  wisdom: boolean;
  intelligence: boolean;
  charisma: boolean;
  acrobatics: boolean;
  animalHandling: boolean;
  arcana: boolean;
  athlethics: boolean;
  deception: boolean;
  history: boolean;
  insight: boolean;
  intimidation: boolean;
  investigation: boolean;
  medicine: boolean;
  nature: boolean;
  perception: boolean;
  performance: boolean;
  persuasion: boolean;
  religion: boolean;
  sleightOfHand: boolean;
  stealth: boolean;
  survival: boolean;
};

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
