# Landing Page - Projeto Refatorado

Uma landing page moderna desenvolvida com as melhores práticas de desenvolvimento web.

## 🚀 Refatoração Realizada

### Scripts Separados e Modulares

O projeto foi refatorado para seguir as melhores práticas:

**Antes:**
- Script inline no HTML
- Código misturado com markup
- Difícil manutenção

**Depois:**
- Scripts em arquivos separados
- Código modular e organizado
- Fácil manutenção e reutilização

### Estrutura dos Arquivos JavaScript

#### `utils.js` - Utilitários Gerais
- **Performance**: `debounce()`, `throttle()`
- **DOM**: `$()`, `$$()` para seletores
- **Animações**: `fadeIn()`, `fadeOut()`
- **Validações**: `validateEmail()`, `validatePhone()`
- **Storage**: Wrapper para localStorage
- **Detecção**: Device e feature detection

#### `script.js` - Navegação Principal
- **MobileNavigation Class**: Gerencia menu mobile
- **SmoothScroll Class**: Scroll suave para âncoras
- **Acessibilidade**: ARIA attributes, navegação por teclado
- **Performance**: Event delegation e otimizações

## 📁 Estrutura do Projeto

```
landing-page/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── utils.js           # Utilitários JavaScript
├── script.js          # Script principal de navegação
└── README.md          # Documentação
```

## 🎯 Funcionalidades Implementadas

### Menu Mobile
- ✅ Toggle do hamburger menu
- ✅ Fechamento automático ao clicar nos links
- ✅ Fechamento com tecla Escape
- ✅ Fechamento ao clicar fora do menu
- ✅ Responsive (fecha automaticamente em desktop)

### Acessibilidade
- ✅ ARIA attributes (`aria-expanded`, `aria-controls`, `aria-label`)
- ✅ Navegação por teclado
- ✅ Focus management
- ✅ Screen reader support

### Performance
- ✅ Event delegation
- ✅ Debounce para resize events
- ✅ Throttle para scroll events
- ✅ Lazy initialization

### Scroll Suave
- ✅ Smooth scrolling para links âncora
- ✅ Offset para header fixo
- ✅ Atualização da URL sem jump

## 🛠️ Como Usar

### Desenvolvimento Local

1. **Clone o repositório**:
   ```bash
   git clone <repository-url>
   cd landing-page
   ```

2. **Abra o projeto**:
   ```bash
   # Serve localmente (recomendado)
   python -m http.server 8000
   # ou
   npx serve .
   
   # Ou simplesmente abra index.html no navegador
   ```

3. **Acesse**: `http://localhost:8000`

### Customização

#### Modificar Menu
```javascript
// Em script.js, você pode customizar:
const nav = new MobileNavigation();

// Adicionar novos comportamentos:
nav.onMenuOpen = () => {
    console.log('Menu aberto!');
};
```

#### Adicionar Validações
```javascript
// Use as utilidades em utils.js:
const email = 'test@example.com';
if (utils.validateEmail(email)) {
    console.log('Email válido!');
}
```

#### Storage Local
```javascript
// Salvar dados:
utils.storage.set('userPreference', { theme: 'dark' });

// Recuperar dados:
const prefs = utils.storage.get('userPreference', { theme: 'light' });
```

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px (menu hamburger ativo)
- **Desktop**: ≥ 768px (menu horizontal)

### Estratégias
- Mobile-first CSS
- Progressive enhancement
- Touch-friendly targets (44px mínimo)

## ♿ Acessibilidade

### Implementações
- **Semântica**: HTML5 adequado
- **ARIA**: Labels e estados dinâmicos
- **Teclado**: Tab, Escape, Enter funcionais
- **Screen Readers**: Anúncios apropriados
- **Contraste**: Cores adequadas para WCAG

### Testes Recomendados
```bash
# Use ferramentas como:
- Lighthouse (Performance + A11y)
- axe-core (Acessibilidade)
- WAVE (Web Accessibility Evaluation)
```

## 🚀 Performance

### Otimizações Implementadas
- **JavaScript**: Modular e lazy
- **Events**: Debounce/throttle onde necessário
- **DOM**: Queries otimizadas
- **Memory**: Cleanup adequado

### Métricas Alvo
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🔧 Manutenção

### Adicionando Novos Recursos
1. **Criar nova classe** em arquivo separado
2. **Importar utilitários** conforme necessário
3. **Testar acessibilidade** com screen readers
4. **Validar performance** com Lighthouse

### Debugging
```javascript
// Console logs estão incluídos:
// ✅ Navigation script loaded successfully
// Menu opened/closed
// ❌ Error messages com detalhes
```

## 📚 Melhores Práticas Seguidas

### JavaScript
- ✅ **Classes ES6**: Código orientado a objetos
- ✅ **Modules**: Separação de responsabilidades
- ✅ **Error Handling**: Try/catch e validações
- ✅ **Performance**: Debounce, throttle, event delegation
- ✅ **Accessibility**: ARIA, keyboard navigation

### HTML
- ✅ **Semântica**: Tags apropriadas
- ✅ **Acessibilidade**: ARIA attributes
- ✅ **Performance**: Scripts no final do body

### Organização
- ✅ **Separação**: HTML, CSS, JS em arquivos separados
- ✅ **Modularidade**: Cada funcionalidade em sua classe
- ✅ **Reutilização**: Utilitários compartilhados
- ✅ **Documentação**: Comentários e README detalhado

## 🔍 Estrutura do Código

### MobileNavigation Class
```javascript
class MobileNavigation {
    constructor()     // Inicialização
    init()           // Setup principal
    bindEvents()     // Event listeners
    setupAccessibility() // ARIA attributes
    toggleMenu()     // Toggle principal
    openMenu()       // Abrir menu
    closeMenu()      // Fechar menu
    destroy()        // Cleanup
}
```

### SmoothScroll Class
```javascript
class SmoothScroll {
    constructor()    // Inicialização
    init()          // Setup
    bindEvents()    // Click handlers
    scrollToElement() // Scroll suave
}
```

## 🧪 Testes

### Funcionalidades para Testar
- [ ] Menu hamburger abre/fecha
- [ ] Links do menu funcionam
- [ ] Scroll suave funciona
- [ ] Menu fecha com Escape
- [ ] Menu fecha clicando fora
- [ ] Responsive (mobile/desktop)
- [ ] Acessibilidade (screen reader)
- [ ] Performance (Lighthouse)

### Comandos de Teste
```bash
# Servidor local para testes
python -m http.server 8000

# Testes de acessibilidade
# Use extensões do navegador:
# - axe DevTools
# - WAVE
# - Lighthouse
```

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Crie branch** para feature (`git checkout -b feature/nova-feature`)
3. **Commit** mudanças (`git commit -am 'Adiciona nova feature'`)
4. **Push** para branch (`git push origin feature/nova-feature`)
5. **Abra Pull Request**

### Guidelines
- Mantenha o código modular
- Adicione comentários para funcionalidades complexas
- Teste acessibilidade
- Valide performance
- Atualize documentação

## 📄 Licença

Este projeto está sob licença MIT. Veja arquivo LICENSE para detalhes.

---

**Desenvolvido com ❤️ seguindo as melhores práticas de desenvolvimento web.**
