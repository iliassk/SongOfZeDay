import people from "./people.js";

export function init() {
  const root = document.createElement("div");
  root.innerHTML = `<p>There'rre ${people.length} people in the room.</p>`;
  document.body.appendChild(root);
}
