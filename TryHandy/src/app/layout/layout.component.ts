import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements AfterViewChecked {

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
    console.log('NORD')
  }
  handleWest() {
    console.log('WEST')
  }
  handleSud() {
    console.log('SUD')
  }
  handleOst() {
    console.log('OST')
  }

}
