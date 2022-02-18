/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Redhitbox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Redhitbox/costumes/costume1.svg", {
        x: 12.195374353808063,
        y: 12.102001226529268
      })
    ];

    this.sounds = [new Sound("pop", "./Redhitbox/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.BROADCAST, { name: "score" }, this.whenIReceiveScore),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay2),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay3)
    ];

    this.vars.direction2 = -130;
    this.vars.ox = -205;
    this.vars.oy = 0;
  }

  *whenIReceiveMessage1() {
    this.direction =
      180 * (this.stage.vars.n + 2 * this.stage.vars.l) - this.direction;
  }

  *whenIReceiveScore() {
    this.stage.vars.movement = 0;
    this.goto(-205, 0);
  }

  *whenIReceivePlay() {
    this.stage.vars.touchingbluebullet = 0;
    this.stage.vars.return = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    this.stage.vars.movement = 0;
    this.stage.vars.redPoints = 0;
    this.goto(-205, 0);
    this.direction = -90;
    this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        if (this.keyPressed("s") && this.stage.vars.pushable == 1) {
          while (!!this.keyPressed("s")) {
            this.direction = this.sprites["Red"].direction;
            yield* this.wait(1e-13);
            if (this.stage.vars.movement < 10 + this.stage.vars.redMaxLaunch) {
              this.stage.vars.movement += 0.5;
            }
            yield;
          }
          while (!(this.stage.vars.pause % 2 == 0)) {
            yield;
          }
        }
        if (this.stage.vars.movement > 0) {
          this.stage.vars.movement += -0.1;
        }
        if (0 > this.stage.vars.movement) {
          this.stage.vars.movement = 0;
        }
        if (!(this.stage.vars.return == 0)) {
          this.direction = this.sprites["Red"].direction;
          this.stage.vars.return = 0;
        }
        this.vars.ox = this.x;
        this.vars.oy = this.y;
        this.move(this.stage.vars.movement);
        if (this.touching(this.sprites["Wall"].andClones())) {
          this.x = this.vars.ox;
        }
        if (this.touching(this.sprites["Wall"].andClones())) {
          this.y = this.vars.oy;
        }
      }
      yield;
    }
  }

  *whenIReceivePlay2() {
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        if (this.stage.vars.touchingbluebullet == 0) {
          this.visible = true;
        } else {
          this.visible = false;
          this.goto(-205, 0);
        }
      }
      yield;
    }
  }

  *whenIReceivePlay3() {
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        if (this.keyPressed("w") && this.stage.vars.movement == 0) {
          this.direction = this.sprites["Red"].direction;
          this.direction += 180;
          this.stage.vars.movement = 3 + this.stage.vars.redMaxRecoil;
          while (!!this.keyPressed("w")) {
            yield;
          }
        }
      }
      yield;
    }
  }
}
