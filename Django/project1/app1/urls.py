from django.urls import path
from .views import EmployeeDetail,EmployeeInfo
from .views import PersonInfo
from . import views


urlpatterns=[
    # path('',views.index,name='index'),
    # path('add',views.add,name='add')
    path("per/",PersonInfo.as_view(),name="per"),
    path("emp/",EmployeeDetail.as_view(),name="emp"),
    path("emp/<int:id>/",EmployeeInfo.as_view())
]