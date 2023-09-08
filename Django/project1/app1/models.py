from django.db import models

# Create your models here.
class Employee(models.Model):
    eid=models.IntegerField()
    ename=models.CharField(max_length=50)
    esal=models.FloatField()

    def __str__(self):
        return f"{self.eid}--{self.ename}"

class Person(models.Model):
    pid=models.IntegerField()
    pname=models.CharField(max_length=50)

    def __str__(self):
        return f"{self.pid}--{self.pname}"
