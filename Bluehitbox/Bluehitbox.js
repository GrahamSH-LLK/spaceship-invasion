/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bluehitbox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bluehitbox/costumes/costume1.svg", {
        x: 17.148240000000015,
        y: 17.01694556412008
      })
    ];

    this.sounds = [new Sound("pop", "./Bluehitbox/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message2" },
        this.whenIReceiveMessage2
      ),
      new Trigger(Trigger.BROADCAST, { name: "score" }, this.whenIReceiveScore),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay2),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay3)
    ];

    this.vars.direction3 = 100;
  }

  *whenIReceiveMessage2() {
    this.direction =
      180 * (this.stage.vars.n2 + 2 * this.stage.vars.l2) - this.direction;
  }

  *whenIReceiveScore() {
    this.stage.vars.movement2 = 0;
    this.goto(205, 0);
  }

  *whenIReceivePlay() {
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        if (this.stage.vars.touchingredbullet == 1) {
          this.visible = false;
          this.goto(205, 0);
        } else {
          this.visible = true;
        }
      }
      yield;
    }
  }

  *whenIReceivePlay2() {
    this.stage.vars.return = 0;
    this.moveBehind();
    this.stage.vars.movement2 = 0;
    this.stage.vars.redPoints = 0;
    this.stage.vars.bluePoints = 0;
    this.goto(205, 0);
    this.direction = 90;
    this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        if (this.keyPressed("down arrow") && this.stage.vars.pushable2 == 1) {
          while (!!this.keyPressed("down arrow")) {
            this.direction = this.sprites["Blue"].direction;
            yield* this.wait(1e-13);
            if (
              this.stage.vars.movement2 <
              10 + this.stage.vars.blueMaxLaunch
            ) {
              this.stage.vars.movement2 += 0.5;
            }
            while (!(this.stage.vars.pause % 2 == 0)) {
              yield;
            }
            yield;
          }
        }
        if (this.stage.vars.movement2 > 0) {
          this.stage.vars.movement2 += -0.1;
        }
        if (0 > this.stage.vars.movement2) {
          this.stage.vars.movement2 = 0;
        }
        if (!(this.stage.vars.return2 == 0)) {
          this.direction = this.sprites["Blue"].direction;
          this.stage.vars.return2 = 0;
        }
        this.move(this.stage.vars.movement2);
      }
      yield;
    }
  }

  *whenIReceivePlay3() {
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        if (this.keyPressed("up arrow") && this.stage.vars.movement2 == 0) {
          this.direction = this.sprites["Blue"].direction;
          this.direction += 180;
          this.stage.vars.movement2 = 3 + this.stage.vars.blueMaxRecoil;
          while (!!this.keyPressed("up arrow")) {
            yield;
          }
        }
      }
      yield;
    }
  }
}
