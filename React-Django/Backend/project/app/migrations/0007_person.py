# Generated by Django 4.2.4 on 2023-08-23 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_delete_person'),
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pid', models.IntegerField()),
                ('fname', models.CharField(max_length=150)),
                ('lname', models.CharField(max_length=160)),
                ('email', models.EmailField(max_length=254)),
                ('course', models.CharField(max_length=150)),
            ],
        ),
    ]