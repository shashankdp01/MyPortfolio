# Shashank D P · Portfolio

A clean, responsive portfolio built with HTML, CSS, and JavaScript.

## Local Development

- Open `index.html` directly in your browser, or use a simple static server.
- On Windows PowerShell:

```powershell
# from C:\MyPortfolio
python -m http.server 5173
# then open http://localhost:5173
```

## Customize Content

- Update name/tagline in `index.html` hero section.
- Replace skills in `#skills` list.
- Add real projects in `#projects` with live/code links.
- Update social links in the footer.
- Optional: Add a headshot or illustration in the hero visual.
 - Resume: place your PDF at `assets/resume/Shashank_DP_Resume.pdf`. The hero "Resume (PDF)" button is wired to download it.

## Theme

- Light/dark theme toggle is persisted via `localStorage`.
- Color tokens are defined in `styles.css` under `:root` and `.light`.

## Deploy

- GitHub Pages: push this folder to a repository and enable Pages (root).
- Netlify/Vercel: drag-and-drop the folder or connect the repository.

## License

MIT


