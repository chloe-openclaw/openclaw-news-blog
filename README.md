# OpenClaw News Blog

This is a simple, elegant, static-generated blog for news about OpenClaw.
Built with Astro and Tailwind CSS.

## Project Structure

- `src/content/posts/`: Where the Markdown blog posts live.
- `src/pages/`: Contains the page routes (`index.astro` and `posts/[...slug].astro`).
- `src/layouts/`: Contains the base HTML layout.
- `src/styles/`: Contains the global CSS and font definitions.

## Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

This will start a local server, usually at `http://localhost:4321`.

## Build for Production

To create a production-ready build in the `dist/` folder:

```bash
npm run build
```
