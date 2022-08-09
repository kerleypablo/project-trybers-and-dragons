import { EnergyType } from '../Energy';

export default abstract class Archetype {
  _name: string;
  _special: number;
  _cost: number;

  constructor(name: string) {
    this._special = 0;
    this._cost = 0;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}