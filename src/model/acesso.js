module.exports = (sequelize, DataType) => {
    const Acesso = sequelize.define('Acesso', {
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },

        celular: {
            type: DataType.STRING,
        },

        senha: {
            type: DataType.STRING,
        },

        ativo: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: 'S'
        }

    }, { tableName: 'acesso' })
    
    return Acesso
}
