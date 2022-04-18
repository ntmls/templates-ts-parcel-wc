const template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<div>
    <h1>Application Template</h1>
</div>
`;

export class App extends HTMLElement {
    
    constructor() {
        super();
        document.body.appendChild(template.content.cloneNode(true)); 
    }

    connectedCallback(): void {
        // todo      
    }

    disconnectedCallback(): void {
        // todo
    }

}
   
console.log("done");
customElements.define('app-root', App);