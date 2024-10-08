import TweetList from './TweetList';
import AddTweet from './AddTweet';
import { useCallback, useState } from 'react';
import Tweet from './Tweet';
const initialDunmyTweets = [
    { id: 0, content: 'we have a new twitter called threads', likeCount:3, createdAt: new Date()},
    { id: 1, content: 'What should we post??', likeCount:4, createdAt: new Date()},
    { id: 2, content: 'what is up with tech community', likeCount:1, createdAt: new Date()},
  ];

function Twitter(){
  const [tweets, setTweets] = useState(initialDunmyTweets);
  //for adding a new tweet
  const handleAddTweet =useCallback( (text) =>{
    let nextId = (tweets.length>0) ? tweets[tweets.length-1].id+1 :0;
    setTweets([...tweets, {
      content: text,
      likeCount: Math.floor(Math.random()*10), // random Like count
      id: nextId,
      createdAt: new Date()
    }]);
  },[])

  const handleEditTweet = useCallback((tweet) => {
    setTweets(
      tweets.map((currentTweet) => {
        if(currentTweet.id === tweet.id){
            return tweet;
        }else{
          return currentTweet;
        }
      })
    )
  }, [])
const sortTweets = useCallback(()=>{
      tweets.sort((t1, t2)=> t2.createdAt.getTime() - t1.createdAt.getTime());//sorting
      setTweets([...tweets]);
    },[])
    return (
        < >
            <AddTweet onAddTweet={handleAddTweet}/>
            <button onClick={sortTweets}>
              Sort TweetBy CreatedAt
            </button>
            <TweetList tweets={tweets } onEditTweet={handleEditTweet}/>
        </>
      );
   

}

export default Twitter;