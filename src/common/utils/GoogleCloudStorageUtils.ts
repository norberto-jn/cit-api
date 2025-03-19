import 'dotenv/config'
//import Admin from 'firebase-admin'
import { ConfigEnvEnum } from 'src/common/enums/ConfigEnvEnum'
/*
export class GoogleCloudStorageUtils {

    static async createBucket() {        

        Admin.initializeApp({
            credential: Admin.credential.cert({
                clientEmail: process.env[ConfigEnvEnum.GOOGLE_CLOUD_STORAGE_CLIENT_EMAIL],
                privateKey: process.env[ConfigEnvEnum.GOOGLE_CLOUD_STORAGE_PRIVATE_KEY],
                projectId: process.env[ConfigEnvEnum.GOOGLE_CLOUD_STORAGE_PROJECT_ID]
            }),
            storageBucket: process.env[ConfigEnvEnum.GOOGLE_CLOUD_STORAGE_STORAGE_BUCKET]
        })

    }

    static async Upload(singlekey: string, fileData: Express.Multer.File, path = ''): Promise<string> {

        try {
            Admin.app()
        } catch (error) {
            await GoogleCloudStorageUtils.createBucket()
        }

        const fileName = `${path}${singlekey}-${Date.now()}-${fileData.originalname}`
        const bucket = Admin.storage().bucket()
        const file = bucket.file(fileName)


        const stream = file.createWriteStream({
            metadata: {
                contentType: fileData.mimetype
            }
        })

        stream.on('error', (error) => {
            console.log(error)
            return null
        })

        stream.on('finish', async () => {
            await file.makePublic()
            console.log('sucess')
        })

        await stream.end(fileData.buffer)

        return `https://storage.googleapis.com/${process.env[ConfigEnvEnum.GOOGLE_CLOUD_STORAGE_STORAGE_BUCKET]}/${fileName}`
    }

}*/