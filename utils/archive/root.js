module.exports = function (c) {

  let addedCss = `
  /*--*/
  :root {
    --primaryBg:  ${c.primaryBg};
    --primaryBg3: ${c.primaryBg3};
    --primaryTxt: ${c.primaryTxt};
    --primaryTxt2: ${c.primaryTxt2};
    --primaryTxt3: ${c.primaryTxt3};

    --accentBg: ${c.accentBg};
    --accentG: ${c.accentBg};
    --accentRGBA: ${c.accentRGBA};
    --accentTxt: ${c.accentTxt};

    --brandG: ${c.brandBg};
    --brandBg: ${c.brandBg};
    --brandTxt: ${c.brandTxt};

    --actionButtonG: ${c.accentBg};
    --actionButtonTxt: ${c.accentTxt};

    --widgetG: ${c.widgetBg};
    --widgetBg: ${c.widgetBg};
    --widgetBg2: ${c.widgetBg2};
    --widgetBg3: ${c.widgetBg3};
    --widgetRGBA: ${c.widgetRGBA};
    --widgetTxt: ${c.widgetTxt};
    --widgetTxt2: ${c.widgetTxt2};
    --widgetTxt3: ${c.widgetTxt3};

    --oddG: ${c.oddBg};
    --oddBg: ${c.oddBg};
    --oddTxt: ${c.oddTxt};
    --oddTxt2: ${c.oddTxt2};

    --showMoreG: ${c.showMoreBg};
    --showMoreBg: ${c.showMoreBg};
    --showMoreTxt: ${c.showMoreTxt};
    --showMoreTxt2: ${c.showMoreTxt2};

    --headerBG: ${c.headerBG};
    --headerG: ${c.headerBG};
    --headerTxt: ${c.headerTxt};

    --popupHeaderG: ${c.modalHeaderBg};
    --popupHeaderBg: ${c.modalHeaderBg};
    --popupHeaderTxt: ${c.modalHeaderTxt};

    --popupBg: ${c.modalContentBg};
    --popupG: ${c.modalContentBg};
    --popupTxt: ${c.modalContentTxt};
    --popupTxt2: ${c.modalContentTxt2};

    --tabG: ${c.tabBg};
    --tabBg: ${c.tabBg};
    --tabTxt: ${c.tabTxt};
    --tabTxt2: ${c.tabTxt2};

    --activeTabG: ${c.tabActiveBg};
    --activeTabBg: ${c.tabActiveBg};
    --activeTabTxt: ${c.tabActiveTxt};

    --sideBarTabG: ${c.tabBg};
    --sideBarTabTxt: ${c.tabTxt};

    --sideBarActiveTabG: ${c.tabActiveBg};
    --sideBarActiveTabTxt: ${c.tabActiveTxt};

    --inputG: ${c.inputBg};
    --inputBg: ${c.inputBg};
    --inputBg2: ${c.inputBg2};
    --inputTxt:  ${c.inputTxt};
    --inputTxt2: ${c.inputTxt2};

    --borderRadius: 2px;
    --inputBirderRadius:  2px;
    --bottomBirderRadius:  2px;

}
/*---*/
`;

  return addedCss;
}