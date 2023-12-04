import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  bag: boolean = false;
  book: boolean = false;
  chara: boolean = true;
  craft: boolean = false;
  quest: boolean = false;
  setting: boolean = false;
  skill: boolean = false;
  stats: boolean = false;
  world: boolean = false;

  setActiveMenu(menu: string) {
    this.bag = menu === 'bag';
    this.book = menu === 'book';
    this.chara = menu === 'chara';
    this.craft = menu === 'craft';
    this.quest = menu === 'quest';
    this.setting = menu === 'setting';
    this.skill = menu === 'skill';
    this.stats = menu === 'stats';
    this.world = menu === 'world';
  }
}
