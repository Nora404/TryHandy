import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu/menu.component';
import { MapComponent } from '../map/map/map.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MenuComponent, MapComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements AfterViewChecked {

  test: string = "START";
  test2: string[] = [
    'Aktion 1',
    'Aktion 2',
    'Aktion 3',
    'Aktion 4',
    'Aktion 5',
  ];

  setMenu(position: string) {
    const container = document.getElementById('container');

    if (container) {
      container.classList.remove('containerRechts', 'containerLinks');
      container.classList.add(position);

      localStorage.setItem('menu', position);
    }
  }

  ngAfterViewChecked(): void {
    // const menu = localStorage.getItem('menu') || 'containerLinks';
    // const container = document.getElementById('container');

    // if (container) {
    //   this.setMenu(menu);
    // }
  }

  handleNord() {
    this.test = 'NORD';
    console.log('NORD')
  }
  handleWest() {
    this.test = 'WEST';
    console.log('WEST')
  }
  handleSud() {
    this.test = 'SUD';
    console.log('SUD')
  }
  handleOst() {
    this.test = 'OST';
    console.log('OST')
  }

  handleAction(action: string, btn: string) {
    this.test = action.toUpperCase() + btn;
  }

}
