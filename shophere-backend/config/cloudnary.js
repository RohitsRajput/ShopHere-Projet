const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadCloud = async (filePath) => {
  try {
    if (!filePath) {
      throw new Error("No file path provided to Cloudinary");
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "image",
    });

    // Delete local file ONLY if it exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error.message);

    // Prevent ENOENT (only delete if file exists)
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return null;
  }
};

module.exports = uploadCloud;
