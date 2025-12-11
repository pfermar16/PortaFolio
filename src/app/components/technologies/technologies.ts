import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.html',
  styleUrls: ['./technologies.css'],
})
export class Technologies {
  categorias = [
    {
      nombre: 'Frontend',
      items: [
        { nombre: 'HTML5', nivel: 100, icon: 'assets/html5-original.svg' },
        { nombre: 'CSS3', nivel: 100, icon: 'assets/css3-original.svg' },
        { nombre: 'JavaScript', nivel: 90, icon: 'assets/javascript-original.svg' },
        { nombre: 'TypeScript', nivel: 90, icon: 'assets/typescript-original.svg' },
        { nombre: 'Angular', nivel: 90, icon: 'assets/angularjs-original.svg' },
        { nombre: 'WordPress', nivel: 100, icon: 'assets/wordpress-original.svg' },
      ]
    },
    {
      nombre: 'Backend',
      items: [
        { nombre: 'NodeJS', nivel: 70, icon: 'assets/nodejs-original.svg' },
        { nombre: 'Java', nivel: 80, icon: 'assets/java-original.svg' },
        { nombre: 'C#', nivel: 80, icon: 'assets/csharp-original.svg' },
        { nombre: 'MySQL', nivel: 80, icon: 'assets/mysql-original.svg' },
        { nombre: 'PostgreSQL', nivel: 75, icon: 'assets/postgresql-original.svg' },
        { nombre: 'APIs', nivel: 100, icon: 'assets/apis-original.png' },
      ]
    },
    {
      nombre: 'Ofimática',
      items: [
        { nombre: 'Microsoft Office', nivel: 90, icon: 'assets/word-original.svg' },
        { nombre: 'Microsoft Excel', nivel: 90, icon: 'assets/excel-original.svg' },
        { nombre: 'Microsoft PowerPoint', nivel: 90, icon: 'assets/powerpoint-original.svg' },
      ]
    }
  ];
}
