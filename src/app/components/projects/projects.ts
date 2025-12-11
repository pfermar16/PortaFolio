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
      descripcion: 'Página web desarrollada para el bar Entalto, con información sobre el menú, ubicación, eventos, etc.',
      url: 'https://entalto.es/',
      repo: 'https://entalto.es/',
      imagen: 'assets/logoEntalto.jpg',
      tech: ['assets/wordpress-original.svg'],
      estado: 'En uso'
    },
    {
      nombre: 'GastroNova',
      subtitulo: 'Gestión de restaurantes y reservas',
      descripcion: 'Aplicación web desarrollada para gestión de restaurantes y reservas.',
      url: 'https://github.com/pfermar16/GastroNova',
      repo: 'https://github.com/pfermar16/GastroNova',
      videoTitulo: 'Video Demostrativo GastroNova',
      video: 'assets/video-demo_SMVR1pYJ.mp4',
      tech: [
        'assets/angularjs-original.svg',
        'assets/typescript-original.svg',
        'assets/css3-original.svg',
        'assets/html5-original.svg'
      ],
      estado: 'En desarrollo'
    },
    {
      nombre: 'Modulo Lunar',
      subtitulo: 'Exploración lunar',
      descripcion: 'Aplicación web para misiones de exploración lunar.',
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
      estado: 'Prototipo'
    }
  ];
}
