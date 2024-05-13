module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // TODO: Include the rest of the fields of the Restaurants table
      name:{
        allowNull: false,
        type: Sequelize.STRING

      },
      description:{
        allowNull: false,
        type: Sequelize.STRING

      },
      address:{
        allowNull: false,
        type: Sequelize.STRING

      },
      postalCode:{
        allowNull: false,
        type: Sequelize.STRING

      },
      url:{
        allowNull: false,
        type: Sequelize.STRING

      },
      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        }
      },
      shippingCosts:{
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      email:{
        allowNull: false,
        type: Sequelize.STRING
      },
      logo:{
        allowNull: false,
        type: Sequelize.STRING
      },
      phone:{
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt:{
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      userId:{
        allowNull: false,

      },
      heroImage:{
        allowNull: false,
        type: Sequelize.STRING
      },
      status:{
        allowNull: false,
        type: Sequelize.ENUM,
        values: [
          'online',
          'offline',
          'closed',
          'temporarily closed'
        ],
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
