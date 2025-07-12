from django.core.management.base import BaseCommand
from shop.models import Category, Perfume

class Command(BaseCommand):
    help = 'Seed the database with sample perfumes and categories'

    def handle(self, *args, **kwargs):
        # Clear existing data
        Perfume.objects.all().delete()
        Category.objects.all().delete()

        # Create categories
        floral = Category.objects.create(name='Floral', slug='floral')
        fresh = Category.objects.create(name='Fresh', slug='fresh')
        woody = Category.objects.create(name='Woody', slug='woody')

        # Create sample perfumes
        Perfume.objects.create(
            name='Rose Petal',
            brand='Aroma Wink',
            category=floral,
            description='A romantic floral scent with notes of rose and jasmine.',
            price=120.00,
            stock=10,
            top_notes='Rose, Bergamot',
            middle_notes='Jasmine, Lily',
            base_notes='Musk, Amber',
            image='perfumes/rose_petal.jpg'
        )
        Perfume.objects.create(
            name='Ocean Breeze',
            brand='Aroma Wink',
            category=fresh,
            description='A fresh aquatic fragrance evoking the sea breeze.',
            price=95.00,
            stock=15,
            top_notes='Sea Salt, Lemon',
            middle_notes='Lavender, Marine Accord',
            base_notes='Cedarwood, Musk',
            image='perfumes/ocean_breeze.jpg'
        )
        Perfume.objects.create(
            name='Sandalwood Noir',
            brand='Aroma Wink',
            category=woody,
            description='A mysterious woody scent with rich sandalwood and spices.',
            price=150.00,
            stock=8,
            top_notes='Sandalwood, Pepper',
            middle_notes='Cedar, Patchouli',
            base_notes='Vanilla, Amber',
            image='perfumes/sandalwood_noir.jpg'
        )

        self.stdout.write(self.style.SUCCESS('Sample perfumes and categories created successfully.'))
