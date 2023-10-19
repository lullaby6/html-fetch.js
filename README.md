# html-component

## Installation

```html
<script src="https://cdn.jsdelivr.net/gh/lullaby6/html-component/html-component.min.js" defer></script>
```

## Usage

### Getting Started

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

### Props

```html
<!-- index.html -->
<html-c logo="logo.png" src="./components/header.html"></html-c>
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

### Children

You can make layouts components using the children prop

```html
<!-- index.html -->
<html-c src="./components/layouts/HeaderLayout.html">
    <img src="logo.png">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</html-c>
```

{children} will be replaced by the content of the html-c tag

```html
<!-- components -> layouts -> HeaderLayout.html -->
<style>
    #my-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 25px;
    }
</style>

<header id="my-header">
    {children}
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
</>
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
like load, click, submit, input, mousenter, mouseleave, focus, blur, etc... and the second argument the function name, note that when you create a function it is stored in window, and what the element does to access the function is to use window[function name] (event)

```html
<script>
    async function login(event){
        event.preventDefault();

        //login logic
    }
</script>

<form listener="submit-login">
    <input type="email" name="email" id="">
    <input type="password" name="password" id="">
    <input type="submit" value="Login">
</form>
```

the listener can have multiple listeners like "submit-login click-say_hi"

### Tips

You can reference html files without .html extension

```html
<html-c src="./components/header"></html-c>
```