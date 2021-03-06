# Generated by Django 4.0.2 on 2022-03-04 01:17

import clientes.models
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Clientes',
            fields=[
                ('id_cliente', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('nome_completo', models.CharField(max_length=255)),
                ('telefone', models.IntegerField()),
                ('email', models.CharField(max_length=255)),
                ('endereco', models.CharField(max_length=255)),
                ('profissao', models.CharField(max_length=255)),
                ('criado_em', models.DateField(auto_now_add=True)),
                ('curriculo', models.FileField(upload_to=clientes.models.upload_curriculo_cliente)),
            ],
        ),
    ]
