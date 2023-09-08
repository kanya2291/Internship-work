from rest_framework import serializers
from .models import ProductsList

class ProductsSerailizer(serializers.ModelSerializer):
    class Meta:
        model=ProductsList
        fields="__all__"