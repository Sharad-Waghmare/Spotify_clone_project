import React from 'react'
import styled from 'styled-components';
import Logo from "../assets/spotify.png"

const Login = () => {
    const handleClick = () => {
        const clientId = "3111ee007c5a4eac88ae033aa0135e60";
        const redirectUrl = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-read-playback-state",
            "user-modify-playback-state",
            "user-read-currently-playing",
            "user-read-playback-position",
            "user-top-read",
            "user-read-recently-played"
        ];

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`
    }
  return (
    <Container>
        <img src={Logo} alt="spotify" />
        <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    weight: 100vw;
    background-color: #1db954;
    gap: 5rem;
    img{
        height: 20vh;
    }
    button{
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: black;
        color: #49f585;
        font-size: 1.4rem;
        cursor: pointer;
    }
`;