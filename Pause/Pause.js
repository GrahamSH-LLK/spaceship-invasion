/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pause extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Pause/costumes/costume1.svg", { x: 0, y: 0 }),
      new Costume("costume3", "./Pause/costumes/costume3.svg", {
        x: 253.89288330078125,
        y: 199.06846618652344
      })
    ];

    this.sounds = [new Sound("pop", "./Pause/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceivePlay() {
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        /* TODO: Implement data_hidevariable */ null;
        /* TODO: Implement data_hidevariable */ null;
        /* TODO: Implement data_hidevariable */ null;
        /* TODO: Implement data_hidevariable */ null;
        /* TODO: Implement data_hidevariable */ null;
        /* TODO: Implement data_hidevariable */ null;
        this.effects.ghost = 0;
        this.costume = "costume1";
      } else {
        /* TODO: Implement data_showvariable */ null;
        /* TODO: Implement data_showvariable */ null;
        /* TODO: Implement data_showvariable */ null;
        /* TODO: Implement data_showvariable */ null;
        /* TODO: Implement data_showvariable */ null;
        /* TODO: Implement data_showvariable */ null;
        this.effects.ghost = 50;
        this.visible = true;
        /* TODO: Implement looks_gotofrontback */ null;
        /* TODO: Implement looks_goforwardbackwardlayers */ null;
        this.costume = "costume3";
        if (this.stage.vars.redPoints > 0) {
          if (
            this.keyPressed("1") &&
            this.stage.vars.redBulletSpeed < 5 &&
            0 < this.stage.vars.redPoints
          ) {
            this.stage.vars.redBulletSpeed += 1;
            this.stage.vars.redPoints += -1;
            while (!!this.keyPressed("1")) {
              yield;
            }
          }
          if (
            this.keyPressed("2") &&
            this.stage.vars.redMaxLaunch < 5 &&
            0 < this.stage.vars.redPoints
          ) {
            this.stage.vars.redMaxLaunch += 1;
            this.stage.vars.redPoints += -1;
            while (!!this.keyPressed("2")) {
              yield;
            }
          }
          if (
            this.keyPressed("3") &&
            this.stage.vars.redMaxRecoil < 5 &&
            0 < this.stage.vars.redPoints
          ) {
            this.stage.vars.redMaxRecoil += 1;
            this.stage.vars.redPoints += -1;
            while (!!this.keyPressed("3")) {
              yield;
            }
          }
        }
        if (this.stage.vars.bluePoints > 0) {
          if (
            this.keyPressed("8") &&
            this.stage.vars.blueBulletSpeed < 5 &&
            0 < this.stage.vars.bluePoints
          ) {
            this.stage.vars.blueBulletSpeed += 1;
            this.stage.vars.bluePoints += -1;
            while (!!this.keyPressed("8")) {
              yield;
            }
          }
          if (
            this.keyPressed("9") &&
            this.stage.vars.blueMaxLaunch < 5 &&
            0 < this.stage.vars.bluePoints
          ) {
            this.stage.vars.blueMaxLaunch += 1;
            this.stage.vars.bluePoints += -1;
            while (!!this.keyPressed("9")) {
              yield;
            }
          }
          if (
            this.keyPressed("0") &&
            this.stage.vars.blueMaxRecoil < 5 &&
            0 < this.stage.vars.bluePoints
          ) {
            this.stage.vars.blueMaxRecoil += 1;
            this.stage.vars.bluePoints += -1;
            while (!!this.keyPressed("0")) {
              yield;
            }
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.blueBulletSpeed = 0;
    this.stage.vars.blueMaxLaunch = 0;
    this.stage.vars.blueMaxRecoil = 0;
    this.stage.vars.redBulletSpeed = 0;
    this.stage.vars.redMaxLaunch = 0;
    this.stage.vars.redMaxRecoil = 0;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
  }
}
