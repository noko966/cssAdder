const fs = require("fs");
const ncp = require('ncp').ncp;
const chalk = require("chalk");
const {
  guessVisibleColor
} = require('./utils/guessVisibleColor');
const map = require("./utils/mapping/map");
const tinycolor = require("tinycolor2");

const source = './files';
const destination = './filesProcessed';

const successArray = [];
const failArray = [];

const partners = fs.readdirSync(source);

const generateCss = require('./utils/archive/root');

ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  replaceCssFiles();
});

function replaceCssFiles() {
  partners.forEach(partner => {
    let id = +partner;
    let cssLocation = `${source}/${partner}/Styles/web.css`;
    let cssContent;
    try {
      cssContent = fs.readFileSync(cssLocation, "utf8");
    } catch (err) {
      console.error(
        chalk.bold.red(
          "  ❌  No css file in ։ " +
          chalk.white.bgRed(id) + " folder"
        )
      );
    }

    let p = map.find(i => i.id === id);

    if (!p) return failArray.push(id);

    let theme = {};

    function generateColorLogick(color) {
      let _color, _gradient, g, bg, bgHover, bg2, bg2Hover, bg3, bg3Hover, bgRGBA, txt, txt2, txt3;
      if (Array.isArray(color)) {
        let str = color.join();
        _gradient = `linear-gradient(${str})`;
        _color = color[0];
      } else {
        _gradient = color;
        _color = color;
      }
      g = _gradient;
      bg = _color;
      bgHover = tinycolor(bg).darken(10).toString() === "#000000" ? tinycolor(bg).lighten(10).toString() : tinycolor(bg).darken(10).toString();

      bg2 = tinycolor(bg).darken(10).toString() === "#000000" ? tinycolor(bg).lighten(10).toString() : tinycolor(bg).darken(10).toString();
      bg2Hover = tinycolor(bg).darken(10).toString() === "#000000" ? tinycolor(bg).lighten(10).toString() : tinycolor(bg).darken(10).toString();

      bg3 = tinycolor(bg).darken(12).toString() === "#000000" ? tinycolor(bg).lighten(15).toString() : tinycolor(bg).darken(12).toString();
      bg3Hover = tinycolor(bg).darken(12).toString() === "#000000" ? tinycolor(bg).lighten(15).toString() : tinycolor(bg).darken(12).toString();


      bgRGBA = tinycolor(bg).setAlpha(.6).toString();

      txt = guessVisibleColor(bg);
      txt2 = txt === "#000" ?
        tinycolor(txt).lighten(30).toString() :
        tinycolor(txt).darken(30).toString();
      txt3 = txt === "#000" ?
        tinycolor(txt).lighten(40).toString() :
        tinycolor(txt).darken(40).toString();

      return [
        g, bg, bgHover, bg2, bg2Hover, bg3, bg3Hover, bgRGBA, txt, txt2, txt3
      ];
    }


    let colors = ["primary", "accent", "widget", "brand", "input", "header", "modalHeader", "modalContent", "odd", "oddActive", "showMore", "tab", "tabActive"];

    colors.forEach(color => {
      [
        theme[color + "G"],
        theme[color + "Bg"],
        theme[color + "BgHover"],
        theme[color + "Bg2"],
        theme[color + "Bg2Hover"],
        theme[color + "Bg3"],
        theme[color + "Bg3Hover"],
        theme[color + "RGBA"],
        theme[color + "Txt"],
        theme[color + "Txt2"],
        theme[color + "Txt3"]
      ] = generateColorLogick(p[color]);
    })

    let css = generateCss(theme);

    successArray.push(id);

    let processedCssLocation = `${destination}/${partner}/Styles/web.css`

    fs.writeFileSync(processedCssLocation, `${css}${cssContent}`.replace(/[\u200B-\u200D\uFEFF]/g, ''));

  });

  if (successArray.length) {
    console.log(
      chalk.green(
        `  ✔  Operation has been successful for ${chalk.black.bgGreen(
              successArray.length
          )} partners.`
      )
    );
  }

  if (failArray.length) {
    console.error(
      chalk.bold.red(
        "  ❌  No partner mapping found for the following partners։ " +
        chalk.white.bgRed(failArray)
      )
    );
  }
}