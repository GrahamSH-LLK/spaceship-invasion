/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Blue extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Blue/costumes/costume1.svg", {
        x: 164.47462282840934,
        y: 165.64721496187482
      })
    ];

    this.sounds = [new Sound("pop", "./Blue/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "score" }, this.whenIReceiveScore),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay2)
    ];
  }

  *whenIReceiveScore() {
    this.direction = -90;
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(this.sprites["Bluehitbox"].x, this.sprites["Bluehitbox"].y);
      yield;
    }
  }

  *whenIReceivePlay() {
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        this.goto(this.sprites["Bluehitbox"].x, this.sprites["Bluehitbox"].y);
        if (
          this.touching(this.sprites["Grabable"].andClones()) &&
          !this.touching(Color.rgb(60, 0, 169))
        ) {
          this.stage.vars.pushable2 = 1;
        } else {
          this.stage.vars.pushable2 = 0;
        }
        this.moveAhead();
        if (this.keyPressed("right arrow")) {
          this.direction += 10;
        }
        if (this.keyPressed("left arrow")) {
          this.direction += -10;
        }
        if (this.touching(this.sprites["Redbullet"].andClones())) {
          this.visible = false;
          this.direction = -90;
          this.stage.vars.touchingredbullet = 1;
          this.stage.vars.movement2 = 0;
          yield* this.wait(2);
        } else {
          this.visible = true;
          this.stage.vars.touchingredbullet = 0;
        }
      }
      yield;
    }
  }

  *whenIReceivePlay2() {
    this.direction = -90;
    this.stage.vars.movement2 = 0;
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        if (
          this.touching(this.sprites["Vertical"].andClones()) ||
          this.touching(this.sprites["Horizontal"].andClones())
        ) {
          if (this.touching(this.sprites["Horizontal"].andClones())) {
            this.stage.vars.n2 = 1;
            this.stage.vars.l2 = 0;
          } else {
            this.stage.vars.n2 = 0;
            this.stage.vars.l2 = 1;
          }
          this.broadcast("message2");
          while (
            !!(
              this.touching(this.sprites["Vertical"].andClones()) ||
              this.touching(this.sprites["Horizontal"].andClones())
            )
          ) {
            yield;
          }
        }
      }
      yield;
    }
  }
}
