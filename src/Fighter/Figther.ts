import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Figther extends SimpleFighter {
  defense: number;
  energy?: Energy;
  attack(enemy: Figther): void;
  special?(enemy: Figther): void;
  levelUp(): void;
}