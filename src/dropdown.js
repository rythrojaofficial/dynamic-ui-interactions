export function populateDropdown(arrayOfDropdownElements) {
  arrayOfDropdownElements.forEach((ddEl) => {
    // hide Elements
    let childrenArray = Array.from(ddEl.children);
    let status = "hidden";
    childrenArray.forEach((el) => {
      el.style.visibility = "hidden";
    });
    // add button
    ddEl.addEventListener("click", () => {
      switch (status) {
        case "hidden":
          childrenArray.forEach((el) => {
            el.style.visibility = "visible";
          });
          status = "visible";
          break;
        case "visible":
          childrenArray.forEach((el) => {
            el.style.visibility = "hidden";
          });
          status = "hidden";
          break;
      }
    });
  });
}
