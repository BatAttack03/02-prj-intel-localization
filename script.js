
const rtlLanguages = [
  "ar",  // Arabic
  "fa",  // Persian
  "he",  // Hebrew
  "ur"   // Urdu
];


function updatePageDirection() {

  const pageLanguage =
    document.documentElement.lang
      .toLowerCase()
      .split("-")[0];

  if (rtlLanguages.includes(pageLanguage)) {

    document.documentElement.setAttribute("dir", "rtl");

  } else {

    document.documentElement.setAttribute("dir", "ltr");

  }

}

updatePageDirection();

const languageObserver = new MutationObserver(updatePageDirection);

languageObserver.observe(
  document.documentElement,
  {
    attributes: true,
    attributeFilter: ["lang"]
  }
);