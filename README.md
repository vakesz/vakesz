# vakesz.com Blog

This repository contains the source for the personal blog built with [Hugo](https://gohugo.io/) using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

## Development

1. **Install Hugo** – version `0.146` or newer is required.
2. **Clone the repository** and initialise submodules:
   ```bash
   git submodule update --init --recursive
   ```
3. **Start the development server**:
   ```bash
   hugo server -D
   ```

Static assets (like favicons) live in the `static` folder. Custom shortcodes and styles are under `layouts/shortcodes` and `assets/css/extended`.
