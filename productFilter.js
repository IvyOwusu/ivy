const filter = document.querySelector("#pfilter");

filter.addEventListener("change", (e) => {
  showFiltered(e.target.value);
});

const queries = new URLSearchParams(document.location.search);
const filterQuery = queries.get("filter");

const sections = document.querySelectorAll("[data-name]");
const emptyFilterState = document.querySelector("option[value=''");

// ensure filter is at default state
emptyFilterState.textContent = "Add filter";
filter.value = filterQuery ?? "";
filter.dispatchEvent(new Event("change"));

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
