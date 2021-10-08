import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Stelvinsaji",
            username: "StelvinSaji",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://scontent.fbom17-1.fna.fbcdn.net/v/t1.6435-9/233943636_4461879203831896_7132982195308191142_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=_PQu9xjDgYQAX-ts5vx&_nc_ht=scontent.fbom17-1.fna&oh=faf42df65dbf4ed9df812605060847de&oe=618592DF"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent.fbom17-1.fna.fbcdn.net/v/t1.6435-9/233943636_4461879203831896_7132982195308191142_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=_PQu9xjDgYQAX-ts5vx&_nc_ht=scontent.fbom17-1.fna&oh=faf42df65dbf4ed9df812605060847de&oe=618592DF" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;