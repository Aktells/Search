document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteList = document.getElementById('autocompleteList');

    const items =[
    "AIC - MUJ Incubation Foundation",
    "AIC-JKLU Foundation",
    "Air Tree Foundation",
    "Ajay Bharti Jain Charitable Trust",
    "Aja Foundation Society",
    "Connect Signal",
    "Consortium for Industry Development and Awareness (CIDA)",
    "Fame Gurukul Shikshan Sansthan",
    "Farmer Foundation Charitable Trust"];


    searchInput.addEventListener("input", function() {
        const userInput = this.value.toLowerCase().trim();
        closeAllLists();
        if (!userInput) return;

        const matchingItems = items.filter(item =>
            item.toLowerCase().includes(userInput)
        );

        matchingItems.forEach(item => {
            const suggestion = document.createElement("div");
            suggestion.innerHTML = "<strong>" + item.substr(0, userInput.length) + "</strong>";
            suggestion.innerHTML += item.substr(userInput.length);
            suggestion.innerHTML += "<input type='hidden' value='" + item + "'>";
            suggestion.addEventListener("click", function() {
                searchInput.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            autocompleteList.appendChild(suggestion);
        });
    });

    function closeAllLists() {
        while (autocompleteList.firstChild) {
            autocompleteList.removeChild(autocompleteList.firstChild);
        }
    }

    document.addEventListener("click", function(e) {
        if (e.target !== searchInput) {
            closeAllLists();
        }
    });
});
