$(document).ready(function () {
    $('#button-create-item').on('click', function() {
        let name = $('#input-create-item').val();
        $('#input-create-item').val('');

        let html = '';
        html += '<div class="item">';
        html += '<div class="name">'+ name +'</div>';
        html += '<img src="assets/orange.jpg" alt="">';
        html += '<div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est nulla et quia qui! Excepturi rem itaque nulla voluptas ullam autem quod? Tempore voluptates voluptatum fugiat? Dolores incidunt voluptatibus provident?</div>';
        html += '<div class="price">499</div>';
        html += '<button class="item-add">Add to cart</button>';
        html += '<button class="item-remove">Remove</button>';
        html += '<br>';
        html += '<a href="#">More Info</a>';
        html += '<div class="more-info">Lorem ipsum dolor sit amet consectetur,</div>';
        html += '</div>';

        $('#container').prepend(html);
    });
    $('#container').on('click', '.more-info-link', function(event) {
        event.preventDefault();
        $(this).parent().find('.more-info').toggle();
    });

    $('#container').on('click', '.item-remove', function() {
        $(this).parent().remove();
    });
});