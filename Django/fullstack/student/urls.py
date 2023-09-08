from django.urls import path
from .views import StudentDetails,StudentInfo,StudentCourse,PassStudents,ExamDetails

urlpatterns=[
    path("std/",StudentDetails.as_view(),name="std"),
    path("std/<int:id>/",StudentInfo.as_view()),
    path("std/<str:crs>/",StudentCourse.as_view()),
    path("exm/",ExamDetails.as_view(),name="exm"),
    path("exmm/",PassStudents.as_view(),name="exm")
]