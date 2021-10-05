module.exports = function(theme){
    let addedCss = `
    /*multi bet of the day*/
    .digi-pv-multibets-header {
      background-color:${theme.headerBg};
      color:${theme.headerTxt};
    }
    .digi-pv-multibets-event-info {
      background-color: ${theme.widgetBg};
      color: ${theme.widgetTxt2};
    }
    .digi-pv-multibets-event-info .tg-ico{
        color: ${theme.widgetTxt};
    }
    .digi-pv-multibets-event-odd-container,
    .digi-pv-multibets-bonus-odd-container,
    .digi-pv-multibets-total-odds-container {
      background-color: ${theme.widgetBg2};
      color: ${theme.widgetTxt2};
    }
    .digi-pv-multibets-bonus-odd-container .tg-ico{
        color: ${theme.accentBg}; 
    }
    .digi-pv-multibets-coupon-button {
      background-color: ${theme.accentBg};
      color: ${theme.accentTxt};
    }
    .es__express_day_odd{
      background-color: ${theme.oddBg};
      color: ${theme.oddTxt};
      border:1px solid ${theme.widgetBg};
    }
    /*multi bet of the day*/
    `;

    return addedCss;
}


/*
45
72
109
87
113
143
132
217
216
215
221
*/