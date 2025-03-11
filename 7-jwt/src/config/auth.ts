const authConfig = {
    jwt: {
        secret: process.env.AUTH_SECRET || 'default',
        expiresIn: process.env.AUTH_EXPIRES,
    }
}

export default authConfig;