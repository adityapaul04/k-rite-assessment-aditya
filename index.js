function highlightRow(checkbox) {
    // Get the parent row of the checkbox
    var row = checkbox.parentNode.parentNode;

    // Toggle the highlighted class based on checkbox state
    if (checkbox.checked) {
        row.classList.add('highlighted');
    } else {
        row.classList.remove('highlighted');
    }
}

  //Hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left-section").style.left = "0"
    document.querySelector(".left-section").style.backgroundColor = "white";
    document.querySelector(".sidebar").style.width = "85%";
    document.querySelector(".close").style.display = "block";
})

//close button 
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left-section").style.left = "-350px"
    document.querySelector(".close").style.display = "none";

})

// Get the input field and table body
const searchInput = document.getElementById('searchInput');
const tableBody = document.querySelector('tbody');


//Search bar
// Add event listener to the search input field
searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase(); 
    const rows = tableBody.querySelectorAll('tr'); 

    rows.forEach(row => {
        const brandName = row.querySelector('.brand-Name').textContent.toLowerCase(); 
        if (brandName.includes(searchText)) {
            row.style.display = ''; 
        } else {
            row.style.display = 'none'; 
        }
    });
});

//Dropdown
document.addEventListener("DOMContentLoaded", function() {
    const folderContainers = document.querySelectorAll(".folder-container");

    folderContainers.forEach(folderContainer => {
        const folder = folderContainer.querySelector(".folder");
        const subFolders = folderContainer.querySelector(".subfolders");

        folder.addEventListener("click", function() {
            if (subFolders.style.display === "block") {
                subFolders.style.display = "none";
                folderContainer.style.marginBottom = "0";
            } else {
                document.querySelectorAll(".subfolders").forEach(subFolder => {
                    subFolder.style.display = "none";
                });
                document.querySelectorAll(".folder-container").forEach(fc => {
                    fc.style.marginBottom = "0";
                });
                subFolders.style.display = "block";
                subFolders.style.backgroundColor = "white";
                subFolders.style.left = "20px";
                folderContainer.style.marginBottom = "50px";
            }
        });
    });
});

