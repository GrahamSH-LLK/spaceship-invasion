/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Redgoal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Redgoal/costumes/costume1.svg", {
        x: 290.39765146616537,
        y: 63.06304499999999
      })
    ];

    this.sounds = [new Sound("pop", "./Redgoal/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay)
    ];
  }

  *whenIReceivePlay() {
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        this.moveAhead();
        if (this.touching(this.sprites["Blue"].andClones())) {
          this.stage.vars.bluePoints += 1;
          this.broadcast("score");
          while (!this.touching(this.sprites["Blue"].andClones())) {
            yield;
          }
        }
      }
      yield;
    }
  }
}
