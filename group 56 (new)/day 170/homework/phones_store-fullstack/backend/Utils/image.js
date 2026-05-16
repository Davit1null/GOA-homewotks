import cloudinary from "cloudinary";

const options = {
    use_filename: true,
    unique_filename: true,
    overwrite: false,
    resource_type: "image",
    quality: "auto",
    format: "webp",
    transformation: [
        { width: 500, height: 500, crop: "fit", gravity: "center"}
    ]
};

export const imageUpload = async (folder, files) => {
    try {
        const uploadedPromises = files.map(file => cloudinary.v2.uploader.upload(file, {...options, folder}))

        const results = await Promise.all(uploadedPromises);

        return results;
    } catch(err) {
        return {messige: "error uploading da miage", error: err.messige}
    }
};

export const deleteImage = async publicId => {
    try {
        const result = await cloudinary.v2.uploader.destroy(publicId);
        return result;
    } catch {
        return {messige: "error uploading da miage", error: err.messige}
    } 
}