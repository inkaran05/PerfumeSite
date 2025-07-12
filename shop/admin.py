from django.contrib import admin
from .models import Category, Perfume, Order, OrderItem

admin.site.register(Category)
admin.site.register(Perfume)
admin.site.register(Order)
admin.site.register(OrderItem)
