import { useState } from 'react';
import '../CSS/Tweet.css'
function Tweet({tweetId, content,likeCount,createdAt  , onEdit}){
    const[isEditting, setIsEditting] =useState(false);

    return(
        <div className='tweet-Wrapper'>
            <div className="tweet-edit-wrapper">
                <div className="tweet-content">
                     {(isEditting) ?  (
                         <input 
                            type="text" 
                            value={content} 
                            onChange={(e)=>{
                            onEdit({
                                id: tweetId,
                                content: e.target.value,
                                likeCount: likeCount,
                                createdAt: createdAt                         
                            })

                         }}
                        />
                    ): content}
                     
                </div>
                <div className="tweet-edit-wrapper">
                    <button onClick={()=>setIsEditting(!isEditting)}>
                        {(isEditting)? 'save':'Edit'}
                    </button>
                </div>
            </div>
           
            <div className="like-createdat-wrapper">
                <div className="likes">
                    {likeCount} likes
                </div>
                <div className="created-at">
                   <b>Twitted at:</b>  {createdAt }
                </div>
            </div>
        </div>
    )
}
export default Tweet;