import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
#dialog = inject(MatDialog);

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

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });

  }
  }
