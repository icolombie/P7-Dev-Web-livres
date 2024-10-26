const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://books-user:UoUZRgR4c0OM00dU@cluster0.3yspd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get('/api/books', (req, res, next) => {
  const books = [
    {
      _id: 'oeihfzeog',
      title: 'Milwaukee Mission',
      author: 'Elder Cooper',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/5ccc/4259/8557d1328035a059629ef24ada741e6b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCH-cmIetA-gda5AublGUOLYA4J5nRDgbjyg88oTi~CvSJgXFrVGhBVRAr2iadBN8YqvrhxmDj4P9YMzBPCjbdnuD8wyB29FReAYfuMYYCr5Jnnzbwqh2iI0AUVCYSal74XA0r-EPZlt0fnGKcRgZ5-N1r7p09ePmwEdKrIY7-MuH9ZiXGmVnSt75F1I3m1kUwv4kGts60akWryi5cFefhUd-8QQgYiUgTdDSgDYKx3Ualx39rKEMyHfBRwkspwZ7gvH-UHF8oXMR90rqFwIhvLztuffvmcsndW5FkJ3c6e~oFz~X~jxjYZp-Z8z8viaV3acCXzirpGjQlh772zMfA_',
      year: 2021,
      genre: 'Policier',
      averageRating: 3,
      userId: 'qsomihvqior',
    },
    {
      _id: 'oeihfzeomoihj',
      title: 'Book for Esther',
      author: 'Alabaster',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/2a59/f3a3/154d672a849c3474756104beccfa3fdf?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CCpxmAeHL4Fck2GMo2f6HKdlCJaO3l-Ls4k-bymuiM1FlUbLm3IKjOwet-7DTu3fm-L2nVD1ios0BmTh5VlqlFtIicRqRVww5jFOhMaQNMNpS9f-YRUExrLdS7BTmJ582ZgjqWQ-uwuhdJTAKAW4dVHdhdyoOSLOPy7zS3VysEy~LrpqxzYMNNTkBox9or3hzW-Gwzg~bu-9yuZpK7XAct8WjrLRbvJyntAhe7W5KHW0Wks9Rz57MggCTy7kjEpT777aIe1epXWBzCDBkkcqC-lrPSVKLX-Ym-MulZwhV9Hk9PK72QTIN-OsF7fz-ifRvF4053LEKpTJx4FRk8in3g__',
      year: 2022,
      genre: 'Paysage',
      averageRating: 4,
      userId: 'qsomihvqior',
    },
  ];
  res.status(200).json(books);
});

app.post('/api/books', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});


module.exports = app;