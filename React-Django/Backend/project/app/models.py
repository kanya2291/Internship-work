from django.db import models
from django.db.models import Sum

# Create your models here.
class Person(models.Model):
    pid=models.IntegerField()
    fname=models.CharField(max_length=150)
    lname=models.CharField(max_length=160)
    email=models.EmailField(max_length=254)
    course=models.CharField(max_length=150)


class Product(models.Model):
    pid=models.IntegerField()
    name=models.CharField(max_length=150)
    price=models.FloatField()
    qnty=models.IntegerField()
    total=models.FloatField(default=0.0)
    des=models.CharField(max_length=500,default="Product Information refers to any information held by an organisation about the products it produces, buys, sells or distributes. In the context of Product Information management (PIM), this typically refers to information relating to the selling and/or marketing of products via digital channels")

    def save(self,*args,**kwargs):
        self.total=self.price*self.qnty
        super(Product,self).save(*args,**kwargs)
    