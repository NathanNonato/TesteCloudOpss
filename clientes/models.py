from django.db import models
from uuid import uuid4


def upload_curriculo_cliente(instance, filename):
    return f'{instance.id_cliente}-{filename}'

class Clientes(models.Model):
    id_cliente = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome_completo = models.CharField(max_length=255)
    telefone = models.IntegerField()
    email = models.CharField(max_length=255)
    endereco = models.CharField(max_length=255)
    profissao = models.CharField(max_length=255)
    criado_em = models.DateField(auto_now_add=True)
    curriculo = models.FileField(upload_to=upload_curriculo_cliente)