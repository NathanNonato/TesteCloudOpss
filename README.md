<h1>Desafio CloudOpss</h1>

> Status: Developing

<p align="center">Desafio CloudOpss</p>
 <p align="center">
 <a href="#sobre">Sobre</a>
 <a href="#tasks">Tasks</a>
 <a href="#technologies">Technologies</a>
 <a href="#run">Run</a>
 <a href="#author">Author</a>
</p>

 
# Sobre
List of CloudOpss Solutions company selection exercises.


# Tasks
- Customers REST API with Python
- REST API methods GET, POST, PUT, DELETE
- Logs levels 1, 2, 3, 4, 5
- NoSQL Database
- Endpoint Documentation
- Create a Front-End interface to connect with Back-End API. (pending integration)
 
 
 
# Technologies

- [Django REST Framework](https://www.django-rest-framework.org/)
- [MongoDB Atlas and Compass](https://www.mongodb.com/)
- [Swagger](https://swagger.io/)
- [JavaScript](https://www.javascript.com/)
- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
 
 
# Run
Before start, you will need have installed in your machine this tool [Python](https://docs.python.org/3/), Furthermore is good have a editor to work with the code how [Pycharm](https://www.jetbrains.com/pt-br/pycharm/download/#section=windows) or [VSCode](https://code.visualstudio.com/)

1) Clone this repository and make the downloads

3) Install the requirements.txt using this code in yout shell

```bash
pip install -r requirements.txt
```

4) Make a account in MongoDB site, do a Cluster and download MongoDB Compass

6) Configure your MongoDB username and password in DATABASE in Settings.py
```bash
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'CLIENT': {
            "host": "mongodb+srv://username:password@cluster0.uaslx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            "name": "database name",
            "authMechanism": "SCRAM-SHA-1" # to Atlas
        },
    }
}
```
6) Write in your terminal:
```bash
python manage.py makemigrations
```
after
```bash
python manage.py migrate
```
after
```bash
python manage.py runserver
```


# Author

Made with 💙 by Nathan Nonato 👨‍💻 [See my LinkedIn](https://www.linkedin.com/in/nathannonatobaptista/)

![FuncionamentodaAPI](https://user-images.githubusercontent.com/96794310/156693988-2fec1696-7ac5-4134-9082-4bc5ef1ef104.gif)

![FuncionamentodoFront](https://user-images.githubusercontent.com/96794310/156694065-45c27005-b996-4c97-a0f7-bed3bb6d685b.gif)


