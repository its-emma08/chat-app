import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: false
})
export class ChatsPage implements OnInit {
  
  constructor() { }
  chats: any[] = [
    { username: 'Joanna!', message  : 'Hola, buenos días 🌞', date: '08:30 a.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'},
    { username: 'Eliezer TIDSM', message: 'Me acabo de levantar 😴', date: '6:55 a.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Jefa', message: 'Ya llegó??? 🧐', date: '10:05 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Sofía L.', message: '¿Te paso los apuntes?', date: '12:10 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Raúl M.', message: 'Voy en camino.', date: '12:50 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Gabriela O.', message: 'Gracias por tu ayuda.', date: '13:30 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'David S.', message: '¿Qué tal el fin de semana?', date: '14:00 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Elena J.', message: 'Necesito tu opinión sobre esto.', date: '14:40 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Miguel F.', message: 'Genial, nos vemos luego.', date: '15:15 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Paula Z.', message: 'Voy a enviarte los documentos.', date: '15:45 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Javier N.', message: '¿Cuándo nos reunimos?', date: '16:20 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Marta V.', message: '¿Cómo salió el examen?', date: '17:10 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Sergio D.', message: 'Nos vemos a las 6.', date: '17:50 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Isabel T.', message: 'Tengo una duda sobre el proyecto.', date: '18:30 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Alberto C.', message: '¡Feliz cumpleaños!', date: '19:05 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Natalia K.', message: '¿Has visto la última película?', date: '19:45 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Rodrigo B.', message: 'Mañana tengo libre.', date: '20:20 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Clara X.', message: 'Gracias por la recomendación.', date: '21:00 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Tomás H.', message: 'Recibí tu mensaje.', date: '21:30 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Valeria Y.', message: 'Espero que estés bien.', date: '22:10 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Esteban J.', message: 'Mándame el enlace.', date: '22:45 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Patricia L.', message: 'Te llamo más tarde.', date: '23:15 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Ricardo P.', message: 'Nos vemos en el café.', date: '23:50 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Marina F.', message: 'Dale, me avisas.', date: '00:25 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Joaquín E.', message: 'Estoy en camino.', date: '01:00 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Beatriz N.', message: 'Lo reviso y te aviso.', date: '01:35 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Gonzalo Q.', message: 'No hay problema.', date: '02:10 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Susana W.', message: 'Déjame ver qué puedo hacer.', date: '02:50 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Álvaro R.', message: 'Gracias por el dato.', date: '03:25 p.m.', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' }
  ];
  
  ngOnInit() {
  }

}
