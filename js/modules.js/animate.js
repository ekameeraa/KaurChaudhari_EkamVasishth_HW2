
export function animateQuestions() {
    const questions = document.querySelectorAll(".question");
    gsap.from(questions, {
        opacity: 0,
        scale: 0.5,
        rotation: 15,
        y: 30,
        stagger: 0.2,
        duration: 0.7,
        ease: "back.out(1.7)"
    });
}

export function highlightAnswers() {
    const correctLabels = document.querySelectorAll("label.correct");
    const incorrectLabels = document.querySelectorAll("label.incorrect");


    gsap.to(correctLabels, {
        backgroundColor: "#4CAF50",
        color: "#FFFFFF",
        scale: 1.1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power1.out",
        onComplete: () => gsap.to(correctLabels, { scale: 1, duration: 0.2 })
    });


    gsap.to(incorrectLabels, {
        backgroundColor: "#F44336",
        color: "#FFFFFF",
        scale: 1.1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power1.out",
        onComplete: () => gsap.to(incorrectLabels, { scale: 1, duration: 0.2 })
    });
}

export function animateResult() {
    const resultContainer = document.querySelector("#result-container");
    if (resultContainer) {
        gsap.fromTo(resultContainer, {
            opacity: 0,
            scale: 0.8,
            rotationX: -90
        }, {
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        });
    }
}

export function animateReset() {
    const questions = document.querySelectorAll(".question");
    gsap.to(questions, {
        opacity: 0,
        rotationX: 90,
        stagger: 0.1,
        duration: 0.5,
        onComplete: () => {
            gsap.set(questions, { opacity: 1, y: 0, rotationX: 0 });
        }
    });
}
