import React from "react"

function Footer() {
    // Video #15
    const date = new Date(2018, 6, 31, 15)
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#8914A3"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }
    return (
        <footer style={styles}>This is the footer {timeOfDay}</footer>
    )
}

export default Footer