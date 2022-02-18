/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Vertical extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Vertical/costumes/costume1.svg", {
        x: 244.9472275612593,
        y: 240.27761984260223
      }),
      new Costume("costume2", "./Vertical/costumes/costume2.svg", {
        x: 244.9472275612593,
        y: 240.27761984260223
      }),
      new Costume("costume3", "./Vertical/costumes/costume3.svg", {
        x: 244.94722756125933,
        y: 240.27761984260223
      })
    ];

    this.sounds = [new Sound("pop", "./Vertical/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceivePlay() {
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenGreenFlagClicked() {
    yield* this.wait(0.001);
    this.costume = "" + "costume" + this.stage.vars.maps;
  }
}
