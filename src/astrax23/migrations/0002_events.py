# Generated by Django 4.1.4 on 2022-12-26 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('astrax23', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(default='astrax23/images/events_images/default.jpg', upload_to='images/')),
            ],
        ),
    ]
