import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  imports: [CommonModule]
})
export class Projects {
  proyectos = [
    {
      nombre: 'Entalto',
      subtitulo: 'Pagina web del bar Entalto',
      descripcion: 'Página web desarrollada para el bar Entalto...',
      repo: 'https://entalto.es/',
      imagen: 'assets/logoEntalto.jpg',
      tech: ['assets/wordpress-original.svg'],
      estado: 'En uso',
      botonTexto: 'Visitar Web'
    },

    {
      nombre: 'GastroNova',
      subtitulo: 'Gestión de restaurantes',
      descripcion: 'Aplicación web desarrollada para gestión de restaurantes y reservas.',
      url: 'https://github.com/pfermar16/GastroNova',
      repo: 'https://github.com/pfermar16/GastroNova',
      videoTitulo: 'Video Demostrativo GastroNova',
      video: 'assets/VideoDemoGastronova.mp4',
      tech: [
        'assets/angularjs-original.svg',
        'assets/typescript-original.svg',
        'assets/css3-original.svg',
        'assets/html5-original.svg'
      ],
      estado: 'En desarrollo',
      botonTexto: 'Ver en GitHub'
    },

    {
      nombre: 'Modulo Lunar',
      subtitulo: 'Exploración lunar',
      descripcion: 'Aplicación web para misiones de exploración lunar, con simulaciones y datos científicos.',
      url: 'https://github.com/pfermar16/ModuloLunar',
      repo: 'https://github.com/pfermar16/ModuloLunar',
      videoTitulo: 'Video Demostrativo Modulo Lunar',
      video: 'assets/ModulolunarDemo.mp4',
      tech: [
        'assets/angularjs-original.svg',
        'assets/typescript-original.svg',
        'assets/css3-original.svg',
        'assets/html5-original.svg'
      ],
      estado: 'Prototipo',
      botonTexto: 'Ver en GitHub'
    },

    {
      nombre: 'Capacitte',
      subtitulo: 'Empleo y Formación',
      descripcion: 'Aplicación web en desarrollo, es una plataforma de busqueda de empleo y formación.',
      url: 'https://github.com/rociolamcab/capacitte',
      repo: 'https://github.com/rociolamcab/capacitte',
      videoTitulo: 'Video Demostrativo Capacitte',
      video: 'assets/videoDemoCapacitte.mp4',
      tech: [
        'assets/angularjs-original.svg',
        'assets/typescript-original.svg',
        'assets/css3-original.svg',
        'assets/html5-original.svg',
        'assets/apis-original.png'
      ],
      estado: 'En desarrollo',
      botonTexto: 'Ver en GitHub'
    }
  ];

}
