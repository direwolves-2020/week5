export class Service {
    constructor() {

    }

    calculateResult(userMove, computerMove) {
        return "classRock";
    }

    retrieveComputerMove() {
        return "classPaper";
    }
};


export class ServiceNow {
    calculateResult() {
        return "classRockNow";
    }
};

export default class ServiceDefault {
    calculateResult() {
        return "classRockDefault"
    }
}