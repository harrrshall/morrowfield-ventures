# Morrowfield Ventures website agent handoff

## Purpose

This repository contains the complete public website for Morrowfield Ventures, a early-stage investment firm focused on India and Southeast Asia. It is a static, dependency-free website intended to feel like a credible small fund: specific, restrained, editorial, and easy to maintain.

Use this file as the operating brief for any agent that continues the work. Read it before changing source files.

## Current state

- The site is a responsive single-page experience.
- The approved visual direction is called **Field Ledger**.
- The implementation uses semantic HTML, plain CSS, and plain JavaScript.
- There is no package manager, framework, bundler, CMS, server, database, analytics tool, or form backend.
- All people, companies, addresses, contact details, fund figures, testimonials, notes, and investment activity shown on the website are fictional.
- Original editorial images and self-hosted fonts are committed in `assets`.
- The canonical public repository is `https://github.com/harrrshall/morrowfield-ventures`.
- The production site is published from the repository root with GitHub Pages at `https://harrrshall.github.io/morrowfield-ventures/`.

## Product intent

The website should communicate five things quickly:

1. Morrowfield invests at pre-seed and seed.
2. Initial cheques are US$250K to US$500K.
3. The focus is practical technology across India and Southeast Asia.
4. Founders work directly with a small investing team.
5. The investment process is clear and designed to reach a decision in twenty-one days.

The tone is calm, direct, observant, and operational. Copy should sound like experienced investors who are close to company-building. Keep claims concrete and modest.

## Repository contents

```text
.
├── AGENTS.md
├── README.md
├── index.html
├── script.js
├── styles.css
└── assets
    ├── favicon.svg
    ├── fonts
    │   ├── inter-latin.woff2
    │   └── newsreader-latin.woff2
    └── images
        ├── daniel-teo.jpg
        ├── founder-at-work.jpg
        ├── kavya-rao.jpg
        └── mira-sen.jpg
```

Do not commit generated caches, package directories, local server files, operating-system metadata, deployment credentials, or private notes.

## Source ownership

### `index.html`

Owns the document metadata, navigation, all visible page sections, portfolio ledger rows, team cards, note rows, contact form, footer, and both dialog shells.

The section order is intentional:

1. Sticky header and navigation
2. Hero and investment facts
3. Fund overview strip
4. Approach, principles, and four-step process
5. Portfolio ledger and founder testimonials
6. Team
7. Field notes
8. Contact form and office details
9. Footer and legal line
10. Portfolio and note dialogs

Preserve semantic landmarks, heading order, form labels, alt text, ARIA attributes, the skip link, and native button behavior.

### `styles.css`

Owns the complete Field Ledger design system and all responsive behavior. The key visual choices are:

- Warm ivory page background: `#f2eee4`
- Near-black text: `#111820`
- Forest green structure and navigation: `#1f4d3a`
- Clay action color: `#c65f46`
- Editorial serif: Newsreader
- Utility sans serif: Inter
- Square corners
- Thin ledger rules
- Large serif display type
- Monochrome documentary photography
- Quiet reveal and hover movement
- Generous spacing and visible information hierarchy

Responsive layout changes occur at `1100px`, `900px`, and `650px`. Reduced-motion preferences are handled in the final media query. Any new animation must also have a reduced-motion treatment.

Do not introduce gradients, glass effects, oversized pills, floating decoration, generic startup illustrations, excessive cards, or a separate visual language for new sections. Reuse the existing rules, typography, colors, spacing, and interaction weight.

### `script.js`

Owns all client-side content records and behavior:

- `portfolio` contains the data shown in portfolio detail dialogs.
- `notes` contains the complete text shown in note dialogs.
- Mobile navigation opens, closes, and updates its accessible state.
- Reveal items use `IntersectionObserver` with a reduced-motion fallback.
- The active navigation link follows the visible section.
- Portfolio sector filters update row visibility, pressed state, and the live result count.
- Portfolio rows populate and open the native portfolio dialog.
- Note rows populate and open the native note dialog.
- Dialogs close from their close button, backdrop click, or native Escape behavior.
- The contact form validates in the browser, shows a local confirmation, and resets.
- The footer year is generated from the current date.

The contact form does not transmit or store submissions. Do not represent it as a working delivery channel until a real endpoint, consent model, error state, privacy disclosure, and spam protection are implemented.

### `assets`

All production assets are local so the site has no third-party font or image request. Keep image aspect ratios and intrinsic `width` and `height` attributes accurate. Compress new raster images before committing them. Prefer WOFF2 for any additional font file.

## Data relationships that must stay synchronized

Some content appears in both HTML and JavaScript. Update both sides in the same change.

### Portfolio entries

Every `.portfolio-row` in `index.html` has:

- `data-sector`, which must match a filter button value
- `data-project`, which must match a key in the `portfolio` object
- visible number, name, category, and base

The matching `portfolio` record in `script.js` supplies:

- `index`
- `company`
- `sector`
- `description`
- `base`
- `year`
- `stage`
- `partner`

When adding or removing a company, also update the displayed company total in the fund strip if needed. The live filter count is calculated automatically.

### Field notes

Every `.note-row` has a `data-note` value matching a key in the `notes` object. Keep the visible label, title, and date aligned with the dialog record. Use a valid ISO date in the HTML `datetime` attribute.

### Team members

Each team card is maintained in `index.html`. A new portrait belongs in `assets/images`, must have useful alt text and intrinsic dimensions, and should follow the existing monochrome editorial treatment.

## Content constraints

- Treat every identity and business detail as fictional unless the project owner supplies verified replacement content.
- Never present fictional contact details as connected to a real inbox, telephone line, legal entity, or office.
- Do not add fabricated awards, exits, assets under management, performance data, customer counts, press mentions, or partner histories.
- Do not include project research, source comparisons, browsing history, internal prompts, or design exploration in the public repository.
- Do not use the words `dummy`, `placeholder`, or `lorem` in public copy.
- Avoid inflated phrases such as `category-defining`, `visionary`, `revolutionary`, or `relentless`.
- Avoid formulaic contrast sentences shaped like `not X, but Y`.
- Avoid double hyphens and dash-heavy prose in visible copy.
- Keep dates, cheque sizes, geography, company totals, and team totals consistent across the page.
- Keep the legal line concise and clearly visible in the footer.

## Editing recipes

### Change positioning or fund details

Update the relevant hero copy, hero facts, fund strip, approach copy, footer, and metadata in `index.html`. Search for the old value across all text files before finishing.

### Add a portfolio company

1. Add a `.portfolio-row` in `index.html` with a unique `data-project` key.
2. Use an existing `data-sector` value or add a filter with a matching value.
3. Add the full record under the same key in `script.js`.
4. Renumber later entries if the ordering changes.
5. Update the static company total where appropriate.
6. Test the All filter, the chosen sector filter, the count, and the dialog.

### Add a field note

1. Add a `.note-row` in `index.html`.
2. Add the corresponding record to `notes` in `script.js`.
3. Confirm the row and dialog use the same label, title, and date.
4. Test opening, keyboard focus, Escape, close button, and backdrop close.

### Connect the contact form

Replace the local submit handler only after a real delivery service is selected. Preserve native browser validation. Add pending, success, and error states. Prevent duplicate submissions. Add privacy and consent copy if personal data leaves the browser. Never commit a secret or private API key to this repository.

### Add a new page

The current deployment supports ordinary relative files. Use relative paths for local assets and internal links so previews, GitHub Pages, and other static hosts continue to work. Carry over the header, footer, metadata, focus styles, typography, spacing, and reduced-motion support.

## Local preview

From the repository root:

```sh
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

The website must also work when opened from the GitHub Pages project path, so do not change asset references to root-absolute paths such as `/assets/...`.

## Required verification

Run these checks after source changes:

```sh
npx --yes html-validate@latest index.html
npx --yes csstree-validator styles.css
node --check script.js
```

Start the local server, then check internal HTTP links:

```sh
python3 -m http.server 4173
npx --yes linkinator http://127.0.0.1:4173 --recurse --skip 'mailto:|tel:'
```

Also verify manually at a desktop width near `1440px`, a tablet width near `900px`, and a mobile width near `390px`:

- Header remains readable and sticky.
- Mobile menu opens, closes, and releases body scroll.
- Every navigation link reaches the correct section.
- All portfolio filters show the expected rows and count.
- Portfolio and note dialogs open with the correct content and close through all supported paths.
- Form required fields and email validation work.
- Successful form submission shows the local confirmation and resets the inputs.
- Keyboard focus is visible.
- Images load without layout shift.
- No horizontal overflow appears.
- Reduced-motion mode reveals all content and suppresses long transitions.
- Browser console has no errors.

Before committing, inspect the final public file list and confirm that no private or unrelated files are staged.

## Deployment

The site is published through GitHub Pages from the root of the `main` branch. There is no build command and no output directory. A deployment is triggered by pushing a commit to `main`.

Deployment checklist:

1. Run the required verification.
2. Commit only the intended website and handoff changes.
3. Push `main` to `origin`.
4. Wait for GitHub Pages to report `built`.
5. Verify `https://harrrshall.github.io/morrowfield-ventures/` returns successfully.
6. Check at least the HTML, stylesheet, script, fonts, favicon, and all four images on the deployed origin.

## Definition of done

A change is complete when:

- It preserves the Field Ledger visual system.
- HTML and JavaScript content records remain synchronized.
- All content constraints remain satisfied.
- Automated checks pass.
- Desktop and mobile interactions have been exercised.
- No private, generated, or unrelated files are included.
- The public repository contains the intended commit.
- The production URL serves that commit without missing assets or console errors.
