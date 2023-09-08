from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Person,Product
from .serailizers import PersonSerializer,ProductSerializer
from django.http import HttpResponse
from django.db.models import F,ExpressionWrapper,FloatField
from django.db.models import Q

class PersonDetails(APIView):
    def get(self,request):
        obj=Person.objects.all()
        serializer=PersonSerializer(obj,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)


    def post(self,request):
        serializer=PersonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)

    
# Create your views here.
class PersonInfo(APIView):
    def get(self,request,id):
        try:
            obj=Person.objects.get(id=id)
        except Person.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_400_BAD_REQUEST)
        serializer=PersonSerializer(obj)
        return Response(serializer.data,status=status.HTTP_200_OK)
    def put(self,request,id):
        try:
            obj=Person.objects.get(id=id)
        except Person.DoesNotExist:
            msg={"msg":"not found error"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer =PersonSerializer(obj,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self,request,id):
        try:
            obj=Person.objects.get(id=id)
        except Person.DoesNotExist:
            msg={"msg":"not found error"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer =PersonSerializer(obj,data=request.data,partial=True )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request,id):
        try:
            obj=Person.objects.get(id=id)
        except Person.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        obj.delete()
        return Response({"msg":"deleted"},status=status.HTTP_204_NO_CONTENT)


   
class ProductDetails(APIView):
    def get(self,request):
        obj=Product.objects.all()
        serializer=ProductSerializer(obj,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer=ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)
    



class ProductsInfo(APIView):
    def get(self,request,id):
        try:
            obj=Product.objects.get(id=id)
        except Product.DoesNotExist:
            msg={"msg":"Not Found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=ProductSerializer(obj)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
 
    
    def patch(self,request,id):
        try:
            obj=Product.objects.get(id=id)
        except Product.DoesNotExist:
            msg={"msg":"not found error"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer =ProductSerializer(obj,data=request.data,partial=True )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,id):
        try:
            obj=Product.objects.get(id=id)
        except Product.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        obj.delete()
        return Response({"msg":"deleted"},status=status.HTTP_204_NO_CONTENT)
    def put(self,request,id,value):
        try:
            obj=Product.objects.get(id=id)
            d={}
            d['pid']=obj.pid
            d['name']=obj.name
            d['price']=obj.price
            print(obj,"************")
            if(value=='decrement'):
                if(obj.qnty>1):
                    obj.qnty-=1
                    d['qnty']=obj.qnty
                # else:
                #     return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            elif(value=='increment'):
                obj.qnty +=1
                d['qnty']=obj.qnty
        except Product.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=ProductSerializer(obj,data=d)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class UpdatedData(APIView):
       def put(self,request,id):
            try:
                obj=Product.objects.get(id=id)
            except Product.DoesNotExist:
                msg={"msg":"not found error"}
                return Response(msg,status=status.HTTP_404_NOT_FOUND)
            serializer =ProductSerializer(obj,data=request.data)
            if serializer.is_valid():
                 serializer.save()
                 return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class SearchProduct(APIView):
    def get(self,request):
        obj=Product.objects.all()
        query=request.GET.get("q")
        if query is not None:
            data=obj.filter(name__icontains=query)
            return Response(data.values())

class SearchPersons(APIView):
    def get(self,request):
        obj=Person.objects.all()
        query=request.GET.get("q")
        if query is not None:
            data=obj.filter(Q(fname__icontains=query) | Q(lname__icontains=query) | Q(course__icontains=query) | Q(email__icontains=query))
            return Response(data.values())
        

class SearchProductBasedOnPrice(APIView):
    def get(self,request):
        obj=Product.objects.all()
        query=request.GET.get("qp")
        if query is not None:
            data=obj.filter(price__gte=query)
            return Response(data.values())
        
class SearchingProduct(APIView):
    def post(self,request):
        # print("sdfhkllllllllll")
        # print(request.data,"putttttttttttttttttttt")
        search = request.data["queryyyy"]  # Get the search query from the request parameters
        # print(search)
        products = Product.objects.filter(name__icontains=search)  # Perform case-insensitive name search
        serializer = ProductSerializer(data=products, many=True)
        # print(serializer,"###################")
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
   
class ProductRange(APIView):
    def get(self,request,r):
        # min=request.data["min"]
        # max=request.data["max"]
        # obj=Product.objects.all()
        # if min & max:
        #     products=obj.filter(price__range=(min,max))
        # elif min:
        #     products=obj.filter(price__gte=min)
        # elif max:
        #     products=obj.filter(price__lte=max)
        # # p=ProductSerializer(data=products,many=True)
        # # if p.is_valid():
        # #     p.save()
        # #     return Response(p.data,status=status.HTTP_201_CREATED)
        # return Response(products.values(),status=status.HTTP_400_BAD_REQUEST)
        # ran=request.data["range"]
        if r=="select":
            pro=Product.objects.all()
        elif r=="0-100":
            pro=Product.objects.filter(price__range=(0,100))
        elif r=="100-500":
            pro=Product.objects.filter(price__range=(100,500))
        elif r=="500-1000":
            pro=Product.objects.filter(price__range=(500,1000))
        elif r=="1000+":
            pro=Product.objects.filter(price__gte=1000)
        elif r=="500+":
            pro=Product.objects.filter(price__gte=500)
        else:
            return Response({"msg":"Not Found"},status=status.HTTP_400_BAD_REQUEST)
        serializer=ProductSerializer(pro,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)