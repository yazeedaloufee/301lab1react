import React from "react"

class MyForm extends React.Component {


    render() {
        return (
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">hornes more than legs</option>
            </Form.Select>

        )
    }
}
export default MyForm