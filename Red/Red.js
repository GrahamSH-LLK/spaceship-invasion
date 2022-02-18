/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Red extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Red/costumes/costume1.svg", {
        x: 164.47462282840934,
        y: 165.64720496187482
      })
    ];

    this.sounds = [new Sound("pop", "./Red/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "score" }, this.whenIReceiveScore),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay2)
    ];
  }

  *whenIReceiveScore() {
    this.direction = 90;
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(this.sprites["Redhitbox"].x, this.sprites["Redhitbox"].y);
      yield;
    }
  }

  *whenIReceivePlay() {
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        this.goto(this.sprites["Redhitbox"].x, this.sprites["Redhitbox"].y);
        if (
          this.touching(this.sprites["Grabable"].andClones()) &&
          !this.touching(Color.rgb(60, 0, 169))
        ) {
          this.stage.vars.pushable = 1;
        } else {
          this.stage.vars.pushable = 0;
        }
        this.moveAhead();
        if (this.keyPressed("d")) {
          this.direction += 10;
        }
        if (this.keyPressed("a")) {
          this.direction += -10;
        }
        if (this.touching(this.sprites["Bluebullet"].andClones())) {
          this.visible = false;
          this.direction = 90;
          this.stage.vars.movement = 0;
          this.stage.vars.touchingbluebullet = 1;
          yield* this.wait(2);
        } else {
          this.visible = true;
          this.stage.vars.touchingbluebullet = 0;
        }
      }
      yield;
    }
  }

  *whenIReceivePlay2() {
    this.direction = 90;
    this.stage.vars.movement = 0;
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        if (
          this.touching(this.sprites["Vertical"].andClones()) ||
          this.touching(this.sprites["Horizontal"].andClones())
        ) {
          if (this.touching(this.sprites["Horizontal"].andClones())) {
            this.stage.vars.n = 1;
            this.stage.vars.l = 0;
          } else {
            this.stage.vars.n = 0;
            this.stage.vars.l = 1;
          }
          this.broadcast("message1");
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
