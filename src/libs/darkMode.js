export function darkMode (btnMode) {
  const d = document;
  let $elementThemeFondo = d.querySelectorAll("[data-theme-dark-bg]");
  let $elementThemeFondoHover = d.querySelectorAll("[data-theme-dark-bg-hover]");
  let $elementThemeShadow = d.querySelectorAll("[data-theme-dark-sh]");
  // let $elementThemeShadowHover = d.querySelectorAll("[data-theme-dark-sh-hover]");
  
  let $elementThemeBorder = d.querySelectorAll("[data-theme-dark-br]");
  let $elementThemeBorderX = d.querySelectorAll("[data-theme-dark-br-x]");
  let $elementThemeBorderY = d.querySelectorAll("[data-theme-dark-br-y]");

  let $elementThemeText = d.querySelectorAll("[data-theme-dark-tx]");
  // let $elementThemeTextHover = d.querySelectorAll("[data-theme-dark-tx-hover]");
  // let $btnMode = d.getElementById(btnMode);

  function loadPage () {
    if (localStorage.getItem("darkmode") === "true") {
      $elementThemeFondo.forEach(el => el.style.background = el.dataset.themeDarkBg);
      $elementThemeFondoHover.forEach(el => el.style.background = el.dataset.themeDarkBg);
      
      $elementThemeText.forEach(el => el.style.color = el.dataset.themeDarkTx);

      $elementThemeShadow.forEach(el => el.style.boxShadow = el.dataset.themeDarkSh);

      $elementThemeBorder.forEach(el => el.style.border = el.dataset.themeDarkBr);
      
      $elementThemeBorderY.forEach(el => {
        el.style.borderTop = el.dataset.themeDarkBrY
        el.style.borderBottom = el.dataset.themeDarkBrY
      });

      $elementThemeBorderX.forEach(el => {
        el.style.borderLeft = el.dataset.themeDarkBrX
        el.style.borderRight = el.dataset.themeDarkBrX
      });

    } else {
      $elementThemeFondo.forEach(el => el.removeAttribute("style"));
      $elementThemeText.forEach(el => el.removeAttribute("style"));
      $elementThemeShadow.forEach(el => el.removeAttribute("style"));

      $elementThemeBorder.forEach(el => el.removeAttribute("style"));
      $elementThemeBorderY.forEach(el => el.removeAttribute("style"));
      $elementThemeBorderX.forEach(el => el.removeAttribute("style"));

    }
  }

  if (btnMode) {
    console.warn("Haz inciado correctamente")
    d.addEventListener("click", e => {
      if (e.target.matches(`#${btnMode}, #${btnMode} *`)) {
        if (localStorage.getItem("darkmode") === 'true') {
          $elementThemeFondo.forEach(el => el.style.background = el.dataset.themeDarkBg);
          $elementThemeFondoHover.forEach(el => el.style.background = el.dataset.themeDarkBg);
          
          $elementThemeText.forEach(el => el.style.color = el.dataset.themeDarkTx);

          $elementThemeShadow.forEach(el => el.style.boxShadow = el.dataset.themeDarkSh);

          $elementThemeBorder.forEach(el => el.style.border = el.dataset.themeDarkBr);
          
          $elementThemeBorderY.forEach(el => {
            el.style.borderTop = el.dataset.themeDarkBrY
            el.style.borderBottom = el.dataset.themeDarkBrY
          });

          $elementThemeBorderX.forEach(el => {
            el.style.borderLeft = el.dataset.themeDarkBrX
            el.style.borderRight = el.dataset.themeDarkBrX
          });
        } else {
          $elementThemeFondo.forEach(el => el.removeAttribute("style"));
          $elementThemeText.forEach(el => el.removeAttribute("style"));
          $elementThemeShadow.forEach(el => el.removeAttribute("style"));

          $elementThemeBorder.forEach(el => el.removeAttribute("style"));
          $elementThemeBorderY.forEach(el => el.removeAttribute("style"));
          $elementThemeBorderX.forEach(el => el.removeAttribute("style"));

        }
      }
    })

    loadPage()

  } else {
    console.warn("Agrega un inicializador")
  }
}