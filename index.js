const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const profiles = [
    {
        id: 1,
        link: "Coder",
        name: "Moin",
        desc: "I am a full stack devoloper"
    },
    {
        id: 2,
        link: "Saadinsta",
        name: "Saad",
        desc: "I am a full stack devoloper"
    },
    {
        id: 3,
        link: "Nawafinsta",
        name: "Nawaf", 
        desc: "I am a full stack devoloper"
    }
]

app.get('/', (req, res) => {
    res.send("Hi search for Profiles")
})

app.get('/profile/:id', (req, res) => {
    const id = req.params.id;
    const profile = profiles.find((profile) => {
        return profile.id == id
    })
    res.send(profile ?? "Not Found.");
})

app.get('/profiles', (req, res) => {
    res.status(200).json(profiles)
})

app.post('/profileCreate/', (req, res) => {
    const profile = req.body;  
    profiles.push(profile) 
    res.status(200).json(profiles); 
   })
app.put('/profileUpdate/', (req, res) => {
    const profile = req.body;  
    const Updateprofile = profiles.find((item) => {
        return item.id ==  profile.id
    }) 
    res.status(200).json(profiles); 
    res.send(Updateprofile ?? "Not Found.");
   })

app.listen('8000', () => {
    console.log("hi")
})