from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework import viewsets  # Assuming this is needed for NewsViewSet
from .views import submit_transport_request, NewsViewSet

router = DefaultRouter()
router.register(r'news', NewsViewSet)

urlpatterns = [
    path('api/hello/', views.hello_world),
    path('api/submit-transport-request/', submit_transport_request, name='submit_transport_request'),
    path('api/', include(router.urls)),  # Router endpoints under /api/
]
