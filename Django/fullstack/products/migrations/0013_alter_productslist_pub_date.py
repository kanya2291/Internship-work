# Generated by Django 4.2.4 on 2023-08-17 04:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_productslist_favourite'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productslist',
            name='pub_date',
            field=models.DateField(verbose_name='Date'),
        ),
    ]
