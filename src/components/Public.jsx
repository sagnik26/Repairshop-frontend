import React from 'react'
import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Nik's Repairshop</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Siliguri City, Nik's Repairshop  provides trained technicians who can meet your repair needs</p>
                <address className="public__addr">
                    Nik Repairshop<br />
                    Hakimpara, near BJP<br />
                    Siliguri, West Bengal, India<br />
                    <a href="tel:+15555555555">(+91) 9999999999</a>
                </address>
                <br />
                <p>Owner: Sagnik Ghosh</p>
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public