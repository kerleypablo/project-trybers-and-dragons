import Race from './Race';

export default abstract class Elf extends Race {
  public _maxLifePoints: number;
  private static _elfRacesInstances = 0;

  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public get createdRacesInstances(): number {
    Elf._elfRacesInstances += 1;
    return this._elfRacesInstances;
  }
}