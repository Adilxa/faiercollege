import Image from 'next/image';

const BackgroundImage = ({ imageUrl, children }) => {
    return (
        <div className="overflow-hidden relative">
            <Image
                src={imageUrl}
                alt="Background Image"
                placeholder='blur'
                style={{ objectFit: "cover", width: "100%" }}
                className='max-md:bg-right max-md:h-[85svh] lg:h-[80svh]'
            />
            <div className='absolute inset-0 flex items-end '>
                <div className='bg-primary w-full p-2'>{children}</div>
            </div>
        </div>
    );
};

export default BackgroundImage;
