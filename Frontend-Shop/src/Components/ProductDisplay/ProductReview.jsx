import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const commentList = [
	{
		profilePhoto:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
		userName: "Amelie Baker",
		title: "Do you faced same problem?",
		comment:
			"Were also place that i dominion saw rule doesn't signs gathering over you'll fifth sixth man upon male blessed creepeth....",
		date: "1 hour ago",
		commentCount: 3,
		comments: [],
	},
	{
		profilePhoto:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
		userName: "Alice Capsey",
		title: "Help Me Out!",
		comment:
			"God air fruitful, hath first. Lights form sea. Air earth thing our land void life deep abundantly behold every green....",
		date: "1 hour ago",
		commentCount: 2,
		comments: [],
	},
    {
        profilePhoto:
            "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_4.jpeg",
        userName: "Amelie Baker",
        title: "Do you faced same problem?",
        comment:
            "Were also place that i dominion saw rule doesn't signs gathering over you'll fifth sixth",
        date: "1 hour ago",
        commentCount: 3,
        comments: [],
    },
];

const ReviewForm = () => (
    <div>
        <h5 className="mt-3 text-xl font-medium text-white">Enter Your Comment</h5>
        <div className="flex mt-6">
            <div className="mr-4">
                <img
                    src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
                    alt=""
                    className="max-w-full h-auto rounded-full border border-gray-700"
                    width="70"
                />
            </div>
            <div className="flex-grow">
                <form action="#!">
                    <div>
                        <textarea
                            className="bg-gray-700 text-white focus:border focus:border-gray-500 focus:outline-none rounded-xl p-3 py-4 w-full"
                            rows="5"
                            placeholder="e.g. Ultrices et est interdum sed."
                        ></textarea>
                        <p className="text-gray-500">
                            Press <span className="text-gray-300">Enter</span> to post,{" "}
                            <span className="text-gray-300">Esc</span> to cancel,
                            <span className="text-gray-300">Shift + Enter</span> to go to a
                            new line
                        </p>
                    </div>
                    <div className="text-center md:text-end mt-4">
                        <button className="border border-gray-700 hover:bg-gray-700 text-white rounded px-7 py-2 min-w-[120px] mb-3 sm:mb-0 md:mr-4">
                            CANCEL
                        </button>
                        <button className="bg-gray-700 hover:bg-opacity-90 text-white border border-gray-700 rounded px-7 py-2 min-w-[120px]">
                            POST
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

const Comment = ({ comment, children }) => (
    <div className="flex">
        <div className="mr-4">
            <img
                src={comment.profilePhoto}
                alt={comment.userName}
                className="max-w-full h-auto rounded-full border border-gray-700"
                width="70"
            />
        </div>
        <div className="flex flex-wrap flex-grow justify-between">
            <div>
                <div>
                    <h6 className="font-bold text-lg text-white">{comment.userName}</h6>
                    <h6 className="font-medium mb-2 text-gray-300">{comment.title}</h6>
                    <p className="text-sm text-gray-500">{comment.comment}</p>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faComment} className="text-gray-300 mr-4" />
                        <p className="mb-0 text-gray-300">{comment.commentCount} comments</p>
                    </div>
                </div>

                {children}
            </div>
        </div>
    </div>
);

const RenderComments = ({ comments }) => (
    <Fragment>
        {comments.map((comment, i) => (
            <Fragment key={i}>
                {!!i && <hr className="border-gray-700 my-6" />}
                <Comment comment={comment}>
                    {!!comment.comments.length && (
                        <Fragment>
                            <hr className="border-gray-700 my-6" />
                            <RenderComments comments={comment.comments} />
                        </Fragment>
                    )}
                </Comment>
            </Fragment>
        ))}
    </Fragment>
);

const Comments = ({ comments }) => (
    <Fragment>
        <RenderComments comments={comments} />
    </Fragment>
);

const ProductReview = () => {
    return (
        <section className="md:py-6 bg-black text-zinc-300 relative overflow-hidden z-10 items-center">
            <h3 className="text-2xl font-bold text-white text-center mb-6">Comments sur Produit</h3>
            <div className="container px-4 mx-auto">
                <div className="flex justify-center max-w-6xl mx-auto">
                    <div className="bg-gray-800 rounded w-full">
                        <div className="bg-gray-900 p-4 md:p-6 lg:px-12">
                            <h5 className="text-xl font-medium text-white">37 Comments</h5>
                        </div>
                        <div className="p-4 md:p-6 lg:px-12">
                            <Comments comments={commentList} />
                            <ReviewForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ProductReview;