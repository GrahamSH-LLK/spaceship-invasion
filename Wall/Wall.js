/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Wall/costumes/costume1.svg", {
        x: 244.94717500000004,
        y: 240.27789
      })
    ];

    this.sounds = [new Sound("pop", "./Wall/sounds/pop.wav")];

    this.triggers = [];
  }
}
