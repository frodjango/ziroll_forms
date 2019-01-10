import React from "react"

function Header() {
    const firstName = "Francois"
    const lastName = "Rousseau"
    // Some styles may not be expressed in JSX...syntax issues
    const styles = {
        color: "#FF8C00",
        backgroundColor: "#FF2D00"
    }
    return (
        <header className="navbar" style={styles}>Hello from {`${firstName} ${lastName}`}</header>
    )
}

export default Header