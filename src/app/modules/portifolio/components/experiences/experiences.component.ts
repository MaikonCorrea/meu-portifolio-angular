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
        strong:"Tester de Software",
        p: " Empresa: Genesys Engenharia de Software | Período: Janeiro 2024 - atualmente"
      },
      text: " Atuo na área de testes de software com foco em automação de testes, utilizando ferramentas como TestComplete. Além disso, realizo abertura de correções de bugs, testes manuais e automatizados, elaboração de planos de testes e documentação de testes."
    }
  ])
}
