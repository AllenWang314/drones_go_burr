# Generated by Django 4.1.7 on 2023-02-19 05:11

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("api", "0001_initial")]

    operations = [
        migrations.AddField(
            model_name="image",
            name="description",
            field=models.CharField(default="hi", max_length=400),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="image",
            name="embedding",
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.FloatField(blank=True), blank=True, size=None
            ),
        ),
    ]
