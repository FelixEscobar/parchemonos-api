const jwt = require('jsonwebtoken')

const payload= {
    id: 123456,
    user: 'juan',
    role: 'admin',
    isValid: true
}

const secret = 'miclavesecreta'
const options = {'expiresIn': '1ms'}
const token = jwt.sign(payload, secret, options)
console.log('token', token)

// Verificar token

const tokenfalso = 'felix'

setTimeout(() => {
    try {
    const decoded = jwt.verify(token, secret)
    console.log('decoded', decoded)
    } catch (error) {
        console.log('error:name', error.name)
        console.log('error:message', error.message)
        }
}, 1000)
