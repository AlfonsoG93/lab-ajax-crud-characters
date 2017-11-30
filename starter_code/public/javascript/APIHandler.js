class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
        method: "GET",
        url: `${this.BASE_URL}/characters`
      })
      .then((apiResults) => {
        console.log("SUCESS!");
        console.log(apiResults);

        const fullList = apiResults;

        fullList.forEach((oneCharacter) => {
          let char = $(`
           <div class="character-info">
                <div class="name"> ${oneCharacter.name}</div>
                <div class="charId"> ${oneCharacter.id}</div>
                <div class="occupation"> ${oneCharacter.occupation}</div>
                <div class="debt"> ${oneCharacter.debt}</div>
                <div class="weapon"> ${oneCharacter.weapon}</div>   
            </div>
          `);
          $(".characters-container").append(char);
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getOneRegister(charId) {
    $.ajax({
        method: "GET",
        url: `${this.BASE_URL}/characters/${charId}/`
      })
      .then((apiResults) => {
        console.log("SUCCESS!");
        console.log(apiResults);

        const oneCharacter = $(`
        <div class="character-info">
          <div class="name"> ${apiResults.name}</div>
          <div class="charId"> ${apiResults.id}</div>
          <div class="occupation"> ${apiResults.occupation}</div>
          <div class="debt"> ${apiResults.debt}</div>
          <div class="weapon"> ${apiResults.weapon}</div>   
        </div>
      `);
        $(".characters-container").append(oneCharacter);


      })
      .catch((err) => {
        console.log(err);
      })
  }

  createOneRegister(charName, charJob, charWeapon, charDebt) {
    $.ajax({
        method: "POST",
        url: `${this.BASE_URL}/characters`,

        data: {
          name: charName,
          occupation: charJob,
          weapon: charWeapon,
          debt: charDebt,
        }
      })
      .then((apiResults) => {
        console.log("POST Success");

        const newCharHtml = (`
        <li> Added : <b>${apiResults.name}</b> 
          ( id ${apiResults.id})
        </li>
      `);
        $(".create-feedback").html(newCharHtml);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  updateOneRegister(charId, charName, charJob, charWeapon, charDebt) {
    $.ajax({
        method: "PATCH",
        url: `${this.BASE_URL}/characters/${charId}/`,

        data: {
          id: charId,
          name: charName,
          occupation: charJob,
          weapon: charWeapon,
          debt: charDebt,
        }

      })
      .then((apiResults) => {
        console.log("PATCH Success");

        const updateCharHtml = (`
        <li> UPDATED : <b>${apiResults.name}</b> 
          ( id ${apiResults.id})
        </li>
      `);
        $(".create-feedback").html(updateCharHtml);
      })
      .catch((err) => {
        console.log(err);
      })

  }

  deleteOneRegister(deleteId) {
    $.ajax({

      method: "DELETE",
      url: `${this.BASE_URL}/characters/${deleteId}/`,
      data: {}
    })
    .then((apiResults) => {
      console.log("DELETE Success");

      const deleteCharHtml = (`
      <li> DELETE : <b>${apiResults.name}</b> 
        ( id ${apiResults.id})
      </li>
    `);
      $(".delete-feedback").html(updateCharHtml);
    })
    .catch((err) => {
      console.log(err);
    })

  }
}