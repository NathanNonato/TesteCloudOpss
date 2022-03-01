from rest_framework import viewsets
from clientes.api import serializers
from clientes import models


class ClientesViewset(viewsets.ModelViewSet):
    serializer_class = serializers.ClientesSerializer
    queryset = models.Clientes.objects.all()