module.exports = {
    getProperties: (req, res) => {
        const db = req.app.get('db')
        db.get_all_properties().then(properties => {
            res.status(200).send(properties)
        })
    },
    addProperty: async (req, res) => {
        const {propertyName, address, city, state, zip} = req.body
        const db = req.app.get('db')
        const newProperty = await db.add_property({property_name: propertyName, address, city, state, zip})
        res.status(201).send(newProperty)
    },
    deleteProperty: (req, res) => {
        res.sendStatus(200)
    }
}