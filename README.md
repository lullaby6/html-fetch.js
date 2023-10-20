# HTML-Component Library

## Overview

The HTML-Component library is a lightweight JavaScript library designed to simplify the creation and management of HTML components for web applications. This library allows you to define reusable components, pass data to them, and even encapsulate styles and behavior within a component's Shadow DOM.

## Installation

To get started with the HTML-Component library, include the following script in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/lullaby6/html-component/html-component.min.js" defer></script>
```

## Basic Usage

### Creating a Basic Component

To create a basic component, use the `<html-c>` tag and specify the source (HTML file) of your component. For example:

```html
<!-- index.html -->
<html-c src="./components/header.html"></html-c>
```

Your `header.html` file might look like this:

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

### Using Props

You can pass data to your components using props. Simply add the desired props to the `<html-c>` tag, and use curly braces `{}` in the component file to insert the prop values. For example:

```html
<!-- index.html -->
<html-c logo="logo.png" src="./components/header.html"></html-c>
```

In your `header.html` file, you can use the `logo` prop as follows:

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

### Creating Layout Components with Children

You can design layout components by using the `children` prop. This allows you to embed content within your component. For example:

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

In your `HeaderLayout.html` file, use `{children}` to specify where the embedded content should appear:

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

To encapsulate styles and scripts within a component, add the `shadow-dom` attribute to the `<html-c>` tag. This allows you to create components with a scoped Shadow DOM. Styles and scripts defined within the component will only affect that component. For example:

```html
<!-- index.html -->
<html-c shadow-dom src="./components/header.html"></html-c>
```

In your `header.html` file, you can define styles that apply only to the component:

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

### Event Listeners

To add interactivity to your components, you can attach event listeners using the `listener` attribute. Specify the event (e.g., `click`, `submit`) and the function name. Make sure the function is globally accessible, as it is stored in the `window` object for access. For example:

```html
<script>
    async function login(event){
        event.preventDefault();

        // Login logic
    }
</script>

<form listener="submit-login">
    <input type="email" name="email" id="">
    <input type="password" name="password" id="">
    <input type="submit" value="Login">
</form>
```

You can define multiple listeners by separating them with spaces, like "submit-login click-say_hi."

### Tips

You can reference HTML files without the `.html` extension, making your code more concise:

```html
<html-c src="./components/header"></html-c>
```

This concise syntax simplifies component references within your project.