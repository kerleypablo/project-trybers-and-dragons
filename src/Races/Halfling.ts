import Race from './Race';

export default class Halfling extends Race {
  public _maxLifePoints: number;
  private static _HalflingRacesInstances = 0;

  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Halfling._HalflingRacesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._HalflingRacesInstances;
  }
}