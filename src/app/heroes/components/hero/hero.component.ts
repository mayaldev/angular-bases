import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  nombre:String = 'ironman';
  edad:number = 45;

  get capitalizedName():string{
    return this.nombre.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.nombre} - ${this.edad}`
  }

  changeHero():void{
    this.nombre = 'spiderman';
  }

  changeEdad():void{
    this.edad = 15;
  }

  reset():void{
    this.nombre = 'ironman';
    this.edad = 45;
  }
}
