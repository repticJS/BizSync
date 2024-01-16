const router = require('express').Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')

const UserSchema = require('../Models/User');
const CompanySchema = require('../Models/Company');

const Users = [
    {
        ID: "1000",
        Name: "Ethan Hale",
        Credentials: {
            EmailAddress: "reptic23@gmail.com",
            Username: "repticJS",
            Password: "$2b$10$38Sf4IFXU0b8b2f37sr0IeLXrk9hqcRCudTEdw1PwwteyRuNBfuFO",
            AuthToken: "Hz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ"
        },
        Activity: {
            CreatedAt: "14/01/2024",
            Logs: [
                {
                    Timestamp: "1705261699599",
                    Level: "INFO",
                    Message: "User Created"
                }
            ]
        }
    }
]

router.post('/', async(req, res) => {
   
    const { Username, Password } = req.body;
       
    const User = await UserSchema.findOne({ "Credentials.Username": Username })
    if(User) {

        const compare = await bcrypt.compare(Password, User.Credentials.Password);
        if(compare === true) {
            return res.status(200).json(await getUserData(User))
        } else {
            return res.status(401).json('Password is incorrect!')
        }

    } else {
        return res.status(404).json('User not found!')
    }
    
})

async function getUserData(User) {

    const CompaniesData = await CompanySchema.find({ Users: User.ID })
    
    const data = {
        User: User,
        Companies: CompaniesData
    }
    
    return data
    

}

module.exports = router;