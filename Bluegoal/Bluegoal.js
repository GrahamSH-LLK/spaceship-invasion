/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bluegoal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bluegoal/costumes/costume1.svg", {
        x: -223.0849006677089,
        y: 63.06304499999999
      })
    ];

    this.sounds = [new Sound("pop", "./Bluegoal/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay)
    ];
  }

  *whenIReceivePlay() {
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        this.moveAhead();

        if (this.touching(this.sprites["Red"].andClones())) {
          this.stage.vars.redPoints += 1;
          this.broadcast("score");
          while (!this.touching(this.sprites["Red"].andClones())) {
            yield;
          }
        }
      }
      yield;
    }
  }
}
