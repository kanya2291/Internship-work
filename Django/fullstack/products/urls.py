from django.urls import path
from .views import ProductsInfo,ProductsDetails,productName,ProductsInfoo,FavProducts,Fetching

urlpatterns=[
    path('prd/',ProductsInfo.as_view(),name="prd"),
    path('prd/<int:id>/',ProductsDetails.as_view()),
    # path('prd/<str:value>/',productName.as_view()),
    path('prd/<str:value>/<int:prc>/',productName.as_view()),
    # path('prd/<str:is_archived>/',ProductsInfoo.as_view()),
    path('prd/<str:is_favourite>/',FavProducts.as_view()),
    # path('modern/<slug:datee>/',FavProducts.as_view())
    path('modern/',Fetching.as_view(),name="modern"),
    path('modern/<str:week>/',Fetching.as_view())
]