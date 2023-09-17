Readme

1) Vytvoreni globalniho adresare projektu
2) instalace bootstrapu

npm install bootstrap@5.3.0

3) vytvoreni zakladni html stranky v koreni projektu

4) vytvoreni slozky scss v koreni projektu
5) vytvoreni souboru custom.scss ve slozce scss

6) vlozeni kodu:

// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

/* vlozeno z bootstrap stranky - jako priklad zmeny barvy*/
//$primary: #0074d9;
//$danger: #ff4136;

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here


7) instalace Sass

# Install Sass globally - nejsem si jisty zda je nutne, ale dole se objevi Watch Sass ikonka..
npm install -g sass

8) ve slozce scss se objevi soubory custom.css a custom.css.map.

9) uz muzu upravovat html, kde si asi musim nastavit cesty ke stylum...
 a) uprava hlavicky a nastaveni cesty ke stylum....
