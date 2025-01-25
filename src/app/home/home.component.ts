import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="w-full max-w-md p-4 bg-white shadow-lg rounded-2xl">
      <div class="flex flex-col items-center text-center">
        <img
          src="/lontra-logo.png"
          alt="Logotipo da Empresa"
          class="w-24 h-24 mb-6"
        />
        <h1 class="text-2xl font-bold text-gray-800 mb-4 ">
          Site em Construção
        </h1>
        <p class="text-gray-600">
          Estamos trabalhando para trazer algo incrível para você. Fique ligado!
        </p>
      </div>
    </div>
  </div>
`,
styles: [
  `
    .bg-gray-100 { background-color: #f7fafc; }
    .text-gray-800 { color: #2d3748; }
    .text-gray-600 { color: #718096; }
    .text-center { text-align: center; }
    .font-bold { font-weight: bold; }
    .rounded-2xl { border-radius: 1rem; }
    .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .min-h-screen { min-height: 100vh; }
    .w-full { width: 100%; }
    .max-w-md { max-width: 28rem; }
    .p-4 { padding: 1rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-4 { margin-bottom: 1rem; }
    .text-2xl { font-size: 1.5rem; line-height: 2rem; }
    .w-24 { width: 16rem; }
    .h-24 { height: 16rem; }
  `
]
})
export class HomeComponent {
  currentYear: number = new Date().getFullYear();
}
