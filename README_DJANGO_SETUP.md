# Perfume Website Django Setup and Usage

## Overview
This Django project implements a perfume e-commerce website backend with the following features:
- Models for Category, Perfume, Order, and OrderItem
- Views rendering Bootstrap and Tailwind CSS styled templates for home, product list, and product detail pages
- API endpoints for perfume data
- Admin panel registration for managing models
- Media file handling for perfume images
- Sample data seeding command

## Setup Instructions

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Apply migrations:**
   ```bash
   python manage.py migrate
   ```

3. **Seed sample data:**
   ```bash
   python manage.py seed_perfumes
   ```

4. **Run development server:**
   ```bash
   python manage.py runserver
   ```

5. **Access the site:**
   - Home page: http://127.0.0.1:8000/
   - Product list: http://127.0.0.1:8000/products/
   - Admin panel: http://127.0.0.1:8000/admin/

## Notes

- Media files are served from `/media/` URL during development.
- Add your own perfume images to `media/perfumes/` directory matching the seeded data filenames.
- For production, configure a proper web server to serve static and media files.

## Testing

- Verify navigation and rendering of all pages.
- Test API endpoints for expected data.
- Use Django admin to manage products and orders.

## Further Enhancements

- Implement user accounts and authentication.
- Add shopping cart and checkout functionality.
- Integrate payment gateway.
- Improve frontend with React or other frameworks.
