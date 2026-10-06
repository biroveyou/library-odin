<!-- README.md -->
# 📚 Library

🇺🇸 English | [🇧🇷 Português](README.pt-BR.md)

A small web app to keep track of the books you own and which ones you've read. Built to practice working with **JavaScript arrays** and to get a fully **responsive layout using only CSS, with no media queries**.

Part of [The Odin Project](https://www.theodinproject.com) curriculum (Project: Library).

**[Live demo](https://biroveyou.github.io/library-odin/)**

![Library screenshot](./screenshot.png)

## Features
- Add a book through a modal form (title, author, number of pages, read status)
- Toggle a book between "read" and "not read yet" with one click
- Remove books from the library
- Starts with three sample books so the shelf isn't empty
- Required fields and input limits validated by the form
- Bookshelf layout that adapts to any screen size

## What I practiced
- Storing and manipulating objects in **arrays** (`push`, `splice`, `findIndex`)
- Object constructors and **prototype methods** (`Book`, `toggleHaveRead`)
- Unique IDs with `crypto.randomUUID()`
- Building elements dynamically with the **DOM API**
- The native HTML `<dialog>` element and built-in form validation
- Responsive layout in **pure CSS**, without media queries

## Tech Stack
HTML5 · CSS3 · JavaScript (vanilla)

## Getting Started
No build step or dependencies are needed.

```bash
git clone https://github.com/biroveyou/library-odin.git
cd library-odin
```

Then open `index.html` in your browser (or use a tool like VS Code's Live Server).

## Project Structure
```
library-odin/
├── index.html
├── style.css
├── script.js
├── fonts/
└── icons/
```

## Author
Daniel Macêdo · [LinkedIn](https://www.linkedin.com/in/daniel-macêdo) · [GitHub](https://github.com/biroveyou)