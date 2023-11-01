import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'Ironman';
  public age:number = 362;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Spiderman';
    //throw 'No implement';
  }

  changeAge():void{
    this.age = 969;
  }

  resetData():void{
    this.name = 'Ironman';
    this.age = 362;

    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde angular</h1>'
    })
  }
}
