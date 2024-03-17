from django.db import models

class News(models.Model):
    news_id = models.AutoField(primary_key=True)
    title = models.CharField(null=True, blank=True, max_length=200)  # Adjusted from 20 to 200 based on common practice
    category = models.CharField(null=True, blank=True, max_length=50)
    author = models.CharField(null=True, blank=True, max_length=50)
    length = models.IntegerField(null=True, blank=True)
    description = models.CharField(null=True, blank=True, max_length=5000)  # Adjusted to 500 characters
    publishDate = models.DateField(null=True, blank=True)  # DATE in MySQL corresponds to DateField in Django
    url = models.CharField(null=True, blank=True, max_length=100)
    popular = models.BooleanField(null=True, blank=True)  # TINYINT(1) is often used as a boolean in MySQL
    source = models.CharField(null=True, blank=True, max_length=100)

    class Meta:
        db_table = 'api_news'

    def __str__(self):
        return self.title