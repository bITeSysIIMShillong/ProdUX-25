# ProduX Frontend

## Overview

ProduX Frontend is a React-based web application built using Vite and TypeScript. It leverages Chakra UI, Framer Motion, and other modern libraries to create a seamless and interactive user experience.

## Getting Started

To set up and run this project locally, follow the steps below.

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/menon99/produx-frontend.git
   cd produx-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
   or if you use yarn:
   ```sh
   yarn install
   ```

## Available Scripts

The project includes the following npm scripts for development, building, and linting.

### `npm run dev`

Starts the development server on `localhost` with hot module replacement (HMR).

```sh
npm run dev
```

By default, Vite serves the app on `http://localhost:5173/` (port may vary).

### `npm run build`

Compiles the TypeScript code and builds the production-ready static files.

```sh
npm run build
```

This command runs TypeScript's build (`tsc -b`) and then executes `vite build` to generate optimized assets inside the `dist/` directory.

### `npm run lint`

Checks the code for linting issues using ESLint.

```sh
npm run lint
```

Ensure you have ESLint configured correctly for best results.

### `npm run preview`

Serves the built project locally to preview the production build.

```sh
npm run preview
```

After running this command, Vite will start a local server to serve the production build.

## Folder Structure

```
produx-frontend/
├── src/               # Application source code
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── hooks/         # Custom React hooks
│   ├── styles/        # SCSS styles
│   ├── assets/        # Static assets like images
│   ├── App.tsx        # Root component
│   ├── main.tsx       # Application entry point
│   ├── routes.tsx     # React Router configuration
├── public/            # Static files
├── .eslintrc.js       # ESLint configuration
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
├── package.json       # Project metadata and scripts
├── README.md          # Documentation (this file)
```

## Technologies Used

- **React** `18.3.1`
- **Vite** `6.0.5`
- **TypeScript** `5.6.2`
- **Chakra UI** `3.5.1`
- **Framer Motion** `12.0.6`
- **React Router** `7.1.3`
- **ESLint** `9.17.0`
- **SCSS Support** via `sass-embedded`

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Now you're all set to work with ProduX Frontend! 🚀
