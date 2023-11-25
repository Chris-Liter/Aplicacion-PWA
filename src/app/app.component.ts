import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Trabajo';
  ngOnInit() {
    window.addEventListener('beforeinstallprompt', (event) => {
      // Evita que el navegador muestre la ventana emergente por defecto
      event.preventDefault();

      // Almacena el evento para mostrar la ventana emergente cuando sea necesario
      const deferredPrompt = event as any;
      // Puedes mostrar la ventana emergente cuando desees, por ejemplo, en un botón "Instalar"
      // deferredPrompt.prompt();
    });
  }
}
