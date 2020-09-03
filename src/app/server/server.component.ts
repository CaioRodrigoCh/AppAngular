//Importar Component do core do angular, para que ele saiba que isso é um componente
import { Component } from "@angular/core";

//com o Component importado, posso declarar o nome dele (selector) e o template que ele vai utilizar
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]

})

    //A partir daqui declaro as variáveis e o métodos que poderão ser utilizados no template html
export class ServerComponent{
    serverId = 10;
    serverStatus = '';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    // O método getServerStatus vai me retornar o valor da variável serverStatus
    getServerStatus () {
       return this.serverStatus
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}