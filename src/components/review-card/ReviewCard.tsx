import Link from "next/link";

interface ReviewInterface{
    userName: string;
    userReview: string;
    reviewFrom: string;
    reviewLink: string;
}

const ReviewCard = ({userName, userReview, reviewFrom, reviewLink}: ReviewInterface) => {
    return (
        <div className="w-[400px] h-[200px] bg-[#f9fafc] rounded-xl cursor-pointer mr-4 p-4">
            <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-black">{userName}</h2>
                <p className="text-base font-medium text-gray-500">реальный отзыв с <Link href={reviewLink} target="_blank" className="font-semibold text-blue-600 hover:text-blue-300 transition-colors">{reviewFrom}</Link></p>
                <p className="font-medium text-black break-words line-clamp-4 w-[340px] mt-3 ">{userReview}</p>
            </div>
        </div>
    );
}

export default ReviewCard;