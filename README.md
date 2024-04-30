# Ly Component

## Table of Contents
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Props](#props)
- [Layouts](#layouts)
- [Shadow DOM](#shadow-dom)
- [Events](#events)
- [Tips](#tips)

## Installation

```html
<script src="https://cdn.jsdelivr.net/gh/lullaby6/ly-component/cdn.js" defer></script>
```

## Basic Usage

The components are basically html files that you can call from the `ly-component` element with the `src` attribute.

for example we have this file in the path `/components/MyComponent.html`:

```html
<div>
    <h1>My Component</h1>
</div>
```

and in our html we would use the `ly-component` element and we would indicate the path through the `src` attribute:

```html
<ly-component src="/components/MyComponent.html"/>
```

## Props

To set the properties of the components, do it through the attributes and you can get the property/attribute through `{<attribute name>}`

For example:

```html
<ly-component src="/components/Title.html" title="Game of Thrones"/>
```

`Title` component:

```html
<h1>{title}</h1>
```