//importação do tipo componente
import { Component, OnInit } from '@angular/core';

//com o Component importado, posso declarar o nome dele (selector) e o template que ele vai utilizar
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

//declaração de variáveis e propriedades deste componente
export class ServersComponent implements OnInit {
  //propriedades
  allowNewServer = false;
  serverCreationStatus = 'Nenhum servidor foi criado';
  // ele começa com o inputa inserido por conta dessa atribuição nesta variável deste input
  serverName = 'TesteServer 2'
  serverstatus = false;
  // IMPORTANTE: Lista do array
  servers = ['TestServer, Terserver 2'];

  //fim-propriedades


  //métodos
  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000); 
      
  }
    
  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverstatus = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Servidor foi criado! Com o nome de' + this.serverName;
  }

  //essa função é apenas para pegar a propriedade serverName e atribuir nela a o valor do input.
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
