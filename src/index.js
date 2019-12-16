import template from './templates/simple.html'

class ShadowTemplate extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({mode: 'closed'});

    let wrapper = document.createElement('div');
    wrapper.setAttribute('class','wrapper');
    let info = document.createElement('span');
    info.setAttribute('class','info');
    let text = this.getAttribute('text');
    info.textContent = text;

    let style = document.createElement('style');
    style.textContent = '.info {color: red}'

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(info);
  }
}
customElements.define('shadow-template', ShadowTemplate);



class NoShadowTemplate extends HTMLElement {
  constructor() {
    super();

    let wrapper = document.createElement('div');
    wrapper.setAttribute('class','wrapper');
    let info = document.createElement('span');
    info.setAttribute('class','info');
    let text = this.getAttribute('text');
    info.textContent = text;

    let color = this.getAttribute('color');
    if (color){
      let style = document.createElement('style');
      style.textContent = `.info {color: ${color}}`
      this.appendChild(style);
    }
    
    this.appendChild(wrapper)
    wrapper.appendChild(info);
  }
}
customElements.define('no-shadow-template', NoShadowTemplate);


class ExternalHtmlShadowTemplate extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({mode: 'closed'});
    let wrapper = document.createElement('div');
    let color = this.getAttribute('color');

    if (color){
      let style = document.createElement('style');
      style.textContent = `.info {color: ${color}}`
      shadow.appendChild(style);
    }
    wrapper.innerHTML = template;
    shadow.appendChild(wrapper)
  }
}

customElements.define('external-html-shadow-template', ExternalHtmlShadowTemplate);






class ShadowTemplateWithEvents extends HTMLElement {

  constructor() {
    super();

    let shadow = this.attachShadow({mode: 'closed'});

    let wrapper = document.createElement('div');
    wrapper.setAttribute('class','wrapper');

    let btn = document.createElement('button');
    btn.setAttribute('class','btn');

    let text = this.getAttribute('text');
    btn.textContent = text;
    
    btn.addEventListener("click", ()=>{
      let event = new CustomEvent('shadow-template-w-events.click', {detail: Math.random()*50});
      this.dispatchEvent(event);
    });

    shadow.appendChild(wrapper);
    
    wrapper.appendChild(btn);
  }
}
customElements.define('shadow-template-w-events', ShadowTemplateWithEvents);