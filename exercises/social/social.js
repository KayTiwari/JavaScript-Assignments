var customer = {
    name: 'Abhi Tiwari',
    age: 23,
    job: 'Software dev',
    languages: ['C', 'HTML', 'CSS', 'Javascript'],
    devTeamMembers: [{
        name: 'Nate',
        age: 30,
        languages: ['XD'],
        workexp: [{
                jobName: 'Army',
                rank: 'Seargent',
            },
            {
                jobName: 'General Manager',
                ageDuring: 25,
            },
        ],
        name: 'Atilla',
        age: 32,
        languages: ['HTML', 'CSS', 'Javascript'],
        workexp: [{
                jobname: 'Army',
                rank: 'Private first class',
            },

        ],
        name: 'Kevin',
        age: 31,
        languages: ['HTML', 'CSS', 'Javascript'],
        workexp: [{
                jobName: 'Army',
                rank: 'Private first class'
            },
            {
                jobName: 'IT',
                companyName: 'Menger\'s'
            }
        ]
    }],
    poke: function (string) {
        console.log("You poked Abhi!")
    }
};

customer.poke();