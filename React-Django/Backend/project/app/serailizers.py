from rest_framework import serializers
from .models import Person
from .models import Product

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model=Person
        fields="__all__"
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields="__all__"