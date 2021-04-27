try {
    let options = {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit":
        minute: "2-digit"
    };
    document.getElementById(
        "currentdate"
    ).textContent = newDate().toLocaleString("en-US", options);
}