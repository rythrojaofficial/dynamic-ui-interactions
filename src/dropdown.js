export function populateDropdown(arrayOfDropdownElements) {
  arrayOfDropdownElements.forEach((ddEl) => {
    // hide Elements
    let childrenArray = Array.from(ddEl.children);
    let status = "block";
    childrenArray.forEach((el) => {
      el.style.display = status;
    });
    // add button
    ddEl.addEventListener("click", () => {
      switch (status) {
        case "none":
          childrenArray.forEach((el) => {
            el.style.display = "block";
          });
          status = "block";
          break;
        case "block":
          childrenArray.forEach((el) => {
            el.style.display = "none";
          });
          status = "none";
          break;
      }
    });
  });
}
