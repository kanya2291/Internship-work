# convert python data into byte stream data which is readable by backend and froont end ...to strore and retriev data
from rest_framework import serializers
from .models import Employee
from .models import  Person

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model=Person
        fields="__all__"


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields=["id","eid","ename","esal"]