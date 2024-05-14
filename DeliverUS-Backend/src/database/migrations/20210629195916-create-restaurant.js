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
        type: Sequelize.TEXT

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
        defaultValue: 0.0,
        type: Sequelize.DOUBLE
      },
      averageServiceMinutes:{
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      email:{
        type: Sequelize.STRING
      },
      logo:{
        type: Sequelize.STRING
      },
      phone:{
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
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        }
      },
      heroImage:{
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
        default: 'offline'
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
