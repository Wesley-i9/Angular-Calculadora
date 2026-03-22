import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss',
})
export class CalculadoraComponent {
  // MODO ESCURO
  darkMode = signal(true);

  constructor() {
    effect(() => {
      document.body.classList.toggle('dark', this.darkMode());
    });
  }

  toggleTheme() {
    this.darkMode.update((modoAtual) => !modoAtual);
  }

  // OPERAÇÕES MATEMÁTICAS
  numero1 = signal(0);
  numero2 = signal(0);
  operacao = signal<'+' | '-' | '*' | '/'>('+');

  resultado = computed<number | string>(() => {
    let valor: number = 0;

    switch (this.operacao()) {
      case '+':
        valor = this.numero1() + this.numero2();
        break;
      case '-':
        valor = this.numero1() - this.numero2();
        break;
      case '*':
        valor = this.numero1() * this.numero2();
        break;
      case '/':
        if (this.numero2() === 0) return 'Erro (divisão por zero)';
        valor = this.numero1() / this.numero2();
        break;
      default:
        valor = 0;
    }

    return parseFloat(valor.toFixed(2));
  });
}
