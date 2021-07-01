/*инициация всех попапов на странице*/ 
let popupEdit = document.querySelector(".popup_edit");
let popupNewCard = document.querySelector('.popup_new-card');
let popupImage = document.querySelector('.popup_image');

let popupNewCard = document.querySelector('.popup_new-card');
/*Кнопки открытия попапов */ 
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let imageButton = document.querySelector('.profile__add-button');

/*Кнопки закрытия попапов */ 
let popupCloseEdit = popupEdit.querySelector('.popup__close');
let popupCloseNewCard = popupNewCard.querySelector('.popup__close');
//обработка открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened')
}

//обработка закрытия popup
function closePopup(popup) {
 popup.classList.remove("popup_opened");
}

//Открытие popup редактирования
editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  
});

//Открытие popup добавления формы
addButton.addEventListener('click', () => {
  openPopup(popupNewCard);
});

//Открытие popup крупной картинки
editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  
});

//Закрытие popup редактирования
popupCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit)
});

//Закрытие popup добавления формы
popupCloseNewCard.addEventListener('click', () => {
  closePopup(popupNewCard)
});


/*Обработка сохранения данных формы редактирования профиля */
let profileName = document.querySelector('.profile__title');
let profileProfession = document.querySelector('.profile__subtitle');

let formEditProfileInfo = popupEdit.querySelector('.popup__form');
let inputEditProfileName = popupEdit.querySelector('#user-name');
let inputEditProfileProf = popupEdit.querySelector('#user-profession');



/*Функция сохранения */
function editFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputEditProfileName.value;
  profileProfession.textContent = inputEditProfileProf.value;
  closePopup(popupEdit);

}

formEditProfileInfo.addEventListener('submit', editFormSubmit);

/*Массив карточек */ 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const placesList = document.querySelector('.places__list');
const templateCard = document.querySelector('#template-card').content;


/*Добавление массива карточек */ 


/*Добавление картчоки на страницу */ 


/*Удаление карточек со страницы */ 

