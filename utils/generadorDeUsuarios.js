import {faker} from '@faker-js/faker'
faker.locale = 'es'

function generarUsuario() {
 return {
   nombre: faker.name.fullName(),
   email: faker.internet.email(),
   website: faker.internet.url(),
   image: faker.image.avatar(),
 }
}

export { generarUsuario }
