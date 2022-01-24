interface Ride {
    id: string
}

const data = [{ id: 'ride1' }]
export const resolvers = {
    Query: {
        rides: () => {
            return data
        }
    },
    Driver: {
        driver: (ride: Ride) => {
            return { __typename: "Driver", id: ride.id };
        }
    }
}