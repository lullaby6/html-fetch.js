if (!window.lyComponentConfig) window.lyComponentConfig = {
    renderComponent: async component => {
        if (!component.hasAttribute('src')) return
        if (component.componentRendered) return
        component.componentRendered = true

        let src = component.getAttribute('src')
        if (!src.endsWith('.html')) src += '.html'

        const res = await fetch(src);
        const text = await res.text();

        if (component.componentHTML == undefined) component.componentHTML = component.innerHTML

        if (component.componentHTML.length > 0 && !component.hasAttribute('children')) {
            component.setAttribute('children', component.componentHTML);
        }

        component.innerHTML = '';

        const regex = /\{(\w+)\}/g;

        let root = component

        if (component.shadowRoot) {
            root = component.shadowRoot
        } else if (component.hasAttribute('shadow-dom')) {
            component.attachShadow({mode: "open"});

            root = component.shadowRoot
        }

        root.innerHTML = text.replace(regex, (match, att) => component.getAttribute(att) || '')

        window.lyComponentConfig.loadScripts(root)

        window.lyComponentConfig.renderContainer(component)
    },

    loadScripts: component => {
        const scripts = component.querySelectorAll('script')

        scripts.forEach(async script => {
            const element = document.createElement('script')

            if (script.hasAttribute('src')) {
                const res = await fetch(script.getAttribute('src'))
                const text = await res.text()

                element.innerHTML = text
            } else element.innerHTML = script.innerHTML

            document.querySelector('head').appendChild(element)

            script.remove()
        })
    },

    renderContainer: container => {
        const components = container.querySelectorAll('ly-component')

        components.forEach(window.lyComponentConfig.renderComponent)

        const elements = container.querySelectorAll('[on]')

        elements.forEach(element =>
            element.getAttribute('on').split(' ').forEach(on => {
                const [eventName, methodName] = on.split('-')

                element.addEventListener(eventName, event => window[methodName](event))

                if(eventName == 'load') element.dispatchEvent(new Event('load'))
            })
        )
    },

    load: () => {
        window.lyComponentConfig.renderContainer(document.body)

        window.lyComponentConfig.observer = new MutationObserver(changes => {
            window.lyComponentConfig.renderContainer(document.body)

            changes.forEach(change => {
                if (change.type == 'attributes' && change.target.tagName.toLowerCase() == 'ly-component') {
                    change.target.componentRendered = false
                    window.lyComponentConfig.renderComponent(change.target)
                }
            })
        })

        window.lyComponentConfig.observer.observe(document.body, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
        });
    }
}

document.addEventListener('DOMContentLoaded', window.lyComponentConfig.load)