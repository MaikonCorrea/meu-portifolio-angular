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
      description: 'Este projeto de Frontend  em React.js e JavaScript, é um site de busca de noticias, onde o usuário pode buscar noticias por palavra chave e se tiver um cadastro de inscrição no site e estiver logado pode salvar a notícia que mais gostou. Já o Backend em Node.js, usando Express, desenvolvi uma API e utilizei também uma API de terceiros, para que juntas pudessem além de retornarem do Banco de dados as notícias também controlasse a incrição de usuários e o login. No banco de dados foi usado o mongoAtlas.',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://newsexplorerfrontend-seven.vercel.app/',
        }
      ]
    },
    {
      src: 'assets/img/projects/connect_eco.jpg',
      alt: ' Imagem do site desenvolvido no hackathon chamado Connect Eco',
      title: 'Connect Eco',
      width: '140px',
      heigth: '91px',
      description:'Esta aplicação foi desenvolvida em Next.js e JavaScrip. Para a armazenar as informações foi usado um arquivo Json, em uma pasta Mock pois necessitavamos de agilidade por se tratar de um Hackathon. O objetivo era desenvolver uma aplicação voltada para sustentabilidade, a nossa aplicação ajuda a conectar pessoas que querem descartar resíduos recicláveis e muitas vezes não encontram onde fazer, com locais que recebem determinados tipos de resíduos e também locais que utilizam estes resíduos na fabricação de seus produtos, com isso aumentamos as chances de reciclagem e consequentemente a diminuição do descarte indevido de resíduos no meio ambiente.',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://connect-eco-teste.vercel.app/',
        }
      ]
    },
    {
      src: 'assets/img/projects/MkSystem_projeto.png',
      alt: 'Imagem do projeto MkSystem - Controle financeiro',
      title: 'MkSystem - Controle financeiro',
      width: '140px',
      heigth: '91px',
      description:'Aplicação Fullstack de gestão financeira desenvolvida com React e Supabase. O sistema utiliza uma arquitetura serverless robusta, onde o Supabase gere a autenticação, base de dados PostgreSQL e atualizações em tempo real. A segurança é garantida através de Row Level Security (RLS) no banco de dados e gestão de sessão com auto-logout no frontend. A monetização inclui um sistema de subscrição híbrido: automatizado via Stripe (com Webhooks para renovação e cancelamento) e uma integração manual via PIX, gerando QR Codes dinâmicos e facilitando a confirmação pelo painel de controle e envio do usuário de comprovantes de pagamento, integrei na mensagem do WhatsApp o envio de nome do usuário e e-mail, para facilitar no momento da ativação do plano ou sua mudança.',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://www.mksystem.app',
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
