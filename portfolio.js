const portfolio = {
  personal: {
    photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2RTfQAAAAASUVORK5CYII=',
    phone: '+34 600 123 456',
    name: 'Juan Pérez'
  },
  skills: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'],
  projects: [
    { name: 'Project One', url: '#' },
    { name: 'Project Two', url: '#' },
    { name: 'Project Three', url: '#' }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = portfolio;
} else {
  window.portfolio = portfolio;
}
