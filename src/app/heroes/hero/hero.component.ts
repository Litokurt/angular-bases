import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public age: number = 37;
  public name:string = 'Kurt';


  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'Raul Rojas'.toUpperCase();
    // throw 'Metodo no implementado';
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.age = 37;
    this.name = 'Kurt';
    document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML = ('<h1>Desde angular</h1>');
    })
  }

}
