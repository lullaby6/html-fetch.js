# html-fetch.js

A lightweight JavaScript library for creating reusable HTML components with dynamic content loading.

## Features

- Easy to use component system
- Dynamic content loading
- Props support
- Layout components with children
- Shadow DOM encapsulation
- Event listener integration
- Automatic script loading
- Mutation observer for dynamic updates

## Installation

### CDN

Include the following script tag in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/lullaby6/html-fetch.js/html-fetch.js"></script>
```

## Basic Usage

Use the <html-fetch> custom element to load HTML components:

```html
<html-fetch src="/components/MyComponent.html"></html-fetch>
```

## Props

Pass data to components using attributes:

```html
<html-fetch src="/components/Title.html" title="Welcome"></html-fetch>
```

In your component file (Title.html):

```html
<h1>{title}</h1>
```

## Layouts with Children

Create layout components that can wrap other content:

```html
<html-fetch src="/layouts/Card.html">
    <h2>Card Title</h2>
    <p>Card content goes here.</p>
</html-fetch>
```

In your layout file (Card.html):

```html
<div class="card">
    {children}
</div>
```

## Shadow DOM

Use Shadow DOM for style encapsulation:

```html
<html-fetch src="/components/IsolatedComponent.html" shadow-dom></html-fetch>
```

## Event Listeners

Add event listeners to elements within components:

```html
<script>
    function handleClick(event) {
        // logic
    }
</script>

<button on="click-handleClick">Click me</button>
```

## API Reference

### Attributes

| Key | Description |
|-----------------|----------------------------------------------------------------------------|
| src | Path to the HTML file to be loaded (required) |
| shadow-dom | Enable Shadow DOM for the component |
| children | Content to be inserted into the component (automatically set) |
| on | Space-separated list of event-handler pairs |

### Methods

| Method | Description |
|-----------------|----------------------------------------------------------------------------|
| HTMLFetchConfig.render(component) | Manually render a component |
| HTMLFetchConfig.renderContainer(container) | Render all components within a container |
| HTMLFetchConfig.loadScripts(component) | Load and execute scripts within a component |

## Events

The library automatically sets up a MutationObserver to watch for changes in the DOM and re-render components as needed.

## Examples

### Basic Component

```html
<!-- index.html -->
<html-fetch src="/components/Header.html"></html-fetch>

<!-- /components/Header.html -->
<header>
    <h1>My Website</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>
```

### Component with Props

```html
<!-- index.html -->
<html-fetch src="/components/UserProfile.html" name="John Doe" avatar="/images/john.jpg"></html-fetch>

<!-- /components/UserProfile.html -->
<div class="user-profile">
    <img src="{avatar}" alt="{name}">
    <h2>{name}</h2>
</div>
```

### Layout Component

```html
<!-- index.html -->
<html-fetch src="/layouts/PageLayout.html">
    <h1>Welcome to My Site</h1>
    <p>This is the main content of the page.</p>
</html-fetch>

<!-- /layouts/PageLayout.html -->
<div class="page-layout">
    <header><!-- Header content --></header>
    <main>{children}</main>
    <footer><!-- Footer content --></footer>
</div>
```