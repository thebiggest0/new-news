from rest_framework.serializers import ModelSerializer
from . models import News

class NewsSerializer(ModelSerializer):
    class Meta:
        model = News
        # every single attribute in model serialize it all, if want specific make list and add attribute
        fields = '__all__'