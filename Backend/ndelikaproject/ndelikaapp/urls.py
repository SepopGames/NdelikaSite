from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import submit_transport_request
from .views import NewsViewSet

router = DefaultRouter()
router.register(r'news', NewsViewSet)

urlpatterns = [
    path('api/hello/', views.hello_world),  path('api/submit-transport-request/', submit_transport_request, name='submit_transport_request'), path('',include(router.urls)),
]

