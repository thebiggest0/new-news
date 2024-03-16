i. make sure python-3 is up to date
ii. pip3 install pipenv (set up venv)
iii. pipenv shell (initiate venv)
iv. >python set interpreter to venv

## Setup DJANGO w/ CMD

1. pipenv install django (CMD)

2. django-admin startproject name (CMD)

3. python manage.py runserver

4. python manage.py startapp api

## Setup DJANGO w/ code

1. put 'app.app.ApiConfig', to INSTALLED_APPS in setting.py of project (connects core django project to app we added)

2. setup db in models.py in app

3. python manage.py migrate

4. python manage.py makemigrations (CMD) - add our model to db

5. python manage.py migrate

## Create admin acc

1. python manage.py createsuperuser (CMD) - put in info

## Install django rest framework

1. pip install djangorestframework (CMD)

2. add 'rest_framework', to INSTALLED_APPS in setting.py

3. in views.py can use: import from rest_framework

## Setup proxy url routing

1. npm install react-router-dom + @types/react-router-dom (already did it in template)

2. update vite.config and package.json with correct proxy info

## setup serializers.py in backend app

1. copy paste

## Create requests

1. CRUD in view.py of app to send response

2. Create urls.py in app and add path for requests

3. Create request with useState and useEffect in React
