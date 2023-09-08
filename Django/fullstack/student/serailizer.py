from rest_framework import serializers
from .models import Student,Exam

class StudentSerailizer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields="__all__"


class ExamSerailizer(serializers.ModelSerializer):
    class Meta:
        model=Exam
        fields="__all__"
