from django.db import models

class Speaker(models.Model):
    name=models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='images/',default='astrax23/images/speaker_images/default.jpg')

    def __str__(self):
        return self.name

class Sponsor(models.Model):
    name=models.TextField(max_length=100)
    website=models.TextField()
    type=models.TextField()
    image=models.ImageField(upload_to="images/",default='astrax23/images/sponsor_images/default.jpg')

    
    def __str__(self):
        return self.name

class Event(models.Model):
    name=models.CharField(max_length=100)
    short_description=models.TextField()
    long_description=models.TextField()
    team_size=models.CharField(max_length=100)
    date=models.CharField(max_length=100)
    rulebook_link = models.URLField(max_length = 200)
    Registration_link = models.URLField(max_length = 200)
    submission_link= models.URLField(max_length = 200)
    image=models.ImageField(upload_to='images/',default='astrax23/images/events_images/default.jpg')
    def __str__(self):
        return self.name

class Team(models.Model):
    name=models.CharField(max_length=100)
    Position_of_head=models.CharField(max_length=100)
    insta_link = models.URLField(max_length=200,default='https://www.youtube.com/watch?v=33Xe3z8L73A')
    linkedin_link = models.URLField(max_length=200,default='https://www.youtube.com/watch?v=33Xe3z8L73A')
    image = models.ImageField(upload_to='images/',default='astrax23/images/team_images/default.jpg')

    def __str__(self):
        return self.name

class Event(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField()
    image=models.ImageField(upload_to='images/',default='astrax23/images/events_images/default.jpg')
    def __str__(self):
        return self.name        

