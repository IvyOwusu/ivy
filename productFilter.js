const filter = document.querySelector("#pfilter");

const sections = document.querySelectorAll("[data-name]");
const emptyFilterState = document.querySelector("option[value=''");

// ensure filter is at default state
emptyFilterState.textContent = "Add filter";
filter.value = "";

filter.addEventListener("change", (e) => {
  // console.log(e.target.value);
  showFiltered(e.target.value);
});

function showFiltered(sectionName) {
  sections.forEach((section) => {
    if (sectionName == "") {
      emptyFilterState.textContent = "Add filter";
      section.classList.remove("hidden");
    } else if (section.dataset.name != sectionName) {
      console.log({ sectionName });
      section.classList.add("hidden");
      emptyFilterState.textContent = "Remove filter";
    } else {
      console.log(section);
      section.classList.remove("hidden");
    }
  });
}
