// Geometric objects
export class PointSet {}
export class Circle {}
export class SineWave {}
export class Sequence {}

// Animals & Plants
export class Eggplant {}
export class Tomato {}
export class TabbyCat {}

export class IllegalArgumentException {}

export class Thing {
  Attribute: Attribute;

  addAttribute(..._: any) {}

  addAction(..._: any) {}

  getDimensions(): Attribute {
    return this.Attribute;
  }

  getCircumference(): Attribute {
    return this.Attribute;
  }

  getAntioxidants(): Attribute {
    return this.Attribute;
  }

  getNutrients(): Attribute {
    return this.Attribute;
  }

  getTangent(..._: any) {}

  getXPosition() {}

  setLimit(..._: any) {}

  toLimit() {}

  toggleCurrent() {}

  canSee(..._: any) {}

  addFeeling(..._: any) {}

  getNumSimulationsAvailable() {}

  getNumSimulationsNeeded() {}

  setSatisfaction(..._: any) {}

  toSatisfaction() {}

  getFeelingIndex(..._: any): any {}

  requestExecution(..._: any) {}

  resetNutrients() {}

  resetAntioxidants() {}

  purr() {}

  setProof(..._: any) {}

  toProof() {}

  toggleGender() {}

  toggleRoleBDSM() {}

  getSenseIndex(..._: any): any {}

  lookFor(..._: any) {}

  getMemory(): any {}

  removeFeeling(..._: any) {}

  setOpinion(..._: any) {}

  getOpinionIndex(..._: any): any {}

  setExecution(..._: any) {}

  toExecution() {}

  escape(..._: any) {}

  learnTopic(..._: any) {}

  takeExamTopic(..._: any) {}

  getAlgebraicExpression(..._: any) {}
}

export class Lovable extends Thing {
  constructor(..._: any) {
    super();
  }
}

export class World {
  constructor(..._: any) {}

  addThing(..._: any) {}

  startSimulation() {}

  timeTravelForTwo(..._: any) {}

  unite(..._: any) {}

  lockThing(..._: any) {}

  getGod(): any {}

  procreate(..._: any) {}

  makeHigh(..._: any) {}

  unlock(..._: any) {}

  removeThing(..._: any) {}

  announce(..._: any) {}

  runExecution() {}

  isExecutableBy(..._: any): any {}

  getThingIndex(..._: any): any {}

  execute(..._: any) {}
}

class Attribute {
  toAttribute() {}

  isErasable() {}
}
