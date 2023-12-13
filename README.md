<p align="center"><a href="https://barru-fat.web.app/" target="_blank" rel="noopener noreferrer"><img width="300" src="https://barru-fat.web.app/logo1barru.png" alt="Barrufat logo"></a></p>

# MyBox BackEnd [https://alex-barbero-202309-bcn-back.onrender.com/]

BackEnd API rest project of a Vynil Records collection where you can do the following:

ENDPOINTS:

- GET/ Records
  https://alex-barbero-202309-bcn-back.onrender.com/records

El endpoint devuelve un objeto con un disco en la response.

- DELETE/ RecordById
  https://alex-barbero-202309-bcn-back.onrender.com/records/:id

El endpoint recibe una id de la request y devuelve un mensaje conforme se ha eliminado correctamente el disco en la response.

- CREATE/ Record
  https://alex-barbero-202309-bcn-back.onrender.com/records

El endpoint devuelve el el disco creado en la response.

- GET/ RecordById
  https://alex-barbero-202309-bcn-back.onrender.com/records/:id

El endpoint recibe una id de la request y devuelve ese disco en la response.

- PATCH/ RecordById
  https://alex-barbero-202309-bcn-back.onrender.com/records/:id

El endpoint recibe una id en la request y devuelve el disco modificado en la response.

## Get Started 🚀

Link to clone this repository to your editor:
https://github.com/isdi-coders-2023/Alex-Barbero-Final-Project-back-202309-bcn

### Installation 🔧

```bash
npm install
```

## Deployment 📦

```bash
npm run build
npm start
```

## Project state ⚙️

This frontend project connects with a mongoose dataBase, so in order to get all the data properly, set the following environment variables in an .env file:

PORT=<insert*port>
DEBUG=root:\*
MONGODB_URL=mongodb+srv://barrufat:matamecamion@cluster0.phno7gs.mongodb.net/myBox
ALLOWED_PROD_ORIGIN=<insert_front_URL*>

## Built with 🛠️

- Mongoose
- Express
- Cors for access policy
- Dotenv
- Chalk & Debug to log errors

### ¡Thanks for your time and don't forget to checkout mi Porfolio at www.barru-fat.web.app😊😊!
