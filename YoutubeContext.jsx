import React, { createContext, useState } from 'react'
export const songContext = createContext();

const YoutubeContext = (props) => {


    const[subscriptions,setSubscriptions] = useState([true,false,false,false,false,false]);

    const handleActivate=(e)=>{
        console.log(`Button id: ${e.target.id}`);
        let subId = e.target.id

        if(subscriptions[subId]){
            subscriptions[subId] = false
        }else{
           subscriptions[subId] = true
        }

        setSubscriptions(()=>([
            ...subscriptions
        ]))
        console.log(subscriptions);

    }

  return (
    <songContext.Provider value={{setSubscriptions, subscriptions, handleActivate}}>
        {props.children}
    </songContext.Provider>
  )
}

export default YoutubeContext