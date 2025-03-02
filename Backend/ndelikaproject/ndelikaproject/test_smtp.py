import smtplib
from email.mime.text import MIMEText
msg = MIMEText("Тестовое письмо")
msg['Subject'] = 'Тест'
msg['From'] = 'it@ndelika.ru'
msg['To'] = 'it@ndelika.ru'
try:
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login('ilas9022945@gmail.com', 'uddw tdrw ethb cwed')
        server.sendmail('it@ndelika.ru', ['it@ndelika.ru'], msg.as_string())
        print("Подключение к SMTP-серверу успешно!")
except Exception as e:
    print(f"Ошибка подключения: {e}")