# Cal Hacks Fellowship Site

This repository contains the source for the website for [Cal Hacks Fellowship](https://fellowship.calhacks.io), a spring-semester accelerator program hosted by Cal Hacks at UC Berkeley.

The site is currently under active development.

## Development

If you want to work on building and improving this site, read on.

### Setup

To build the site, you'll need [Hugo](https://gohugo.io), a fast, modern static site generator written in Go. On macOS, you can install Hugo with

```sh
brew install hugo
```

If you're on another operating system, check out [Hugo's installation guide](https://gohugo.io/getting-started/installing/).

Once you have Hugo installed, `git clone` this repository and run `hugo`. You should see a new folder called `public/`, where Hugo generated our static website from our templates (inside `layout/`) and content (inside `content/`).

For developing the site, it's convenient not to have to run `hugo` with every change. If you run `hugo server -D`, you can open up `localhost:1313` on your computer and see the site as you update / save changes to the source files.

### Writing code

There are two main folders you should worry about -- `static/` and `layouts/`.

`layouts/` holds all of our Hugo templates, as `.html` files. The structure of the layout folder should be pretty self-explanatory, since it mirrors the structure of the content we've written. Hugo templates use double-curly-braces (`{{ ... }}`) to include variables or other parts inside templates. You can modify bits of these layout template files to change the HTML produced for certain pates.

Of note: if you want to change the layout of the main page, update `layouts/index.html`. If you want to work on a curriculum page, update `_defaults/single.html`.

`static/` holds all of our static assets that isn't HTML, like CSS, JavaScript, PDFs, images, and so on. These are linked from our HTML templates using a template variable, which you shouldn't have to worry too much about. These are simple CSS and JS files.

### Writing content

When we say "content", we really mean our workshop articles about entrepreneurship in the `library/` section of the site. If you want to change what our homepage says, for example, please read the "Writing code" section above.

If you want to add or propose changes / corrections to our curriculum posts, you'll find all of those as Markdown text files under `content/library/wkXX-XXXXX.md`. You can make changes to those files (or add another one for another topic), re-build the site, and see those new posts under the library section of the site.

## Contributing

We welcome contributions, both technical and informational. If you have feedback, questions, concerns, or ideas. please open a pull request!

