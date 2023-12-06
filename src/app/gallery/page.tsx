"use client"

import UploadButton from "./upload-button"
import cloudinary from "cloudinary"
const page = async () => {
    const results = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('public_id','desc')
    .max_results(30)
    .execute()

    return (
        <section>
            <div className="flex justify-between">
                <h1 className='text-4xl font-bold'>Gallery</h1>
                <UploadButton/>        
            </div>
        </section>
    )
}

export default page