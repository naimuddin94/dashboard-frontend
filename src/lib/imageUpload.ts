const imageUpload = async (imageFile: File) => {
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append(
    'upload_preset',
    String(import.meta.env.VITE_PUBLIC_UPLOAD_PRESET),
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${String(
      import.meta.env.VITE_PUBLIC_CLOUD_NAME,
    )}/image/upload`,
    {
      method: 'POST',
      body: formData,
    },
  );
  const data = await res.json();
  return data.secure_url;
};

export default imageUpload;
