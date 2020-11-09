const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  // when someone clicks on a tab:
    // hide all the other tab panels
    // mark all tabs as not selected
    // mark THIS tab as selected
    // find the associated tab panel and show it

  tabPanels.forEach(panel => panel.hidden = true)

  tabButtons.forEach(button => button.setAttribute("aria-selected", false));

  e.currentTarget.setAttribute('aria-selected', true);

  const id = e.currentTarget.id;
  console.log(id);

  tabPanels.forEach(panel => {
    if (panel.getAttribute('aria-labelledby') === id) {
      panel.hidden = false;
    }
  })
}

tabButtons.forEach(button => {
  button.addEventListener('click', handleTabClick);
});
