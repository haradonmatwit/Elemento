document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedback-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = form.email.value;
        const subject = form.subject.value;
        const feedback = form.feedback.value;

        const response = await fetch("/submit-feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                subject,
                feedback,
            }),
        });

        if (response.ok) {
            alert("Feedback submitted successfully.");
            form.reset();
        } else {
            alert("There was an issue submitting your feedback. Please try again.");
        }
    });
});

