/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Redbullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Redbullet/costumes/costume1.svg", {
        x: 176.974625,
        y: 178.147215
      })
    ];

    this.sounds = [new Sound("pop", "./Redbullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay)
    ];
  }

  *startAsClone() {
    this.goto(this.sprites["Red"].x, this.sprites["Red"].y);
    this.direction = this.sprites["Red"].direction;
    this.move(20);
    this.visible = true;
    while (
      !(
        this.touching(this.sprites["Blue"].andClones()) ||
        this.touching(this.sprites["Grabable"].andClones()) ||
          this.touching(this.sprites["Vertical"].andClones()) ||
        this.touching(this.sprites["Horizontal"].andClones())
      )
    ) {
      if (this.stage.vars.pause % 2 == 0) {
        this.move(10 + this.stage.vars.redBulletSpeed * 2);
      }
      yield;
    }
    yield* this.wait(0.001);
    this.deleteThisClone();
  }

  *whenIReceivePlay() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        if (this.keyPressed("w") && this.stage.vars.touchingbluebullet == 0) {
          this.createClone();
          while (!!this.keyPressed("w")) {
            yield;
          }
        }
      }
      yield;
    }
  }
}
