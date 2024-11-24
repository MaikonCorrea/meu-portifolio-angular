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
      width: '140px',
      heigth: '91px',
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
      width: '140px',
      heigth: '91px',
      description: 'site para busca de pontos de coleta de lixo reciclavel, com filtro por tipo de lixo e localização',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://connect-eco-teste.vercel.app/',
        }
      ]
    },
    {
      src: 'assets/img/projects/instabytes.jpg',
      alt: 'imagem da página inicial do projeto instabytes',
      title: 'Imersão Beckend Alura',
      width: '140px',
      heigth: '91px',
      description: 'Este projeto foi desenvolvido durante a Imersão Beckend da Alura, onde foi desenvolvido somente o backend e realizado o deploy da aplicação na google cloud, o front end foi disponibilizado pela Alura e foi usado somente para ilustrar o funcionamento do backend',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://imersaobackendalura.netlify.app/',
        }
      ]
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });

  }
  }
