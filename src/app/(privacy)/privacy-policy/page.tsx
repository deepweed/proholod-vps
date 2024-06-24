import Link from 'next/link';
import React from 'react';

const TermsOfUse = () => {
  return (
    <>
      <h1 className="mb-2 text-2xl font-semibold">Политика конфиденциальности</h1>
      <p className="text-base font-medium text-gray-500">Дата последнего изменения: <span className="text-blue-700">21.06.2024</span></p>
      <p className="text-base font-medium text-gray-500 mb-4">Текущая актуальная версия расположена по адресу <Link href="/privacy-policy" className="text-blue-700">https://proholod.pro/privacy-policy</Link></p>
      <h2 className="mb-2 text-xl font-semibold">1. Общие положения</h2>
      <p className="text-base font-medium text-gray-500">1.1. Настоящая Политика конфиденциальности (далее — Политика) регулирует обработку и защиту персональных данных пользователей сайта PROХолод (далее — Сайт), принадлежащего ИП Тарасов Денис Анатольевич (далее — Оператор).</p>
      <p className="text-base font-medium text-gray-500 mb-2">1.2. Используя наш Сайт и предоставляя свои персональные данные через формы обратной связи, вы соглашаетесь с условиями данной Политики.</p>
      <h2 className="mb-2 text-xl font-semibold">2. Персональные данные, которые мы собираем</h2>
      <p className="text-base font-medium text-gray-500 mb-2">2.1. Мы собираем и обрабатываем следующие персональные данные: Имя, Номер телефона.</p>
      <h2 className="mb-2 text-xl font-semibold">3. Цели сбора и обработки персональных данных</h2>
      <p className="text-base font-medium text-gray-500 mb-2">3.1. Персональные данные пользователей собираются и обрабатываются исключительно для следующих целей: Обратная связь с пользователями, Предоставление информации о наших продуктах и услугах</p>
      <h2 className="mb-2 text-xl font-semibold">4. Сроки хранения данных</h2>
      <p className="text-base font-medium text-gray-500">4.1. Мы храним персональные данные пользователей только в течение времени, необходимого для достижения целей, указанных в разделе 3 данной Политики.</p>
      <p className="text-base font-medium text-gray-500 mb-2">4.2. После достижения указанных целей или по запросу пользователя персональные данные уничтожаются.</p>
      <h2 className="mb-2 text-xl font-semibold">5. Защита персональных данных</h2>
      <p className="text-base font-medium text-gray-500 mb-2">5.1. Мы принимаем все необходимые меры для защиты персональных данных пользователей от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
      <h2 className="mb-2 text-xl font-semibold">6. Права пользователей</h2>
      <p className="text-base font-medium text-gray-500 mb-2">6.1. Пользователи имеют право: Запрашивать информацию о своих персональных данных, которые мы обрабатываем, Требовать исправления или удаления своих персональных данных.</p>
      <h2 className="mb-2 text-xl font-semibold">7. Согласие пользователя</h2>
      <p className="text-base font-medium text-gray-500 mb-2">7.1. Отправляя форму обратной связи на нашем Сайте, пользователь автоматически соглашается с условиями данной Политики конфиденциальности.</p>
      <h2 className="mb-2 text-xl font-semibold">8. Изменение Политики конфиденциальности</h2>
      <p className="text-base font-medium text-gray-500 mb-2">8.1. Мы оставляем за собой право в любое время изменять или обновлять настоящую Политику конфиденциальности без предварительного уведомления пользователя. Обновленная версия Политики вступает в силу с момента её публикации на Сайте.</p>
      <h2 className="mb-2 text-xl font-semibold">9. Контактная информация</h2>
      <p className="text-base font-medium text-gray-500">9.1 Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты 6650462@mail.ru.</p>
      <p className="text-base font-medium text-gray-500"></p>
    </>
  );
};

export default TermsOfUse;