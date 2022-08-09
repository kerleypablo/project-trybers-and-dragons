export default abstract class Race {
  constructor( 
    private _name: string,
    private _dexterity: number,
  ) {
  }

  public get name() {
    return this._name;
  }

  public get dexterity() {
    return this._dexterity;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}