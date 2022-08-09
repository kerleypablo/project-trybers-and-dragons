import Race from './Race';

export default class Elf extends Race {
  public _maxLifePoints: number;
  private static _elfRacesInstances = 0;

  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._elfRacesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._elfRacesInstances;
  }
}