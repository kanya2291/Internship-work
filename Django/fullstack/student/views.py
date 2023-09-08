from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Student,Exam
from .serailizer import StudentSerailizer,ExamSerailizer
from django.db.models import F,ExpressionWrapper,FloatField
# Create your views here.

class StudentDetails(APIView):
    def get(self,request):
        obj=Student.objects.all()
        serializer=StudentSerailizer(obj,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer=StudentSerailizer(data=request.data,many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class StudentInfo(APIView):
    def get(self,request,id):
        try:
            obj=Student.objects.get(id=id)
        except Student.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=StudentSerailizer(obj)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
class StudentCourse(APIView):
    def get(self,request,crs):
        try:
            obj=Student.objects.filter(course=crs)
        except Student.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=StudentSerailizer(obj,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)


class ExamDetails(APIView):
    def get(self,request):
        try:
            obj=Exam.objects.all()
        except Exam.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=ExamSerailizer(obj,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer=ExamSerailizer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)  
    

class PassStudents(APIView):
        def get(self,request,format=None):
            try:
                obj=Student.objects.filter(examdet__percentage__gt=50)
            except Student.DoesNotExist:
                msg={"msg":"not found"}
                return Response(msg,status=status.HTTP_404_NOT_FOUND)
            serializer=StudentSerailizer(obj,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
    
