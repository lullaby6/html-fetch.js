# html-component

## Installation

```html
<script src='https://cdn.jsdelivr.net/gh/lullaby6/html-component/html-component.min.js' defer></script>
```

## Getting Started

Using basic component
```html
<!-- index.html -->
<html-c src='./components/header.html'></html-c>
```

header.html file:
```html
<!-- components -> header.html -->
<header>
    <img src="logo.png">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</header>
```


### Shadow DOM

You can create Components with Shadow DOM, only add attribute 'shadow-dom' to the html-c tag

```html
<!-- index.html -->
<html-c shadow-dom src='./components/header.html'></html-c>
```

The styles and scripts elements only works in the component, so you can style html tags without a class
```html
<!-- components -> header.html -->
<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 25px;
    }

    ul {
        display: flex;
        gap: 5px;
    }

    a {
        text-decoration: none;
    }
</style>
<header>
    <img src="logo.png">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</header>
```