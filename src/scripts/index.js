/* Desenvolva sua lógica aqui */

const renderList = (array) => {
  const unorderedListCard = document.querySelector(".card__list");
  showAndCoverValues(insertedValues);
  unorderedListCard.innerHTML = "";
  array.forEach((card) => {
    const listItemCard = document.createElement("li");
    const divCardContent = document.createElement("div");
    const paragraphContent = document.createElement("p");
    const divCardButtons = document.createElement("div");
    const exitButton = document.createElement("button");
    const garbageButton = document.createElement("button");
    const garbageImage = document.createElement("img");

    listItemCard.classList.add("card__item");
    exitButton.classList.add("exit__button");
    divCardContent.classList.add("card__content");
    paragraphContent.innerText = `R$ ${card.value
      .toFixed(2)
      .replace(".", ",")}`;
    divCardButtons.classList.add("card__buttons");
    garbageButton.dataset.cardId = card.id;
    garbageButton.classList.add("garbage__button");

    garbageImage.src = "../../src/assets/trash.svg";
    garbageImage.classList.add("garbage__image");
    // Fazendo os appends:
    divCardContent.append(paragraphContent);
    divCardButtons.append(exitButton, garbageButton);
    garbageButton.append(garbageImage);
    listItemCard.append(divCardContent, divCardButtons);
    unorderedListCard.append(listItemCard);

    if (card.categoryID == 1) {
      exitButton.innerText = "Saída";
    } else {
      exitButton.innerText = "Entrada";
    }
    handleDeleteButton(array, card, garbageButton);
    arraySum(array);
  });
};

const arrayFilter = (array) => {
  const filterButtons = document.querySelectorAll(".financial__buttons");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id == "all") {
        renderList(array);
      } else {
        const filteredArray = array.filter(
          (element) => element.categoryID == Number(button.id)
        );
        renderList(filteredArray);
      }
    });
  });
};

const arraySum = (array) => {
  const entrance = array.filter((element) => element.categoryID == 0);
  const entraceValue = entrance.map((element) => element.value);
  const totalEntrance = entraceValue.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  const exits = array.filter((element) => element.categoryID == 1);
  const exitsValue = exits.map((element) => element.value);
  const totalExits = exitsValue.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  const sumValue = document.querySelector("#sumValue");

  sumValue.innerText = `R$${(totalEntrance - totalExits).toFixed(2)}`;
};

const handleDeleteButton = (array, item, button) => {
  button.addEventListener("click", (event) => {
    const indexArray = array.findIndex((element) => {
      return element.id === item.id;
    });
    const removedItem = array.splice(indexArray, 1);
    renderList(array);
    arraySum(array);
  });
};

const makeFilterButtonsPurple = () => {
  const filterButtons = document.querySelectorAll(".financial__buttons");

  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
      if (filterButton.classList.contains("financial__buttons")) {
        filterButton.classList.add("purple__buttons");
        filterButton.classList.remove("financial__buttons");
      } else {
        filterButton.classList.add("financial__buttons");
        filterButton.classList.remove("purple__buttons");
      }
    });
  });
};

const showAndCoverValues = (array) => {
  const registredValue = document.querySelector(".noEntrance");

  if (array.length > 0) {
    registredValue.style.display = "none";
  } else if (array.length == 0) {
    registredValue.style.display = "block";
  }
};

// // chamada da função
makeFilterButtonsPurple();
renderList(insertedValues);
arrayFilter(insertedValues);
