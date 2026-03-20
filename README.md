<div align="center">

# <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="35" /> Angular Calculadora

<p>
  <img src="https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/SCSS-3.x-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/Signals_API-✓-FF6D00?style=for-the-badge" />
</p>

<p>
  <img src="https://img.shields.io/badge/status-concluído-4CAF50?style=flat-square" />
  <img src="https://img.shields.io/badge/licença-MIT-blue?style=flat-square" />
</p>

> Calculadora desenvolvida como primeiro projeto de estudo em **Angular 19**, explorando a moderna **Signals API**, reatividade com `computed()` e alternância de tema dark/light.

</div>

---

## ✨ Funcionalidades

- ➕ &nbsp;**4 operações matemáticas** — soma, subtração, multiplicação e divisão
- 🔄 &nbsp;**Reatividade automática** — resultado atualiza sem botão de confirmar
- 🌙 &nbsp;**Dark / Light mode** — alternância com persistência de estado via signal
- 🛡️ &nbsp;**Tratamento de erros** — divisão por zero capturada e exibida
- 🔢 &nbsp;**2 casas decimais** — resultado sempre formatado com `toFixed(2)`
- 🎨 &nbsp;**Fonte DM Mono** — tipografia monospace nos campos numéricos

---

## 🚀 Tecnologias

| Tecnologia    | Uso                               |
| ------------- | --------------------------------- |
| Angular 19    | Framework principal               |
| TypeScript    | Tipagem e lógica                  |
| Signals API   | Gerenciamento de estado reativo   |
| SCSS          | Estilização com variáveis de tema |
| CSS Variables | Dark / Light mode                 |
| DM Mono       | Tipografia dos inputs             |

---

## 📐 Conceitos Angular praticados

```
Signals ──────────► signal()     → estado reativo
                    computed()   → valor derivado automático
                    .set()       → atualizar o signal
                    .update()    → atualizar baseado no valor anterior

Template ─────────► [value]      → property binding
                    (input)      → event binding
                    (click)      → event binding
                    [class.x]    → class binding dinâmico
                    {{ }}        → interpolação
```

---

## 🗂️ Estrutura do projeto

```
angular-calculadora/
├── src/
│   ├── app/
│   │   └── calculadora/
│   │       ├── calculadora.component.ts    ← lógica e signals
│   │       ├── calculadora.component.html  ← template
│   │       └── calculadora.component.scss  ← estilos do componente
│   └── styles.scss                         ← variáveis de tema global
```

---

## ⚙️ Como rodar

```bash
# Clone o repositório
git clone https://github.com/Wesley-i9/Angular-Calculadora.git

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
ng serve
```

Acesse **http://localhost:4200**

---

## 💡 Destaques do código

**Signal + Computed — reatividade sem boilerplate:**

```typescript
numero1 = signal(0);
numero2 = signal(0);
operacao = signal<"+" | "-" | "*" | "/">("+");

resultado = computed(() => {
  let valor: number = 0;
  switch (this.operacao()) {
    case "+":
      valor = this.numero1() + this.numero2();
      break;
    case "-":
      valor = this.numero1() - this.numero2();
      break;
    case "*":
      valor = this.numero1() * this.numero2();
      break;
    case "/":
      if (this.numero2() === 0) return "Erro (divisão por zero)";
      valor = this.numero1() / this.numero2();
      break;
  }
  return valor.toFixed(2);
});
```

**Dark mode com CSS Variables:**

```scss
:root {
  --bg-card: #ffffff;
  --text-main: #1a1a1a;
}

body.dark {
  --bg-card: #2a2a2a;
  --text-main: #f0f0f0;
}
```

---

## 📚 Aprendizados

Este projeto foi desenvolvido do zero com foco em aprender:

- A diferença entre o jeito tradicional (`ngModel`) e a **Signals API**
- Por que `computed()` é preferível a métodos no template
- Como o `[class.active]` substitui manipulação manual de DOM
- Boas práticas de tipagem com TypeScript em signals
- Estrutura de variáveis CSS para temas dinâmicos

---

<div align="center">

Feito com ❤️ durante os estudos do <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="20" />ngular 19

</div>
