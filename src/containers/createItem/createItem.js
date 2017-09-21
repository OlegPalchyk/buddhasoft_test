import React, {Component} from 'react';
import { Button, FormControl, HelpBlock, ControlLabel, FormGroup} from 'react-bootstrap';
import items from '../../jsons/items.json';
const  FieldGroup= ({ id, label, help, ...props })=> {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
};
class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "",
            price : "",
            description :"",
            file: ""
        }
    }

    addItem(e){

        e.preventDefault();
        let newItem = {
            "id": 10,
            "title": this.state.title,
            "price": +this.state.price,
            "url": this.state.file,
            "description" : this.state.description


        };
        items.push(newItem);

    }
    handleChange(event){

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    readFile(event){
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onload = (file)=> {
           this.setState({
               file : file.target.result
           })
        };

        reader.readAsDataURL(file);
    }

    render() {
        return (
            <div className="create-item">
                <form method="POST" onSubmit={(e)=>this.addItem(e)} ref="form-control">
                    <FieldGroup
                        id="formControlsTitle"
                        type="text"
                        label="Text"
                        placeholder="Enter text"
                        name="title"
                        onChange={(e)=>{this.handleChange(e)}}

                    />
                    <FieldGroup
                        id="formControlsPrice"
                        label="text"
                        type="text"
                        placeholder="Enter price"
                        name="price"
                        onChange={(e)=>{this.handleChange(e)}}

                    />
                    <FieldGroup
                        id="formControlsFile"
                        type="file"
                        label="File"
                        help="Example block-level help text here."
                        name="file"
                        onChange={(e)=>{this.readFile(e)}}
                    />

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Textarea</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" name="description"
                                     onChange={(e)=>{this.handleChange(e)}}/>
                    </FormGroup>


                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default CreateItem;
