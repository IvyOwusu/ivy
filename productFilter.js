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

// fix in the other links
const products = document.querySelectorAll(".product-item");
Array.from(products).forEach((product) => {
  const name = product.querySelector("h5").textContent.trim();

  const linkTags = product.querySelectorAll('[data-use="whatsapp"]');
  Array.from(linkTags).forEach((tag) => {
    tag.href = `
   https://wa.me/+233503946044?text=Hi%20there%20I%20would%20like%20to%20place%20an%20order%20for%20the%20perfume%20which%20has%20the%20name:%20${name}`;
  });
});
