import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  pages = [
    {titulo: 'Principal', path: 'pages/create'},
    {titulo: 'Lista', path: 'pages/list'}

  ]
}
