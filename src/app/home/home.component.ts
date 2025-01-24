import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-site-em-construcao',
  template: `
    <div class="flex flex-col min-h-screen bg-gray-100">
      <!-- Cabeçalho -->
      <header class="bg-blue-600 text-white py-4">
        <div class="container mx-auto text-center">
          <h1 class="text-3xl font-bold">Nome da Empresa</h1>
        </div>
      </header>

      <!-- Conteúdo principal -->
      <main class="flex flex-1 items-center justify-center">
        <div class="w-11/12 max-w-md p-4 bg-white shadow-lg rounded-2xl">
          <div class="flex flex-col items-center text-center">
            <img
              src="/logo.png"
              alt="Logotipo da Empresa"
              class="w-24 h-24 mb-6"
            />
            <h1 class="text-2xl font-bold text-gray-800">
              Site em Construção
            </h1>
            <p class="mt-2 text-gray-600">
              Estamos trabalhando para trazer algo incrível para você. Fique ligado!
            </p>
          </div>
        </div>
      </main>

      <!-- Rodapé -->
      <footer class="bg-blue-600 text-white py-4">
        <div class="container mx-auto text-center">
          <p class="text-sm">&copy; {{ currentYear }} Nome da Empresa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [
    `
      .bg-gray-100 { background-color: #f7fafc; }
      .bg-blue-600 { background-color: #2563eb; }
      .text-white { color: #ffffff; }
      .text-gray-800 { color: #2d3748; }
      .text-gray-600 { color: #718096; }
      .text-center { text-align: center; }
      .font-bold { font-weight: bold; }
      .rounded-2xl { border-radius: 1rem; }
      .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
      .container { width: 100%; max-width: 1200px; margin: 0 auto; }
      .mx-auto { margin-left: auto; margin-right: auto; }
      .min-h-screen { min-height: 100vh; }
      .flex { display: flex; }
      .flex-1 { flex: 1; }
      .items-center { align-items: center; }
      .justify-center { justify-content: center; }
      .w-11/12 { width: 91.666667%; }
      .max-w-md { max-width: 28rem; }
      .p-4 { padding: 1rem; }
      .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
      .mt-2 { margin-top: 0.5rem; }
      .mb-6 { margin-bottom: 1.5rem; }
      .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
      .text-2xl { font-size: 1.5rem; line-height: 2rem; }
      .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
    `
  ]
})
export class SiteEmConstrucaoComponent {
  currentYear: number = new Date().getFullYear();
}
