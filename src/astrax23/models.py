from django.db import models

class Speaker(models.Model):
    name=models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='images/',default='astrax23/images/speaker_images/default.jpg')

class Sponsor(models.Model):
    name=models.TextField()
    website=models.TextField()
    type=models.TextField()
    image=models.ImageField(upload_to="images/")

    
    def __str__(self):
        return self.name

class Event(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField()
    image=models.ImageField(upload_to='images/',default='astrax23/images/events_images/default.jpg')
    def __str__(self):
        return self.name