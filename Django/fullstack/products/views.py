from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import ProductsList
from .serailizer import ProductsSerailizer
import datetime



# Create your views here.

class ProductsInfo(APIView):
    def get(self,request):
        object=ProductsList.objects.all()
        serializer=ProductsSerailizer(object,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer=ProductsSerailizer(data=request.data,many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

class ProductsDetails(APIView):
    def get(self,request,id):
        try:
            obj=ProductsList.objects.get(id=id)
        except ProductsList.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=ProductsSerailizer(obj)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def put(self,request,id):
        try:
            obj=ProductsList.objects.get(id=id)
        except ProductsList.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=ProductsSerailizer(obj,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self,request,id):
        try:
            obj=ProductsList.objects.get(id=id)
        except ProductsList.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=ProductsSerailizer(obj,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

    def delete(self,request,id):
        try:
            obj=ProductsList.objects.get(id=id)
        except ProductsList.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        obj.delete()
        return Response({"msg":"deleted"},status=status.HTTP_204_NO_CONTENT)

# Products will be displayed based on product name and price
class productName(APIView):
    def get(self,request,value,prc):
        try:
            obj=ProductsList.objects.filter(product_name=value,price=prc) 
        except ProductsList.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=ProductsSerailizer(obj,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

# Archived products will be displayed
class ProductsInfoo(APIView):
    def get(self,request,is_archived):
        try:
            archived_products = ProductsList.objects.filter(is_archived=is_archived)
            serializer=ProductsSerailizer(archived_products,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
            
        except ProductsList.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)

        
#Favourite products will be displayed
class FavProducts(APIView):
    def get(self,request,is_favourite):
        try:
            fav_products=ProductsList.objects.filter(favourite=is_favourite)
            serializer=ProductsSerailizer(fav_products,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except ProductsList.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
    # def get(self,request,datee):
    #     # date=request.data['pub_date']
    #     try:
    #         obj=ProductsList.objects.filter(pub_date=datee)
    #     except ProductsList.DoesNotExist:
    #         msg={"msg":"not found"}  
    #         return Response(msg,status=status.HTTP_404_NOT_FOUND)
    #     serializer=ProductsSerailizer(obj,many=True)
    #     return Response(serializer.data,status=status.HTTP_200_OK)
class Fetching(APIView):
    def get(self,request,week):
        if(week=="thisweek"):
            date=datetime.date.today()
            start_week=date-datetime.timedelta(date.weekday())
            end_week=start_week+datetime.timedelta(7)
            try:
                obj=ProductsList.objects.filter(pub_date__range=[start_week,end_week])
            except ProductsList.DoesNotExist:
                msg={"msg":"not found"}
                return Response(msg,status=status.HTTP_404_NOT_FOUND)
            serializer=ProductsSerailizer(obj,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        elif(week=="lastweek"):
            date=datetime.date.today()-datetime.timedelta(7)
            start_week=date-datetime.timedelta(date.weekday())
            end_week=start_week+datetime.timedelta(6)
            try:
                  obj=ProductsList.objects.filter(pub_date__range=[start_week,end_week])
            except ProductsList.DoesNotExist:
                msg={"msg":"not found"}
                return Response(msg,status=status.HTTP_404_NOT_FOUND)
            serializer=ProductsSerailizer(obj,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        elif(week=="thismonth"):
            todate=datetime.date.today().month
            # print(todate.month)
            try:
                obj=ProductsList.objects.filter(pub_date__month=todate)
            except ProductsList.DoesNotExist:
                msg={"msg":"not found"}
                return Response(msg,status=status.HTTP_404_NOT_FOUND)
            serializer=ProductsSerailizer(obj,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self,request):
        if request.data['week'] == 'thisweek':
            date=datetime.date.today()
            start_week=date-datetime.timedelta(date.weekday())
            end_week=start_week+datetime.timedelta(7)
            try:
                obj=ProductsList.objects.filter(pub_date__range=[start_week,end_week])
            except ProductsList.DoesNotExist:
                msg={"msg":"not found"}
                return Response(msg,status=status.HTTP_404_NOT_FOUND)
            serializer=ProductsSerailizer(obj,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        elif request.data['week'] == 'lastweek':
            date=datetime.date.today()-datetime.timedelta(7)
            start_week=date-datetime.timedelta(date.weekday())
            end_week=start_week+datetime.timedelta(6)
            try:
                  obj=ProductsList.objects.filter(pub_date__range=[start_week,end_week])
            except ProductsList.DoesNotExist:
                msg={"msg":"not found"}
                return Response(msg,status=status.HTTP_404_NOT_FOUND)
            serializer=ProductsSerailizer(obj,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        elif request.data['week'] == 'thismonth':
            todate=datetime.date.today().month
            toyear=datetime.date.today().year
            print(toyear)
            try:
                obj=ProductsList.objects.filter(pub_date__month=todate,pub_date__year=toyear)
            except ProductsList.DoesNotExist:
                msg={"msg":"not found"}
                return Response(msg,status=status.HTTP_404_NOT_FOUND)
            serializer=ProductsSerailizer(obj,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)


