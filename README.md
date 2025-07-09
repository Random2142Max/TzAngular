# TzAngular
Angular проект с Backend-ом и Frontend-ом. Также добавлены SQL скрипты, на основе TZ. (Тут нету скриптов, для создания БД и заполнения таблиц)

# Руководство по запуску проекта TzAngular

В этом проекте реализован backend на ASP.NET Core и frontend на Angular.
Ниже описаны шаги для запуска обеих частей.

---

## 1. Запуск backend (ASP.NET Core)

### Требования:
- .NET SDK (рекомендуется версия 8.0 или выше)
- Docker (если планируется запуск через контейнер)

### Шаги запуска:

1. Перейдите в папку backend с помощью консоли:

cd TzAngular.Backend

2. Установите зависимости и соберите проект (если нужно):

dotnet restore
dotnet build

3. Запустите backend сервер:

dotnet run

4. По умолчанию сервер будет доступен по адресу:

http://localhost:5180

5. Для удобства можно использовать Swagger UI для тестирования API:

http://localhost:5180/swagger/index.html

---

## 2. Запуск frontend (Angular)

### Требования:
- Node.js и npm (рекомендуется LTS-версия)
- Angular CLI (устанавливается глобально)

### Шаги запуска:

1. Перейдите в папку frontend:

cd TzAngular.Frontend

2. Установите зависимости:

npm install

3. Запустите dev-сервер Angular:

ng serve

4. Откройте браузер и перейдите по адресу:

http://localhost:4200

5. Angular приложение будет автоматически обновляться при изменениях в коде.

---

## 3. Важные замечания

- Backend и frontend работают как отдельные приложения и взаимодействуют через REST API.
- При необходимости настройте прокси для Angular (`proxy.conf.json`), чтобы избежать проблем с CORS при локальной разработке.
- В проекте используются стандартные структуры:

TzAngular.Backend/ # Backend (ASP.NET Core)
TzAngular.Frontend/ # Frontend (Angular)

- В Angular проекте основные файлы и папки:

src/app/ # Компоненты, сервисы, модули приложения
src/assets/ # Статические ресурсы
angular.json # Конфигурация Angular CLI
package.json # Зависимости npm
README.md # Документация проекта

- В Angular проекте присутствуют отдельно скрипты по требованию ТЗ
- Расположение:
TzAngular/SQL скрипты по Tz/AllSQLquerys.txt
---

## 4. Полезные команды

### Backend

- Сборка: `dotnet build`
- Запуск: `dotnet run`
- Тестирование API: открыть Swagger UI по адресу `/swagger`

### Frontend

- Установка зависимостей: `npm install`
- Запуск dev-сервера: `ng serve`
- Сборка для продакшена: `ng build --prod`

---

## 5. Контакты и помощь

Если возникнут вопросы по запуску или работе с проектом, обращайтесь к разработчикам или смотрите документацию по Angular и ASP.NET Core.

---

_Этот README.md поможет быстро запустить и начать работу с проектом TzAngular._
