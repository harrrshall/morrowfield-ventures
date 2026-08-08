# Nirvana Venture Partners

A standalone, responsive public website for a small early-stage investment firm operating across India and Southeast Asia.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173` in a browser.

## Structure

- `index.html` contains the complete semantic page structure and written content.
- `portfolio.html` contains the dedicated, filterable portfolio directory and shareable company profiles.
- `styles.css` contains the responsive editorial design system.
- `script.js` provides portfolio filtering, shareable detail dialogs, navigation state, reveal motion, and the private email-draft contact flow.
- `assets` contains self-hosted fonts, the favicon, and original editorial photography.
- `robots.txt` and `sitemap.xml` expose the two public pages to search crawlers.
- `CNAME` connects the GitHub Pages deployment to `nirvanavp.com`.

The build has no package or runtime dependencies. Contact details entered on the site remain in the browser and are passed to the visitor's email app as a draft; the website does not transmit or store them.
