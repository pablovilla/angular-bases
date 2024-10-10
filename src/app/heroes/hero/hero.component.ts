import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `Se llama ${this.name} y su edad es ${this.age}`
  }

  changeHero():void {
    this.name = 'spiderman';
  }
  changeAge():void {
    this.age = 25;
  }
    
}
