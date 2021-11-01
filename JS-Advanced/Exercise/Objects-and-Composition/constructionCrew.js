function constructionCrew(worker) {

    if (worker.dizziness) {
        const waterToIntake = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += waterToIntake;
        worker.dizziness = false;
    }

    return worker;
}

console.log( constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }

));