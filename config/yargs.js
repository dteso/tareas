const argv = require('yargs')
    .command('crear','Crear por hacer',{
        descripcion:{
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar','Actualiza una tarea por hacer',{
        descripcion:{
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tare por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar','Borra un elemento',{
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Borra una tarea especificada'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}