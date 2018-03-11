$(
    $('.submit').on('click', function(e) {
        e.preventDefault()

        var content = {
            name: $('#recipe-name').val(),
            ingredients: $('#ingredients').val(),
            directions: $('#directions').val()
        }

        $.ajax({
            type: 'POST',
            url: './add',
            data: content,
            success: function(result) {
                console.log(result)
                location.reload()
            }
        })
    }),
    $('.edit-recipe').on('click', function() {
        $('#edit-form-name').val($(this).data('name'))
        $('#edit-form-id').val($(this).data('id'))
        $('#edit-form-ingredients').val($(this).data('ingredients'))
        $('#edit-form-directions').val($(this).data('directions'))
    }),
    $('.edit').on('click', function(e) {
        e.preventDefault()

        var content = {
            id: $('#edit-form-id').val(),
            name: $('#edit-form-name').val(),
            ingredients: $('#edit-form-ingredients').val(),
            directions: $('#edit-form-directions').val()
        }

        $.ajax({
            type: 'POST',
            url: './edit',
            data: content,
            success: function(result) {
                location.reload()
            }
        })
    }),
    $('.delete-recipe').on('click', function(e) {
        e.preventDefault()

        var content = {
            id: $(this).data('id')
        }

        $.ajax({
            type: 'POST',
            url: './delete',
            data: content,
            success: function(result) {
                location.reload()
            }
        })
    })

)