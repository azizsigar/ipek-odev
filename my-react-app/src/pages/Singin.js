import React from 'react'
import { Link} from "react-router-dom";

export const Singin = () => {
    return (
        <div>
            <form>
                <label>name</label>
                <input></input>
                <label>mail</label>
                <input></input>
                <label>password</label>
                <input></input>
                <br></br>
                <button type='submit'>sign in</button>
            </form>
            <Link to="/login">oki</Link>

        </div>
    )
}
