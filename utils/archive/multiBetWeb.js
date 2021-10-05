module.exports = function(theme){
    let addedCss = `
/*multi bet of the day skinning*/
.tg__exp_of_day_header,
.es__express_slider_arrow{
	background-color: ${theme.widgetBg};
	color: ${theme.widgetTxt2};
}
.es__express_slider_arrow:hover {
	background-color: ${theme.widgetBg2};
	color: ${theme.widgetTxt};
}
.tg__exp_of_day_one_game {
	background-color: ${theme.widgetBg};
	color: ${theme.widgetTxt2};
	border-bottom: 1px solid ${theme.primaryBg} !important;
}
.es__total_odd_container .tg-clr-secondary {
	color: ${theme.widgetTxt2};
}

.tg__exp_of_day_one_game .tg-ico,
.digi-pv-multibets-event-name-container {
	color: ${theme.widgetTxt};
}
.es__express_day_odd {
	border-color: ${theme.primaryBg};
  color: ${theme.widgetTxt2};
}
.es__bonus_odd_container,
.es__express_day_coupon-button-container {
	background-color: ${theme.widgetBg2};
	color: ${theme.widgetTxt2};
}
.es__bonus_odd_container i,
.es__express_day_odd--total{
	color: ${theme.accentBg};
}
.es__express_day_coupon {
	background-color: ${theme.widgetBg};
	color: ${theme.widgetTxt2};
}
/*multi bet of the day skinning*/
`;

    return addedCss;
}
