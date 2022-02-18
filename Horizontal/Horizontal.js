/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Horizontal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Horizontal/costumes/costume1.svg", {
        x: 240,
        y: 183.00738
      }),
      new Costume("costume2", "./Horizontal/costumes/costume2.svg", {
        x: 240,
        y: 183.00738
      }),
      new Costume("costume3", "./Horizontal/costumes/costume3.svg", {
        x: 239.99999999999994,
        y: 183.00737992039993
      })
    ];

    this.sounds = [new Sound("pop", "./Horizontal/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceivePlay() {
    this.moveAhead();
  }

  *whenGreenFlagClicked() {
    this.stage.vars.maps = this.random(1, 3);
    this.costume = "" + "costume" + this.stage.vars.maps;
  }
}
