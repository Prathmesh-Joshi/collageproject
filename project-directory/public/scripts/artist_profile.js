// Function to show the selected tab
function showTab(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content and add active class to the selected tab
    document.getElementById(tabId).classList.add('active');
    const activeTab = document.querySelector(`.tab[onclick="showTab('${tabId}')"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Show the artworks tab by default
document.addEventListener('DOMContentLoaded', () => {
    showTab('artworks');
});

// Function to handle comment posting (can be expanded)
function addComment() {
    alert('Comment posted!');
}
