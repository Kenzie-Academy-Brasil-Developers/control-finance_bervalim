/* Desenvolva sua lógica aqui */

const openModal = () => {
  const modalController = document.querySelector(".modal__controller");
  const registerValueButton = document.querySelector(".insert__value");
  const noEntranceSection = document.querySelector(".noEntrance");

  registerValueButton.addEventListener("click", () => {
    modalController.showModal();
    closeModal();
  });

  noEntranceSection.addEventListener("click", () => {
    modalController.showModal();
    closeModal();
  });
};

const handleModalForm = () => {
  const createButton = document.querySelector(".modal__button--purple");
  const modal__controller = document.querySelector(".modal__controller");

  createButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputTransaction =
      +document.querySelector(".input__trasaction").value;

    const inputRadioTransaction = document.querySelector(
      "input[type='radio']:checked"
    );

    let newTransaction = {
      id: insertedValues.length + 1,
      value: inputTransaction,
      categoryID: inputRadioTransaction.value,
    };
    insertedValues.push(newTransaction);
    modal__controller.close();
    renderList(insertedValues);
  });
};

const closeModal = () => {
  const modalController = document.querySelector(".modal__controller");
  const closeModalButton = document.querySelector(".modal__close");

  closeModalButton.addEventListener("click", () => {
    modalController.close();
  });
};

openModal();
closeModal();
handleModalForm(insertedValues);
