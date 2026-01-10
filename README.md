# Re:Dollars Userscript (Preact Refactor)

A modern, component-based refactor of the Bangumi/Chii.in chat userscript "Re:Dollars". Built with Preact and Vite for better performance and maintainability.

## Features

-   **Modern Tech Stack**: Written in TypeScript using Preact and Signals for reactive UI state management.
-   **Component-Based**: Modular UI components for easier maintenance and development.
-   **Optimized Rendering**: Virtual DOM and efficient updates for smooth scrolling and interaction.
-   **Enhanced UI**: Glassmorphism design, smooth animations, and responsive layout.
-   **Standalone**: Bundles necessary dependencies (like `react-photo-view`) to ensure stability independent of site updates.

## Installation

### For Users
1.  Install a Userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.top/).
2.  [**Click here to install the script**](dist/userscript.user.js?raw=true) (GitHub raw link).

### For Developers

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd userscript-preact
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start development server**
    ```bash
    npm run dev
    ```
    This will start Vite in watch mode.

4.  **Build**
    ```bash
    npm run build
    ```
    The output file will be generated at `dist/userscript.user.js`.

## License

MIT License. See [LICENSE](./LICENSE) for details.
