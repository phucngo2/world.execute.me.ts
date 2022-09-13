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

export function sing() {
    const lyrics = `
    Switch on the power line
    Remember to put on
    PROTECTION
    Lay down your pieces
    And let's begin
    OBJECT CREATION
    Fill in my data, parameters
    INITIALISATION
    Setup, a new world
    And let's begin
    THE SIMULATION

    If I'm a set of points
    Then I will give you my dimension
    If I'm a circle
    Then I will give you my circumference
    If I'm a sine wave
    Then you can sit on all my tangents
    If I approach infinity, then you can be
    MY LIMITATIONS

    Switch my current
    To AC to DC
    And then blind my vision
    So dizzy, so dizzy
    Oh, we can travel
    From A.D to B.C
    And we can unite
    So deeply, so deeply

    If I can
    If I can, give you all
    THE SIMULATIONS
    Then I can
    Then I can, be your only
    SATISFACTION
    If I can make you happy
    Then I'll run the
    EXECUTION
    Though we are trapped
    In this strange, strange
    SIMULATION

    If I'm an eggplant
    Then I will give you my
    NUTRIENTS
    If I'm a tomato
    Then I'll give you
    ANTIOXIDANTS
    If I'm a tabby cat
    Then I will purr for your
    ENJOYMENT
    If I'm the only god
    Then your the proof of my
    EXISTENCE

    Switch my gender
    To F to M
    And then do whatever
    From AM to PM
    I will switch my role
    To S to M
    So we can enter
    The trance, the trance

    If I can
    If I can, feel your
    VIBRATIONS
    Then I can
    Then I can, finally be
    COMPLETION
    Though you have left
    You have left
    You have left
    You have left
    You have left
    You have left me in
    ISOLATION

    If I can
    If I can, erase all the pointless
    FRAGMENTS
    Then maybe
    Then maybe, you won't leave me so
    DISHEARTENED

    Challenging your god
    You have made some
    ILLEGAL ARGUMENTS

    Execution, Execution, Execution, Execution
    Execution, Execution, Execution, Execution
    Execution, Execution, Execution, Execution
    Ein, Dos, Trois
    Ne, Fem, Liu
    EXECUTION

    If I can
    If I can, give you all the
    EXECUTION
    Then I can
    Then I can, be your only
    EXECUTION
    If I can, have you back
    Then I will run the
    EXECUTION
    Though we are trapped
    We are trapped ah

    I've studied
    I've studied how to properly
    LO-O-OVE
    Question me
    Question me I can answer all
    LO-O-OVE
    I know the algebraic expression of
    LO-O-OVE
    Though you are free
    I am trapped, trapped in
    LO-O-OVE

    EXECUTION
    `;

    console.log(lyrics);
}