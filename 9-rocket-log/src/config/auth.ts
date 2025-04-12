import env from "@/env";

const authConfig = {
    jwt: {
        secret: env.JWT_SECRET,
        expiresIn: '1d'
    }
}

export default authConfig;