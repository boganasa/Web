function fetchData() {
    let isFirstRequest = localStorage.getItem('isFirstRequest') === null;

    document.addEventListener("DOMContentLoaded", async function () {
        try {
            showPreloader();

            let filter = '';
            if (isFirstRequest) {
                filter = 0;
            } else {
                filter = getRandomId(100, 500);
            }
            console.log(filter)

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/comments?" + `${filter}`
            );

            if (response.ok) {
                hidePreloader();
                const comments = await response.json();
                const filteredComments = comments.filter(comment => parseInt(comment.id) >= filter)
                renderComments(filteredComments);
            } else {
                throw new Error("Network response was not ok.");
            }
        } catch (error) {
            console.error("Error:", error);
            showErrorMessage();
        }
    });
}

fetchData();


function showPreloader() {
    document.getElementById('preloader').style.display = "block";
}

function hidePreloader() {
    document.getElementById('preloader').style.display = "none";
}

function renderComments(comments) {
    try {
        const feedbackDiv = document.getElementById('feedback');
        feedbackDiv.innerHTML = '';
        comments.forEach((comment, index) => {
            const commentDiv = document.createElement('div');commentDiv.classList.add('comment');
            commentDiv.classList.add('text_in_box')

            const authorSpan = document.createElement('h2');
            authorSpan.textContent = "Автор: " + `${comment.name}` + "(" +`${comment.email}` + ")";

            const bodyParagraph = document.createElement('p');
            bodyParagraph.textContent = comment.body;

            commentDiv.id = index;
            const idDisplay = document.createElement('p');
            idDisplay.textContent = "ID: " + `${index}`;

            commentDiv.appendChild(authorSpan);
            commentDiv.appendChild(bodyParagraph);
            commentDiv.appendChild(idDisplay);

            feedbackDiv.appendChild(commentDiv);
        });
    } catch (error) {
        console.error("Error rendering comments:", error);
        showErrorMessage();
    }
}


function showErrorMessage() {
    alert("Уупс..")
    hidePreloader()
}

function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}