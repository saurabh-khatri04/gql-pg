interface Driver {
    id: String
    name: String
    rides: [Ride] 
}

interface Ride{
    id: string
}
const drivers: Driver[] = [
    { id: '2', name: "ABC", rides:[{ id: "ride1"}] },
    { id: '1', name: "XYZ",rides:[{ id: "ride1"}] }
]

export const resolvers = {
    Query: {
        drivers: () => {
            console.log('Resolve Drivers')
            return drivers;
        }
    },
    Driver: {
        __resolveType(){
            console.log('Resolve Type')
            return 'DriverA'
        }
    }
};