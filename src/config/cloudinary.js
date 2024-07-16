import {v2 as cloudinary} from 'cloudinary';

export const connectCloudinary = async () => {

    await cloudinary.config({
        cloud_name: process.env.CLOUDNARY_NAME,
        api_key : process.env.CLOUDNARY_API_KEY,
        api_secret : process.env.CLOUDNARY_SECRET_KEY
    })

}