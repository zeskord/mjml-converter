# mjml-converter
Преобразует тест MJML, в текст HTML с помощью простого HTTP-запроса. Включена функция вызова из 1С: Предприятие 8.3

# Подготовка к использованию
Создать файлы в папке
### ssl/cert.pem
### ssl/key.pem
### ssl/passphrase.txt

Скачать OpenSSL и выполнить
### openssl req -x509 -newkey rsa:2048 -days 365 -keyout key.pem -out cert.pem
Вводимое значение pass phrase сохранить в файле passphrase.txt
