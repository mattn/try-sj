window.addEventListener("DOMContentLoaded", () => {
  const elems = document.querySelectorAll('[sj-app]');
  for (let i=0, l=elems.length; i<l; ++i) {
    const elem = elems[i];
    const template = document.createElement("sj-template");
    template.setAttribute('sj-app', elem.getAttribute('sj-app'))
    template.innerHTML = elem.innerHTML;
    elem.parentNode.replaceChild(template, elem);
  }
  customElements.define('sj-template', class extends sj.Element {
    template() { return this.innerHTML; }
  });
});
