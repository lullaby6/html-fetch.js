# html-component

## Installation

```html
<script src="https://cdn.jsdelivr.net/gh/lullaby6/html-component/html-component.min.js" defer></script>
```

## Getting Started

Using basic component
```html
<!-- index.html -->
<html-c src="./components/header.html"></html-c>
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

### Component Props

```html
<!-- index.html -->
<html-c logo="logo.npng" src="./components/header.html"></html-c>
```

```html
<!-- components -> header.html -->
<header>
    <img src="{logo}">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</header>
```

### Shadow DOM

You can create Components with Shadow DOM, only add attribute "shadow-dom" to the html-c tag

```html
<!-- index.html -->
<html-c shadow-dom src="./components/header.html"></html-c>
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

### Listeners

The listeners will allow you to add interactivity to the elements

To add a listener to an element add the attribute 'listener' and the first argument is the event
like load, click, submit, input, mousenter, mouseleave, focus, blur, etc... and the second argument the function name, to make a function you need add to add a value to window.HTMLComponentProps

```html
<script>
    window.HTMLComponentProps['redirect'] = event => {
        window.location.href = 'index.html'
    }
</script>
<header>
    <img listener="click-redirect" src="logo.png">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</header>
```