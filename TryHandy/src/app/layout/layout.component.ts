import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements AfterViewChecked {

  test: string = "START";

  setTheme(theme: string) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);

    localStorage.setItem('theme', theme);
  }

  ngAfterViewChecked(): void {
    const theme = localStorage.getItem('theme') || 'light-theme';

    if (document) {
      document.body.classList.add(theme);
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

}
