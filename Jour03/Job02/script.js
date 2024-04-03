$(document).ready(function() {
    // Mélange les images au clic sur le bouton
    $('#shuffle-btn').click(function() {
        let images = $('#images-container img').toArray();
        images.sort(() => 0.5 - Math.random());
        $('#images-container').empty().append(images);
        attachDragEvents(); // Réapplique les événements drag and drop
    });

    // Fonction pour attacher les événements de drag and drop
    function attachDragEvents() {
        $('#images-container img').off('dragstart').on('dragstart', function(e) {
            e.originalEvent.dataTransfer.setData('text/plain', e.target.id);
        });

        $('#images-container').off('dragover').on('dragover', function(e) {
            e.preventDefault(); // Nécessaire pour permettre le drop.
        });

        $('#images-container').off('drop').on('drop', function(e) {
            e.preventDefault();
            const id = e.originalEvent.dataTransfer.getData('text/plain');
            const draggedElement = $('#' + id);

            // Calcule l'élément le plus proche sous le curseur lors du drop
            const closest = getClosestDraggedOverElement(e.clientY);

            if (closest) {
                if (e.clientY < closest.element.getBoundingClientRect().top + closest.element.getBoundingClientRect().height / 2) {
                    $(closest.element).before(draggedElement);
                } else {
                    $(closest.element).after(draggedElement);
                }
            } else {
                $('#images-container').append(draggedElement);
            }
            checkOrder();
        });
    }

    // Calcule quel élément img est le plus proche du point de drop
    function getClosestDraggedOverElement(y) {
        const draggableElements = $('#images-container img').toArray();
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return {offset: offset, element: child};
            } else {
                return closest;
            }
        }, {offset: Number.NEGATIVE_INFINITY});
    }

    // Vérifie si les images sont dans le bon ordre
    function checkOrder() {
        let correctOrder = true;
        $('#images-container img').each(function(index) {
            if ($(this).data('position') !== index + 1) {
                correctOrder = false;
                return false;
            }
        });
        if (correctOrder) {
            $('#message').text('Vous avez gagné').css('color', 'green');
        } else {
            $('#message').text('Essayez encore').css('color', 'red');
        }
    }

    attachDragEvents(); // Attache les événements de drag and drop au chargement
});
