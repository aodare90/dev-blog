# Abis Dare · Blog

My personal blog, where I write about front-end web development: what clicks, what breaks, and how I fixed it.

It's a small static site in plain HTML, CSS and JavaScript, with no build step.

## Pages

- `index.html`: home page and post list
- `post.html`: a single post
- `about.html`: about me
- `resume.html`: my resume

Styles live in `styles.css`; `script.js` handles the light and dark theme toggle and small interactions.

## View it locally

Open `index.html` in a browser, or serve the folder so links behave like they will online:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.
