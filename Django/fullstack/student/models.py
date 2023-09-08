from django.db import models

# Create your models here.

class Student(models.Model):
    student_ID=models.IntegerField()
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    email=models.EmailField()
    course=models.CharField(max_length=200)


class Exam(models.Model):
    sub=models.CharField(max_length=200)
    date=models.DateField("ExamDate")
    maxScore=models.IntegerField(default=93)
    actualScore=models.IntegerField()
    percentage=models.FloatField(null=True, blank=True, default=0)
    examdet=models.ForeignKey(Student,on_delete=models.CASCADE)

    def save(self,*args,**kwargs):
        self.percentage=round(((self.actualScore/self.maxScore)*100),2)
        super(Exam,self).save(*args,**kwargs)