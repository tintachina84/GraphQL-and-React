# GraphQL-and-React

https://subscription.packtpub.com/book/web-development/9781801077880

Run the following commands for the MySQL container:
```shell
podman run --name mysql-container -e MYSQL_ROOT_PASSWORD=1234 -d -p 3306:3306 mysql:8.0.34
```

Run the following commands in the MySQL shell:
```text
CREATE USER 'devuser'@'%' IDENTIFIED BY 'PASSWORD';

GRANT ALL PRIVILEGES ON *.* TO 'devuser'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;

CREATE DATABASE graphbook_dev CHARACTER SET utf8 COLLATE utf8_general_ci;
```

Run the following commands in the project root directory for migrations and seeders:
```shell
sequelize db:migrate:undo --migrations-path src/server/migrations --config src/server/config/index.js
sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js

sequelize db:seed:undo:all --seeders-path src/server/seeders --config src/server/config/index.js
sequelize db:seed:all --seeders-path src/server/seeders --config src/server/config/index.js
```

Run the following commands in the project root directory:
```shell
npm run client:build
npm run client
npm run server
```

Run the following commands in the project root directory for styleguide:
```shell
npx styleguidist build
```
