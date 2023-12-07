import React from 'react'
import styled from 'styled-components';
import { useStateProvider } from '../utils/StateProvider';
import { FaVolumeOff } from "react-icons/fa";
import axios from 'axios';

const Volume = () => {
    const [{token}] = useStateProvider();
    const setVolume = async (e) => {
        await axios.put(
            `https://api.spotify.com/v1/me/player/volume`, {}, {
              headers: {

                "Authorization": "Bearer " + token,
                "Content-Type": "application/json",
              },
            }
        )
    }
  return (
    <Container>
        <FaVolumeOff/>
        <input type="range" min={0}  max={100} onMouseUp={(e => setVolume(e))}/>
    </Container>
  )
}

export default Volume;


const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: center;
    gap: 0.5rem;

    svg{
        color: #b3b3b3;
        font-size: 2rem;
        transition: 0.3s ease-in-out;
        &:hover{
            color: white;
        }
        input{
            width: 10rem;
            border-radius: 2rem;
            height: 10rem;
        }
    }

`;
