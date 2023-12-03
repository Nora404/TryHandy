import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
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
    'Aktion 6',
    'Aktion 7',
    'Aktion 8',
    'Aktion 9',
    'Aktion 10',
    'Aktion 11',
  ];

  setTheme(theme: string) {
    if (document) {
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(theme);

      localStorage.setItem('theme', theme);
    }
  }

  setMenu(position: string) {
    const container = document.getElementById('container');

    if (container) {
      container.classList.remove('containerRechts', 'containerLinks');
      container.classList.add(position);

      localStorage.setItem('menu', position);
    }
  }

  ngAfterViewChecked(): void {
    const theme = localStorage.getItem('theme') || 'light-theme';
    const menu = localStorage.getItem('menu') || 'containerLinks';
    const container = document.getElementById('container');

    if (document) {
      this.setTheme(theme);
    }
    if (container) {
      this.setMenu(menu);
    }
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

  handleAction(action: string) {
    this.test = action.toUpperCase();
  }

}
