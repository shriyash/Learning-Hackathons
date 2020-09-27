import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [data, setData] = useState({
    hits: []
  });

  useEffect(async () => {
    var config = {
      method: 'get',
      url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2',
      headers: {
        'Authorization': 'OAuth oauth_consumer_key="qade36E1nYzf4DbL4Ic8C1VA1",oauth_token="2419804578-sdUuds1cIg0KhSDbRY8N0l43ZJ88FKKNVl3IbzV",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1601170460",oauth_nonce="yCsz7tJekQP",oauth_version="1.0",oauth_signature="%2B%2FOlSquKZabQdHpNXk5E8nuQ%2Fro%3D"',
        'Cookie': 'personalization_id="v1_v6V8yNl4ptDR1Pw5xpOYaw=="; guest_id=v1%3A160114134711951369; lang=en'
      }
    };

    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
}, []);



    // const result = await axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2', {
    //   headers: {
    //     "Authorization": "OAuth oauth_consumer_key=${process.env.TWITTER_API_KEY}, oauth_token=${process.env.TWITTER_ACCESS_TOKEN}, oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1601170460\",oauth_nonce=\"yCsz7tJekQP\",oauth_version=\"1.0\",oauth_signature=\"%2B%2FOlSquKZabQdHpNXk5E8nuQ%2Fro%3D\"",
    //     // CONSUMER_KEY: `${process.env.TWITTER_API_KEY}`,
    //     // CONSUMER_SECRET: `${process.env.TWITTER_API_SECRET}`,
    //     // ACCESS_TOKEN: `${process.env.TWITTER_ACCESS_TOKEN}`,
    //     // ACCESS_SECRET: `${process.env.TWITTER_ACCESS_SECRET}`,
    // }
  // });

  // myHeaders.append("Authorization", "OAuth oauth_consumer_key=\"qade36E1nYzf4DbL4Ic8C1VA1\",oauth_token=\"2419804578-sdUuds1cIg0KhSDbRY8N0l43ZJ88FKKNVl3IbzV\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1601168093\",oauth_nonce=\"8qHJOqLr8a5\",oauth_version=\"1.0\",oauth_signature=\"wyBgZkWdvsw8WanAtggOEui8w8s%3D\"");
  // console.log(result)




return ( <
  h1 > Test < /h1>
);
}


export default App;
