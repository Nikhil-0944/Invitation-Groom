# 💍 Engagement Invitation Website

A mobile-first engagement invitation website inspired by the visual language of the provided reference video.

## Design direction

- Elegant Indian engagement/wedding invitation aesthetic
- Cream / ivory paper background
- Champagne-gold details
- Serif + script typography
- Floral/ornamental feel
- Vertical scrolling
- Curtain-opening intro
- Scroll reveal animations
- Live countdown
- Gallery placeholders
- Venue/map section
- Closing section
- **No RSVP section**

## 📁 Project structure

```text
engagement-invitation/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── hero-placeholder.svg
    └── venue-placeholder.svg
```

## ✏️ Information to replace

Search through `index.html` for these placeholders:

### Couple
- `BRIDE NAME`
- `GROOM NAME`

### Date
- `00 • MONTH • 2026`
- `Saturday, 00 Month 2026`

### Time
- `00:00 PM onwards`

### Venue
- `Venue Name`
- `Full venue address goes here`
- `City, State, PIN`

### Families
- `Family Name`
- `Parent Name · Parent Name`

### Story
Replace the three timeline descriptions with the couple's real story.

### Gallery
Replace the placeholder photo blocks with actual images.

## ⏳ Countdown

Open `script.js` and edit:

```js
const EVENT_DATE = "2026-12-12T19:00:00";
```

Use:

```text
YYYY-MM-DDTHH:MM:SS
```

Example:

```js
const EVENT_DATE = "2027-01-24T19:30:00";
```

The countdown automatically updates every second.

## 📍 Google Maps

In `script.js`, replace:

```js
const MAP_URL = "https://maps.google.com/";
```

with the actual Google Maps link for the venue.

## 📸 Adding real photos

Put your images inside:

```text
assets/
```

Then you can change a gallery block from:

```css
.photo-1 {
  min-height: 350px;
}
```

to:

```css
.photo-1 {
  min-height: 350px;
  background-image: url("assets/couple.jpg");
}
```

Do the same for the other photos.

## 🎵 Background music

The current music button is intentionally only a placeholder.

If music is added later, use a properly licensed/local audio file and an `<audio>` element. Keep autoplay off unless the visitor explicitly starts it, because browsers commonly block unexpected autoplay.

## 🚫 RSVP

The RSVP section has intentionally NOT been included.

## ▶️ Run locally

The simplest option is to open:

```text
index.html
```

in a browser.

For development, VS Code + Live Server is recommended.

## 🌐 Deployment

This is a static website, so it can be hosted on any static hosting service.

Before publishing:
1. Replace all placeholder text.
2. Add the real photos.
3. Add the real map link.
4. Update the countdown date/time.
5. Test on a phone.
6. Test every button and image.
7. Share the final URL.

## 🎨 Customization

Main colours are defined at the top of `style.css`:

```css
:root {
  --cream: #f7f0e5;
  --paper: #fbf7ef;
  --ink: #403a33;
  --muted: #7e756b;
  --gold: #b4935a;
  --dark: #302a25;
}
```

Change these values to create a different colour palette.

## Important

The placeholder artwork is included only so the project works immediately. Replace it with your own couple/venue photographs or commissioned artwork before the final invitation is shared.

---

### Future upgrade ideas

- Real floral illustrations matching the reference
- More sophisticated curtain artwork
- Page-turn style transitions
- Animated gold particles
- Custom couple monogram
- Photo lightbox
- Better mobile touch interactions
- Optional background music
- Personalized invitation URL
- Share button
- QR code for the invitation


## ✨ Visual update

The current version now includes reference-inspired original CSS/SVG-style visuals:
- Ornate framed invitation card
- Botanical corner ornaments
- Illustrated celebration venue
- Chandelier decoration
- Vintage car illustration
- Dress-code people motif
- Decorative separators and gold detailing
- More editorial invitation-card typography

These are lightweight, code-based visuals so the website stays fast and easy to customize. Replace them with real photographs or custom artwork when the final invitation content is available.


## 🎬 Cinematic opening update

The opening now uses a layered invitation-card composition:
- Full-screen curtain reveal
- Fabric-fold illusion using CSS gradients
- Gold curtain tie details
- Glowing invitation card
- Ornate inner borders
- Script + serif name hierarchy
- Invitation card scales into place
- Optional "OPEN INVITATION" control
- Animated background breathing/glow

The visuals are original CSS/code artwork inspired by the mood and composition of the supplied reference video, rather than a direct copy of its artwork.


---

## ✨ Premium pass

The visual language, palette, fonts and class names are unchanged. What changed is the
craft underneath them.

### Ornaments are now real vector artwork

Every decorative element used to be a Unicode glyph — `❦ ❧ ✦ ♠ ♟ ♢`. Those render
differently on every device (and on some Android builds they fall back to an emoji),
which was the single biggest thing making the page read as a template.

They are now hand-drawn SVG symbols, defined once at the top of `index.html` inside
`<svg class="sprite">` and reused anywhere:

```html
<svg class="orn" viewBox="0 0 120 120"><use href="#spray"/></svg>
```

Available symbols:

| id | what it is |
|---|---|
| `#spray` | botanical corner spray |
| `#divider` | ornamental rule with a centre bloom |
| `#bloom` | small flower / bullet mark |
| `#wreath` | monogram wreath |
| `#chandelier` | crystal chandelier |
| `#venue` | pavilion with cypress and fountain |
| `#car` | vintage motor car |
| `#figures` | dress-code guest line-up |
| `#arch` | floral arch |

They inherit `currentColor`, so recolouring one is just a CSS `color` change.
Scale them by setting `width` / `height` on the wrapper — the stroke weight holds
because of `vector-effect: non-scaling-stroke`.

### Gold is now foil, not flat paint

`--gold` is still there for hairlines and borders, but display type uses a
`--foil` gradient clipped to the text, so script headings catch light across the
letterforms the way real foil stamping does. After the curtains part, a single
sheen sweeps across the couple's names once, then never again.

### Other refinements

- **Curtains** — velvet fold shading, a gold trim on the leading edge, a tassel
  hanging from each tie-back, and a scalloped pelmet across the top.
- **Paper** — a two-layer fine grain plus a room-light falloff, instead of one
  coarse dot screen.
- **Cards** — layered inset rules and a proper cast shadow so they sit on the
  page rather than floating flat against it.
- **Countdown** — tabular figures so digits stop jittering each second, hairline
  column rules, and a garland of bulbs positioned along the swag curve in JS.
- **Typography** — sentence case with letter-spacing applied as a type treatment,
  optical indents to correct the tracking on centred lines, and measure capped
  around 46 characters.
- **Motion** — reveals stagger in sequence, and `prefers-reduced-motion` is
  fully respected.
- **Accessibility** — visible focus rings, the music button reports its state
  via `aria-pressed`, and all decorative artwork is `aria-hidden`.

### Background music

`script.js` now has a third setting at the top:

```js
const MUSIC_FILE = null; // e.g. "assets/music.mp3"
```

Leave it `null` and the button stays a silent decoration, exactly as before.
Point it at a properly licensed local file and it becomes a working player —
looped, at 45% volume, and never autoplaying. The visitor always starts it.


---

## 📱 Responsive behaviour

The layout is driven by three fluid tokens at the top of `style.css`, so most
sizing scales continuously rather than jumping at fixed widths:

```css
--gutter:    clamp(20px, 4.2vw, 72px);   /* side padding   */
--section-y: clamp(80px, 10vw, 156px);   /* section rhythm */
--card-pad:  clamp(30px, 5.5vw, 78px);   /* card interiors */
```

Breakpoints only handle things that need to genuinely *change shape*:

| Width | What changes |
|---|---|
| ≤ 359px | Gallery drops to a single column, countdown digits shrink, tighter card padding |
| ≤ 600px | Family cards stack, smaller ornaments, compact curtain hardware |
| ≥ 601px | Larger ornate card, roomier timeline, bigger photos |
| ≥ 900px | Venue becomes two columns, gallery becomes a 3-column mosaic, drapes stay in frame |
| ≥ 1200px | Full desktop scale — larger countdown, wider timeline, bigger monogram |
| ≥ 1600px | Caps growth so nothing stretches on very large displays |

### Two things worth knowing

**The curtains behave differently on desktop.** On phones they clear the screen
entirely. From 900px up they stop at 74%, leaving a drape down each edge so the
invitation card stays framed instead of floating in an empty field. Adjust in the
`@media (min-width: 900px)` block.

**Landscape phones get their own rules.** A `max-height: 560px` query collapses
the full-height sections and shrinks the invitation card, so holding the phone
sideways doesn't push the card off both edges.

### Also handled

- `@media (hover: none)` — hover effects are disabled on touch, so tapping a
  photo doesn't leave it stuck in its hover state.
- `@media (pointer: coarse)` — buttons get larger tap targets on touch devices.
- `@media print` — the curtains, loader and music button are hidden and the dark
  closing section inverts, so the page prints cleanly.

Verified with no horizontal overflow from 320px through 2560px, plus landscape.
