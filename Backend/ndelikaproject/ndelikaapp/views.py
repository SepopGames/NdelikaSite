from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import News
from .serializers import NewsSerializer
from rest_framework import viewsets

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Наши услуги:"})



@csrf_exempt
def submit_transport_request(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        from_location = data.get('from')
        to_location = data.get('to')
        method = data.get('method')
        phone = data.get('phone')
        email = data.get('email')
        comment = data.get('comment')

        # Формируем текст письма
        subject = 'Новая заявка на перевозку'
        message1 = f'''
        Откуда: {from_location}
        Куда: {to_location}
        Метод перевозки: {method}
        Телефон: {phone}
        Email: {email}
        Комментарий: {comment}
        '''

        # Отправляем письмо
        send_mail(
            subject,
            message1,
            'ilas9022945@gmail.com',  # От кого (ваш email)
            ['it@ndelika.ru'],  # Кому (ваш email)
            fail_silently=False,
        )

        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'}, status=400)


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer