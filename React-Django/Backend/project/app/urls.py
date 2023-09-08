from django.urls import path
from .views import PersonDetails,ProductDetails
from .views import PersonInfo,ProductsInfo,UpdatedData,SearchingProduct,SearchProduct,SearchPersons,SearchProductBasedOnPrice,ProductRange

urlpatterns=[
    path("prd/",PersonDetails.as_view(),name="prd"),
    path("prd/<int:id>/",PersonInfo.as_view()),
    path("prdd/",ProductDetails.as_view(),name="prdd"),
    path("prdd/<int:id>/<str:value>/",ProductsInfo.as_view()),
    path("prdd/<int:id>/",ProductsInfo.as_view()),
    path("upd/<int:id>/",UpdatedData.as_view()),
    path("search/",SearchProduct.as_view()),
    path('prdd/search/',SearchingProduct.as_view()),
    path('psearch/',SearchPersons.as_view()),
    path('pricesearch/',SearchProductBasedOnPrice.as_view()),
    path('psearchp/<str:r>/',ProductRange.as_view())
]