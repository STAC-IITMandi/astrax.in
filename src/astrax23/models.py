from django.db import models

class Speaker(models.Model):
    name=models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='images/',default='astrax23/images/speaker_images/default.jpg')

    
    def __str__(self):
        return self.name
class Events(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField()
    image=models.ImageField(upload_to='images/',default='astrax23/images/events_images/default.jpg')
    def __str__(self):
        return self.name