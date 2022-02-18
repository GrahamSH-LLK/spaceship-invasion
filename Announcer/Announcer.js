/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Announcer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Red Win", "./Announcer/costumes/Red Win.svg", {
        x: 355.0820855772215,
        y: 257.8275385911986
      }),
      new Costume("Blue Win", "./Announcer/costumes/Blue Win.svg", {
        x: 331.53328,
        y: 244.20237804138185
      }),
      new Costume("costume1", "./Announcer/costumes/costume1.svg", {
        x: 225.72072,
        y: 156.65164999999996
      })
    ];

    this.sounds = [new Sound("pop", "./Announcer/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Blue win" },
        this.whenIReceiveBlueWin
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Red Win" },
        this.whenIReceiveRedWin
      ),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.pause = 0;
    this.stage.vars.redPoints = 0;
    this.stage.vars.bluePoints = 0;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveBlueWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "Blue Win";
    this.moveAhead();
    this.visible = true;
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveRedWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "Red Win";
    this.moveAhead();
    this.visible = true;
    /* TODO: Implement stop all */ null;
  }

  *whenIReceivePlay() {
    while (true) {
      if (this.stage.vars.redPoints > 9) {
        this.broadcast("Red Win");
      }
      if (this.stage.vars.bluePoints > 9) {
        this.broadcast("Blue win");
      }
      if (this.keyPressed("space")) {
        this.stage.vars.pause += 1;
        while (!!this.keyPressed("space")) {
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceivePlay2() {
    while (true) {
      if (this.stage.vars.pause % 2 == 0) {
        this.visible = false;
      } else {
        this.visible = true;
        this.moveAhead();
        this.costume = "costume1";
      }
      yield;
    }
  }
}
