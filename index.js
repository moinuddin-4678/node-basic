const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

// const profiles = [
//     {
//         id: 1,
//         insta: "Coder",
//         name: "Moin",
//         desc: "I am a full stack devoloper"
//     },
//     {
//         id: 2,
//         insta: "Saadinsta",
//         name: "Saad",
//         desc: "I am a full stack devoloper"
//     },
//     {
//         id: 3,
//         insta: "Nawafinsta",
//         name: "Nawaf",
//         desc: "I am a full stack devoloper"
//     }
// ]
const  data = [
    {
        "id":"1",
        "name":"Moin",
        "address" :{
            "city":"Mumbra",
            "state":"Maha"
        },
        "images": [
            "img2",
            "img1"
        ],
        "imagesWithkye": [
            {
                "path":"/images",
                "name":"img1"
            },
            {
                "path":"/images",
                "name":"img2"
            }
        ]
    },
    {
        "id":"2",
        "name":"saad",
        "address" :{
            "city":"Mumbra",
            "state":"Maha"
        },
        "images": [
            "img1",
            "img2"
        ],
        "imagesWithkye": [
            {
                "path":"/images",
                "name":"img4"
            },
            {
                "path":"/images",
                "name":"img3"
            }
        ]
    },
    {
        "id":"3",
        "name":"Prince",
        "address" :{
            "city":"Mumbra",
            "state":"Maha"
        },
        "images": [
            "img2",
            "img3"
        ],
        "imagesWithkye": [
            {
                "path":"/images",
                "name":"img2"
            },
            {
                "path":"/images",
                "name":"img3"
            }
        ]
    }
]

app.get('/', (req, res) => {
    res.send("Hi search for Profiles")
})

app.get('/Home', (req, res) => {
    const result = data.filter((item)=> {
        return item.images.includes("img1");

        // const naam = item.imagesWithkye.findIndex((obj)=> {
        //     return obj.name == "img1"
        // })
        // if (naam !== -1) {
        //     return true;
        // }


        // return item.imagesWithkye[0].name == "img1"  ||  item.imagesWithkye[1].name == "img1" 
    })
    res.send(result)
})

app.get('/profile/:id', (req, res) => {
    const id = req.params.id;
    const profile = profiles.find((profile) => {
        return profile.id == id
    })
    res.send(profile ?? "Not Found.");
})

//get all profile

app.get('/profiles', (req, res) => {
    res.status(200).json(profiles)
})

app.post('/profileCreate/', (req, res) => {
    const profile = req.body;
    profiles.push(profile)
    res.status(200).json(profiles);
})

app.put('/profileUpdate/', (req, res) => {
    // Algorithm
    // step 1: Save req data in profile variable
    // step 2: Find Index
    // step 3: Check index is there or not
    // step 4: Replace the new values
    // step 5: Return Updated value

    // Save req data in profile variable
    const profile = req.body;
    // Find Index
    const profileIndex = profiles.findIndex((item) => {
        return item.id == profile.id
    })
    // Check index is there or not
    if (profileIndex == -1) {
        res.status(404).send("Not Found.");
    }
    //  Replace the new value
    profiles[profileIndex] = profile;
    //  Return Updated value
    res.status(200).send(profiles);
})

// delete profile
app.delete('/profiledelete/:id/', (req, res) => {
    const id = req.params.id;
    const profileIndex = profiles.findIndex((item) => {
        return item.id == id
    })
    if (profileIndex == -1) {
        res.status(404).send("Not Found.");
    }
    profiles.splice(profileIndex, 1);
    res.status(200).send(profiles);
})

app.listen('8000', () => {
    console.log("MOIN")
})