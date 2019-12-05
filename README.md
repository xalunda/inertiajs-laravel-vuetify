# Vuetify Ping CRM

A demo application to illustrate how Inertia.js works. Implemented with Vuetify

![](https://raw.githubusercontent.com/xalunda/inertiajs-laravel-vuetify/master/screenshot.png)

## Installation

Clone the repo locally:

```sh
git clone https://github.com/xalunda/inertiajs-laravel-vuetify.git pingcrm-vuetify
cd pingcrm-vuetify
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
npm ci
```

Build assets:

```sh
npm run dev
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.

```sh
touch database/database.sqlite
```

Run database migrations:

```sh
php artisan migrate
```

Run database seeder:

```sh
php artisan db:seed
```

Serving Laravel:

```sh
php artisan serve
```

You're ready to go! Visit Ping CRM in your browser, and login with:

- **Username:** johndoe@example.com
- **Password:** secret
