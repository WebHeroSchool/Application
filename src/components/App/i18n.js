import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


export const setLanguage = (event) => {
  if (event.target.value === 'eng') {
  i18n.changeLanguage('en')
  } else if (event.target.value === 'rus') {
  i18n.changeLanguage('ru')
  }
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          description: {
            app__lang: 'Lang',
            about: 'About', 
            tasks: 'Tasks', 
            contacts: 'Contacts', 
            todolist__title: 'TODOLIST', 
            footer1: 'Task(s) left:', 
            footer2: 'All', 
            footer3: 'Completed', 
            footer4: 'In progress', 
            footer5: 'Delete completed:', 
            about__text1: 'There is something wrong',
            about__text2: 'There information is:',
            about__title: 'About',
            about__profile: 'Profile',
            about__bio: 'Young, fresh and perspective - Frontend Developer',
            about__bio2: 'Already know what to do',
            about__location: 'Location: St. Petersburg',
            about__repoTitle: 'Repositories on github.com',
            repositories__text1: 'There is something wrong',
            repositories__text2: 'The repositories list is empty on ',
            repositories__update: 'Last update: ',
            contacts__text1: 'There is something wrong',
            contacts__text2: 'There information is:',
            contacts__title: 'Contacts',
            contacts__name: 'Anton Androsiuk',
            InputItem__empty: 'This field cannot be empty!',
            InputItem__same: 'This task has already been added!',
            InputItem__success: 'Your task was successfully added!',
            InputItem__edited: 'Your task was successfully edited!',
            InputItem__deleted: 'Your task was successfully deleted!',
            InputItem__create: 'CREATE',
          }
        }  
      },
      ru: {
        translation: {
          description: {
            app__lang: 'Язык',
            about: 'Обо мне', 
            tasks: 'Мои дела', 
            contacts: 'Контакты', 
            todolist__title: 'Мои дела', 
            footer1: 'Дел осталось:', 
            footer2: 'Все', 
            footer3: 'Выполнено', 
            footer4: 'В процессе', 
            footer5: 'Удалить сделанные:',
            about__text1: 'Что-то здесь не так..',
            about__text2: 'Скорее всего:',
            about__title: 'Обо мне',
            about__profile: 'Профиль',
            about__bio: 'Молод, свеж, перспективен, двумя словами - Фронтенд Разработчик',
            about__bio2: 'Уже знаю, что делать',
            about__location: 'Местоположение: СПб',
            about__repoTitle: 'Репозитории на github.com',
            repositories__text1: 'Что-то здесь не так..',
            repositories__text2: 'Список репозиториев пуст на ',
            repositories__update: 'Последнее обновление: ',
            contacts__text1: 'Что-то здесь не так..',
            contacts__text2: 'Скорее всего:', 
            contacts__title: 'Контакты',
            contacts__name: 'Антон Андросюк',
            InputItem__empty: 'Поле не может быть пустым!',
            InputItem__same: 'Эта задача уже была добавлена!',
            InputItem__success: 'Задача успешно добавлена!',
            InputItem__edited: 'Задача успешно изменена!',
            InputItem__deleted: 'Задача успешно удалена!',
            InputItem__create: 'СОЗДАТЬ',
          }
        }  
      } 
    }
  });

export default i18n;