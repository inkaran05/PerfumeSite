from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, Http404
from .models import Perfume, Category

def home(request):
    featured_perfumes = Perfume.objects.filter(stock__gt=0)[:3]
    return render(request, 'shop/home.html', {'featured_perfumes': featured_perfumes})

def product_list(request):
    perfumes = Perfume.objects.all()
    categories = Category.objects.all()
    return render(request, 'shop/product_list.html', {'perfumes': perfumes, 'categories': categories})

def product_detail(request, pk):
    perfume = get_object_or_404(Perfume, pk=pk)
    return render(request, 'shop/product_detail.html', {'perfume': perfume})

def perfume_list(request):
    perfumes = Perfume.objects.all()
    data = []
    for perfume in perfumes:
        data.append({
            'id': perfume.id,
            'name': perfume.name,
            'price': float(perfume.price),
            'image': perfume.image.url if perfume.image else '',
            'description': perfume.description,
        })
    return JsonResponse(data, safe=False)

def perfume_detail_api(request, pk):
    try:
        perfume = Perfume.objects.get(pk=pk)
    except Perfume.DoesNotExist:
        raise Http404("Perfume not found")
    data = {
        'id': perfume.id,
        'name': perfume.name,
        'price': float(perfume.price),
        'image': perfume.image.url if perfume.image else '',
        'description': perfume.description,
    }
    return JsonResponse(data)
