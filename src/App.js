import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            description: "",
            commentaire: "Ce texte provient du state",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        // Extraire de la structure 
        const {name, value, type, checked} = event.target

        type === "checkbox" ? 
            this.setState({ [name]: checked }) :    // checked is owned by the DOM and is toggling by itself
            this.setState({ [name]: value })        // assigner au champs pointe par name (e.g. lastName)
                                                    // ce qui est entre dans le champs value
        // Remarque sur les check boxes
        // C'est un peu bizarre cette relation circulaire entre le state
        // isFriendly et l'etat du Form item 'checked'.

        // From https://www.w3schools.com/tags/att_input_checked.asp
        // The checked attribute is a boolean attribute.
        //
        // When present, it specifies that an <input> element should be pre-selected (checked) when the page loads.
        // The checked attribute can be used with <input type="checkbox"> and <input type="radio">.
        // The checked attribute can also be set after the page load, with a JavaScript.

    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                
                {
                    /**
                     * Other useful form elements:
                     * 
                     *  <textarea /> element
                     *  <input type="checkbox" />
                     *  <input type="radio" />
                     *  <select> and <option> elements
                     */
                }
                <br />
                {/* 
                    Deux exemples de text area avec leur initialisations
                    a des endroits differents.
                */}

                <textarea 
                    name="description"
                    placeholder="ce texte provient du placeholder JSX"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                
                <br />

                <textarea 
                    name="commentaire"
                    value={this.state.commentaire}
                    onChange={this.handleChange}
                />
                
                <br />

                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>

                <br />

                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                {/* Formik */}
                <br />
                
                <label>Favorite Color:</label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
                
                <h1>{this.state.description}</h1>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favColor}</h2>
                <button>Submit</button>
            </form>
        )
    }
}

export default App
