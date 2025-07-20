// Render portfolio data using Materialize components
// Copilot suggested mapping arrays to list items, which was adapted here.

(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const p = window.portfolio || {};
    const container = document.getElementById('portfolio');
    if (!container) return;
    container.innerHTML = `
      <div class="card-image center-align">
        <img src="${p.personal.photo}" alt="foto" class="circle responsive-img" style="width:150px">
        <span class="card-title">${p.personal.name}</span>
      </div>
      <div class="card-content">
        <p class="grey-text text-darken-2">Tel: ${p.personal.phone}</p>
        <h5>Skills</h5>
        <ul class="collection">
          ${p.skills.map(s => `<li class="collection-item">${s}</li>`).join('')}
        </ul>
        <h5>Projects</h5>
        <ul class="collection">
          ${p.projects.map(pr => `<li class="collection-item">${pr.name}</li>`).join('')}
        </ul>
      </div>`;
  });
})();
