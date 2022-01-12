import ownerDetailType from '../../types/ownerDetailType';
import getOwnerDetailResolver from '../../resolvers/ownerDetail/getOwnerDetailResolver';

export const getOwnerDetailMutation = {
    type: ownerDetailType,
    resolve() {
        return getOwnerDetailResolver()
    }
}

export default getOwnerDetailMutation