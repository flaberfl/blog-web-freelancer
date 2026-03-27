// Подключение функционала "Чертоги Фрилансера"
import {
  isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
  flsModules
} from "./modules.js";
window.addEventListener("load", function () {
  document.body.classList.remove("load");
});



// document.addEventListener('DOMContentLoaded', function () {
//   const allPostItems = document.querySelectorAll('.posts__items .post-item');
//   const loadMoreButton = document.getElementById('loadMoreBtn');

//   const initialVisibleCount = 6; // Изначально видно 6 элементов
//   const itemsToShowPerClick = 6; // Количество элементов, которое откроется по клику

//   let currentIndex = initialVisibleCount; // Индекс первого элемента, который *может* быть показан следующим

//   // Функция для обновления видимости кнопки
//   function updateButtonVisibility() {
//     // Если текущий индекс (место, где начнутся следующие показываемые) больше или равен общем        // значит, всё показали.
//     if (currentIndex >= allPostItems.length) {
//       loadMoreButton.classList.add('hidden'); // Используем класс для скрытия
//     } else {
//       loadMoreButton.classList.remove('hidden'); // Показываем кнопку
//     }
//   }

//   // Изначально проверяем, нужно ли сразу скрывать кнопку (если всего 6 или меньше элементов)
//   updateButtonVisibility();

//   loadMoreButton.addEventListener('click', function () {
//     let shownThisTime = 0;

//     // Цикл для показа следующих itemsToShowPerClick элементов
//     for (let i = currentIndex; i < allPostItems.length && shownThisTime < itemsToShowPerClick; i++) {
//       allPostItems[i].style.display = 'block'; // Показываем элемент
//       currentIndex++; // Переходим к следующему потенциальному элементу
//       shownThisTime++; // Увеличиваем счётчик показанных в этом клике
//     }

//     // После показа новых элементов, проверяем, нужно ли скрыть кнопку
//     updateButtonVisibility();
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
  const allPostItems = document.querySelectorAll('.front-posts__items .post-item');
  const loadMoreButton = document.getElementById('loadMoreBtn');
  const loadAllButton = document.getElementById('loadAllBtn');


  if (!loadAllButton) {
    console.log("Кнопка 'loadAllBtn' не найдена на этой странице.");
    return; // Прерываем выполнение, если кнопка не найдена
  }

  const initialVisibleCount = 6;
  const itemsToShowPerClick = 6;

  let currentIndex = initialVisibleCount;

  // Скрываем "Смотреть все статьи" по умолчанию
  loadAllButton.classList.add('hidden');

  function updateButtonVisibility() {
    if (currentIndex >= allPostItems.length) {
      loadMoreButton.classList.add('hidden');
      loadAllButton.classList.remove('hidden'); // Показываем "Смотреть все"
    } else {
      loadMoreButton.classList.remove('hidden');
      loadAllButton.classList.add('hidden'); // Скрываем "Смотреть все"
    }
  }

  // Изначально скрываем/показываем кнопки в зависимости от количества элементов
  updateButtonVisibility();

  loadMoreButton.addEventListener('click', function () {
    let shownThisTime = 0;

    for (let i = currentIndex; i < allPostItems.length && shownThisTime < itemsToShowPerClick; i++) {
      allPostItems[i].style.display = 'block';
      currentIndex++;
      shownThisTime++;
    }

    updateButtonVisibility();
  });
});


// Проверяем наличие элемента .header

// const header = document.querySelector('.header');
// if (header) {
//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 40) {
//       header.classList.add('_fixed');
//     } else {
//       header.classList.remove('_fixed');
//     }
//   });
// }