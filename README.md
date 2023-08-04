# GraphQL-and-React

https://subscription.packtpub.com/book/web-development/9781801077880


```shell
podman run --name mysql-container -e MYSQL_ROOT_PASSWORD=1234 -d -p 3306:3306 mysql:8.0.34
```

```text
CREATE USER 'devuser'@'%' IDENTIFIED BY 'PASSWORD';

GRANT ALL PRIVILEGES ON *.* TO 'devuser'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;

CREATE DATABASE graphbook_dev CHARACTER SET utf8 COLLATE utf8_general_ci;
```


