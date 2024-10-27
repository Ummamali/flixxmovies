// Contains all utlity

function createCustomElement(tagname, { children = [], ...props }) {
  const newEl = document.createElement(tagname);

  for (const [attr, value] of Object.entries(props)) {
    newEl.setAttribute(attr, value);
  }

  for (const child of children) {
    if (typeof child === "string") {
      newEl.appendChild(document.createTextNode(child));
    } else {
      newEl.appendChild(child);
    }
  }

  return newEl;
}
