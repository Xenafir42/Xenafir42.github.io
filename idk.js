function aktualisNapKepe() {
    const datum = new Date();
    const nap = datum.getDate(); // Adding 1 to get the next day

    return `treasure/${nap}.jpg`;
}