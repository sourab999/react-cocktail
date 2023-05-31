import { Link } from "react-router-dom"
import { useState } from "react"

const NavBar = ({  cartItemCount }) => {



 

    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid">
                        <Link to="/" className="link">
                        <div>
                        <h1 className="brand">Shop<span className="color">house</span></h1>
                        </div>
                        </Link>
                        <div className="formContainer">
                        </div>
                        <Link to="/cart" className="link headerCart">
                            <img className="cartImg" src="/cart.svg" alt="cart" />
                            {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount }</div>
                            )}
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export { NavBar }