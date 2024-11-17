import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/news_explorer.jpg',
      alt: 'logo do projeto noticias',
      title: 'News Explorer',
      width: '100px',
      heigth: '51px',
      description: 'Aplicação de notícias com busca de notícias por palavra-chave ',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://vercelfrontend-maikoncorreas-projects.vercel.app/',
        }
      ]

    },
    {
      src: 'assets/img/projects/connect_eco.jpg',
      alt: 'logo de Hackathon connectEco',
      title: 'Connect Eco',
      width: '100px',
      heigth: '51px',
      description: 'site para busca de pontos de coleta de lixo reciclavel, com filtro por tipo de lixo e localização',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://connect-eco-teste.vercel.app/',
        }
      ]

    }
  ])
}
