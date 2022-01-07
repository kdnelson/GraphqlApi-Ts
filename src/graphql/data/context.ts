
// Another less complicated data source
//const stubData = require("../data/stub_data.json");
//export const data = stubData;

var owners = [
    { id: 1, name: 'Kris Nelson' },
    { id: 2, name: 'Lilly Nelson' },
    { id: 3, name: 'Colin Nelson' },
]

var websites = [
    { id: 1, name: 'Facebook', ownerId: 2 },
    { id: 2, name: 'Google', ownerId: 2 },
    { id: 3, name: 'Amazon', ownerId: 3 },
    { id: 4, name: 'Github', ownerId: 1 },
    { id: 5, name: 'NFL.com', ownerId: 1 },
    { id: 6, name: 'TikTok', ownerId: 3 },
    { id: 7, name: 'Fox News', ownerId: 1 },
]

const context = {
    owners: owners,
    websites: websites
}

export default context
