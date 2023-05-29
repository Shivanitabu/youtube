import React, { useContext, useEffect, useState } from 'react'
import './Playlist.css'
import { songContext } from './YoutubeContext'

const PlayListRow = ({ listItems, id }) => {
    const{subscriptions, handleActivate}=useContext(songContext)

    return (
        <>
            <tr>
                <td>{listItems.id}</td>
                <td>{listItems.genre}</td>
                <td>
                {
                    subscriptions[id]?
                    <button id={id} onClick={handleActivate} style={{backgroundColor:'beige'}}>Unsubscribe</button>
                    :
                    <button id={id} onClick={handleActivate} style={{backgroundColor:'lightgreen'}}>Subscribe</button>
                }
                </td>
            </tr>
        </>
    )
}

export default PlayListRow