import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Red from "./Red/Red.js";
import Redhitbox from "./Redhitbox/Redhitbox.js";
import Redbullet from "./Redbullet/Redbullet.js";
import Redgoal from "./Redgoal/Redgoal.js";
import Blue from "./Blue/Blue.js";
import Bluehitbox from "./Bluehitbox/Bluehitbox.js";
import Bluebullet from "./Bluebullet/Bluebullet.js";
import Bluegoal from "./Bluegoal/Bluegoal.js";
import Horizontal from "./Horizontal/Horizontal.js";
import Vertical from "./Vertical/Vertical.js";
import Grabable from "./Grabable/Grabable.js";
import Announcer from "./Announcer/Announcer.js";
import Pause from "./Pause/Pause.js";
import Wall from "./Wall/Wall.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Red: new Red({
    x: -205,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true
  }),
  Redhitbox: new Redhitbox({
    x: -205,
    y: 0,
    direction: -90,
    costumeNumber: 1,
    size: 5,
    visible: true
  }),
  Redbullet: new Redbullet({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 3,
    visible: false
  }),
  Redgoal: new Redgoal({
    x: 1,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Blue: new Blue({
    x: 205,
    y: 0,
    direction: -90,
    costumeNumber: 1,
    size: 10,
    visible: true
  }),
  Bluehitbox: new Bluehitbox({
    x: 205,
    y: 0,
    direction: 70,
    costumeNumber: 1,
    size: 5,
    visible: true
  }),
  Bluebullet: new Bluebullet({
    x: -82.1536268886677,
    y: 24.261347446685722,
    direction: 90,
    costumeNumber: 1,
    size: 3,
    visible: false
  }),
  Bluegoal: new Bluegoal({
    x: 1,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Horizontal: new Horizontal({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true
  }),
  Vertical: new Vertical({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true
  }),
  Grabable: new Grabable({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: true
  }),
  Announcer: new Announcer({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 90,
    visible: false
  }),
  Pause: new Pause({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Wall: new Wall({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
