import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _WarriorArchetypeInstances = 0;
  
  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._WarriorArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._WarriorArchetypeInstances;
  }
}