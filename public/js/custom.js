$(
    $('.submit').on('click', function(e) {
        e.preventDefault()

        var content = {
            name: $('#recipe-name').val(),
            ingredients: $('#ingredients').val(),
            directions: $('#directions').val()
        }

        if (content.name !== "") {
            if (content.ingredients !== "") {
                    if (content.directions !== "") {
                    $.ajax({
                        type: 'POST',
                        url: './add',
                        data: content,
                        success: function(result) {
                            console.log(result)
                            location.reload()
                            $('#formModal').modal('hide')
                        }
                    })
                } else {
                    alert("Sorry, what is a recipe about without directions?")
                }
            } else {
                alert("Sorry, how do you cook without any ingredients?")
            }
        } else {
            alert("Sorry, if you can't give it a name, I can't add this to your recipe.")
        }
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
        
        if (content.name !== "") {
            if (content.ingredients !== "") {
                    if (content.directions !== "") {
                    $.ajax({
                        type: 'POST',
                        url: './edit',
                        data: content,
                        success: function(result) {
                            console.log(result)
                            location.reload()
                            $('#formModal').modal('hide')
                        }
                    })
                } else {
                    alert("Sorry, what is a recipe about without directions?")
                }
            } else {
                alert("Sorry, how do you cook without any ingredients?")
            }
        } else {
            alert("Sorry, if you can't give it a name, I can't add this to your recipe.")
        }

    }),
    $('.delete-recipe').on('click', function(e) {
        e.preventDefault()

        var content = {
            id: $(this).data('id')
        }

        if (confirm('Delete recipe "' + $(this).data('name').trim() + '"?')) {
            $.ajax({
                type: 'POST',
                url: './delete',
                data: content,
                success: function(result) {
                    location.reload()
                }
            })
        }
    })

)