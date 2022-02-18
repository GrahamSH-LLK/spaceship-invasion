/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Grabable extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Grabable/costumes/costume1.svg", {
        x: 225.24774774774775,
        y: 168.24668488713425
      }),
      new Costume("costume2", "./Grabable/costumes/costume2.svg", {
        x: 225.24774774774775,
        y: 168.2466848871343
      }),
      new Costume("costume3", "./Grabable/costumes/costume3.svg", {
        x: 225.24774774774775,
        y: 310.9455695634367
      }),
      new Costume("costume5", "./Grabable/costumes/costume5.svg", {
        x: 356.4441030047927,
        y: 240.73573499999998
      }),
      new Costume("costume4", "./Grabable/costumes/costume4.svg", {
        x: 253.89288330078125,
        y: 199.06846618652344
      })
    ];

    this.sounds = [new Sound("pop", "./Grabable/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.wait(0.001);
    this.effects.ghost = 0;
    this.stage.watchers.redPoints.visible = false;
    this.stage.watchers.bluePoints.visible = false;
    this.moveAhead();
    this.costume = "costume5";
    while (!this.keyPressed("enter")) {
      yield;
    }

    this.costume = "costume" + this.stage.vars.maps;
    this.moveBehind();
    this.broadcast("play");
    console.log("Watchers:", this.stage.watchers);

    this.stage.watchers.redPoints.visible = true;
    this.stage.watchers.bluePoints.visible = true;
  }
}
