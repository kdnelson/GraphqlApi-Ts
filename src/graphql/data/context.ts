
// Another less complicated data source
//const stubData = require("../data/stub_data.json");
//export const data = stubData;

import { Owner } from "../../models/owner"
import { Website } from "../../models/website"
import { OwnerDetail } from "../../models/ownerDetail"

const context = {
    owners: getOwners(),
    websites: getWebsites(),
    ownerDetails: getOwnerDetails()
}

function getOwners() : Owner[] {
    return [
        { id: 1, name: 'Kris Nelson' },
        { id: 2, name: 'Lilly Nelson' },
        { id: 3, name: 'Colin Nelson' },
    ]
}

function getWebsites() : Website[] {
    return [
        { id: 1, name: 'Facebook', ownerId: 2 },
        { id: 2, name: 'Google', ownerId: 2 },
        { id: 3, name: 'Amazon', ownerId: 3 },
        { id: 4, name: 'Github', ownerId: 1 },
        { id: 5, name: 'NFL.com', ownerId: 1 },
        { id: 6, name: 'TikTok', ownerId: 3 }
    ]
}

function getOwnerDetails() : OwnerDetail[] {
    let index: number = 1;
    let ownerDetails: OwnerDetail[] = [];
    getOwners().forEach(o => {
        let ownerDetail = new OwnerDetail(index, o.name, [])
        getWebsites().forEach(w => {
            let website = new Website(w.id, w.name, w.ownerId)   
            if(w.ownerId === o.id){
                ownerDetail.websites.push(website)
            }
        });
        ownerDetails.push(ownerDetail)
        index++;
    });
    return ownerDetails;
}

export default context
