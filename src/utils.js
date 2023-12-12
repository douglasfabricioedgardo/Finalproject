

export function loadHeaderFooter() {
    const headerTemplateFn = loadTemplate("../partials/header.html");
    const footerTemplateFn = loadTemplate("../partials/footer.html");
    const header = document.querySelector("#main-header")
    const footer = document.querySelector("#main-footer")
    renderWithTemplate(headerTemplateFn,header)
    renderWithTemplate(footerTemplateFn,footer)
  }