from django.db import models

# Create your models here. Where db is created and how tables should look like

class News(models.Model):
    title = models.CharField(null=True, blank=True, max_length=512)
    category = models.CharField(null=True, blank=True, max_length=255)
    author = models.CharField(null=True, blank=True, max_length=255)
    length = models.IntegerField(null=True, blank=True)
    url = models.CharField(null=True, blank=True, max_length=255)
    source = models.CharField(null=True, blank=True, max_length=255)

    # can be saved in db with null value, can submit form with no value
    body = models.TextField(null=True, blank=True)
    # when save method is ran it will take time stamp and update it to db
    updated = models.DateTimeField(auto_now=True)
    # only takes timestamp on creation of model (next time saved, it wont take timestamp)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        # save first 50 characters
        return self.title