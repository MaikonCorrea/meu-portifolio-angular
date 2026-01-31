import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      sumary: {
        strong: "Desenvolvedor Full Stack & Fundador",
        p: "MkSystem (SaaS) | Dez 2024 - Atualmente"
      },
      text: "Desenvolvimento de plataforma SaaS Self-Service de gestão financeira com arquitetura Serverless (Supabase Edge Functions). Responsável pela implementação de Chatbot com IA via n8n para suporte autônomo (No-Touch Operations) e integração completa de pagamentos recorrentes com Stripe (Webhooks). O frontend foi construído em React/TypeScript com validações financeiras complexas para garantir alta performance."
    },
    {
      sumary: {
        strong: "Analista de QA & Testes",
        p: "Genesys Engenharia de Software | Jan 2024 - Atualmente"
      },
      text: "Responsável pela qualidade de software em sistemas ERP críticos, atuando diretamente na prevenção de falhas fiscais e financeiras. Realizo a execução de consultas complexas em Oracle SQL para validação de integridade de dados e cenários de borda. Lidero a criação de roteiros de testes automatizados (TestComplete) e manuais, documentando bugs técnicos e atuando como ponte entre a regra de negócio e o time de desenvolvimento."
    }
  ])
}
