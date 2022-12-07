"use strict";
class Estudiante {
  constructor(Javascript, HTML, CSS) {
    this.Javascript = Javascript;
    this.HTML = HTML;
    this.CSS = CSS;
  }

  ObtenDatos() {
    super(this.Javascript, this.HTML, this.CSS);
  }
}

let estudiante_2 = ObtenDatos();
