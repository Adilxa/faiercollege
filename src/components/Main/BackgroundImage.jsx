import Image from 'next/image';

const BackgroundImage = ({ imageUrl, children }) => {
    return (
        <div className="overflow-hidden relative">
            <Image
                src={imageUrl}
                alt="Background Image"
                placeholder='blur'
                style={{ height: "80vh", objectFit: "cover", width: "100%" }}
            />
            <div className='absolute inset-0 flex items-end '>
                <div className='bg-primary w-full p-2'>{children}</div>
            </div>
        </div>
    );
};

export default BackgroundImage;
