const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    event.preventDefault();
    const id = $("#character-id").val();
    charactersAPI.getOneRegister(id);
  })

  $('#delete-one').on('click', (e) => {
    event.preventDefault();
    const deleteId = $("#character-id-delete").val();
    charactersAPI.deleteOneRegister(deleteId);
  })

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault();

    const charId = $("#chr-id").val();
    const charName = $("#update-name").val();
    const charJob = $("#update-occupation").val();
    const charWeapon = $("#update-weapon").val();
    const charDebt = $("#update-debt").val();

    charactersAPI.updateOneRegister(charId, charName, charJob, charWeapon, charDebt)

    //clear the inputs again
    $(".edit-character-form").trigger("reset");


  })

  $('#new-character-form').on('submit', (e) => {

    event.preventDefault();
    
            const charName = $("#add-name").val();
            const charJob = $("#add-occupation").val();
            const charWeapon = $("#add-weapon").val();
            const charDebt = $("#add-debt").val();

            charactersAPI.createOneRegister(charName, charJob, charWeapon, charDebt)
    
            //clear the inputs again
            $(".new-character-form").trigger("reset");
        

  })
})
