/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound,
  Watcher
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 321.00352,
        y: 230.70787
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.redPoints = 0;
    this.vars.bluePoints = 0;
    this.vars.movement = 0;
    this.vars.pushable = 1;
    this.vars.return = 0;
    this.vars.n = 1;
    this.vars.l = 0;
    this.vars.movement2 = 0;
    this.vars.pushable2 = 1;
    this.vars.n2 = 0;
    this.vars.l2 = 1;
    this.vars.return2 = 0;
    this.vars.direction = -40;
    this.vars.touchingbluebullet = 0;
    this.vars.touchingredbullet = 0;
    this.vars.pause = 0;
    this.vars.redBulletSpeed = 0;
    this.vars.blueBulletSpeed = 0;
    this.vars.blueMaxLaunch = 0;
    this.vars.redMaxLaunch = 0;
    this.vars.blueMaxRecoil = 0;
    this.vars.redMaxRecoil = 0;
    this.vars.maps = 3;
    this.vars.xv = 0;
    this.vars.yv = 0;

    this.watchers.redPoints = new Watcher({
      label: "Red Points",
      style: "normal",
      visible: false,
      value: () => this.vars.redPoints,
      x: 240,
      y: 180
    });
    this.watchers.bluePoints = new Watcher({
      label: "Blue Points",
      style: "normal",
      visible: false,
      value: () => this.vars.bluePoints,
      x: 600,
      y: 180
    });
  }
}
