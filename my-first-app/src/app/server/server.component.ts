
//Importa a classe responsável por configurar o componente
import { Component } from '@angular/core'

// Configura o componente
@Component({
  selector : 'app-server', //Seletor para selecionar em que parte do html vai ser inserido o html do componente
  templateUrl : './server.component.html', //HTML do componente
  styles: [`
    .online {
      color: white;
    }
  `]
})

// Classe do componente
export class ServerComponent {
  serverId : number = 10;
  serverStatus : string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
