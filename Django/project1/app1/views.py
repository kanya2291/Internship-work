from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Employee
from .serailizer import EmployeeSerializer
from .models import Person
from .serailizer import PersonSerializer
# from django.http import HttpResponse
# Create your views here.


# def index(request):
#     return render(request,'home.html',{'name':'kanna'})
# def add(request):
#     val1=int(request.GET['num1'])
#     val2=int(request.GET['num2'])
#     res=val1+val2
#     return render(request,"result.html",{"result":res})



# class PersonInfo(APIView):
#     def get(self,request):
#         output=[{"Employee":output.ename,
#                  "Employeeid":output.eid,
#                  "EmpSalary":output.esal}
#                  for output in Employee.objects.all()]
#         return Response(output)

class PersonInfo(APIView):
    def get(self,request):
        obj=Person.objects.all()
        serializer=PersonSerializer(obj,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    

class EmployeeDetail(APIView):
    def get(self,request):
        obj=Employee.objects.all()
        serializier=EmployeeSerializer(obj,many=True)
        return Response(serializier.data,status=status.HTTP_200_OK)
    

    def post(self,request):
        serializer=EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)
 
    
class EmployeeInfo(APIView):
    def get(self,request,id):
        try:
            obj=Employee.objects.get(id=id)
        except Employee.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=EmployeeSerializer(obj)
        return Response(serializer.data,status=status.HTTP_200_OK)
    def put(self,request,id):
        try:
            obj=Employee.objects.get(id=id)
        except Employee.DoesNotExist:
            msg={"msg":"not found error"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer =EmployeeSerializer(obj,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self,request,id):
        try:
            obj=Employee.objects.get(id=id)
        except Employee.DoesNotExist:
            msg={"msg":"not found error"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer =EmployeeSerializer(obj,data=request.data,partial=True )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request,id):
        try:
            obj=Employee.objects.get(id=id)
        except Employee.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        obj.delete()
        return Response({"msg":"deleted"},status=status.HTTP_204_NO_CONTENT)