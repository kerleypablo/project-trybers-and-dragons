import Race from './Race';

export default abstract class Dwarf extends Race {
  public _maxLifePoints: number;
  private static _dwarfRacesInstances = 0;

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
    Dwarf._dwarfRacesInstances += 1;
    return this.createdRacesInstances;
  }
}