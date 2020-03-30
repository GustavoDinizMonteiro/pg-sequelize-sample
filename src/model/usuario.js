module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        nome: {
            type: DataType.STRING,
        },

        username: {
            type: DataType.STRING,
            unique: true
        },

        ativo: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: 'S'
        }

    }, { tableName: 'usuario' })

    Usuario.associate = models => {
        Usuario.belongsTo(models.Acesso, { foreignKey: 'idAcesso' })
    }
    
    return Usuario
}
