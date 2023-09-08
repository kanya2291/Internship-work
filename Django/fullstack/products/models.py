from django.db import models


# Create your models here.
class ProductsList(models.Model):
    product_Id=models.IntegerField()
    product_name=models.CharField(max_length=100)
    price=models.IntegerField()
    quantity=models.IntegerField()
    pub_date=models.DateField("Date")
    is_archived = models.BooleanField(default=False)
    favourite=models.BooleanField(default=False)

    def __str__(self):
        return f"{self.product_Id}--{self.product_name}--{self.price}--{self.quantity}--{self.pub_date}"
    
    