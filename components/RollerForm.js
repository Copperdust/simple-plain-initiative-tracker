class RollerForm extends React.Component {
    render() {
        var classes = "standardInputGroup standardInputGroup--double standardInputGroup--noMarginBottom";
        return <div className={classes}>
            <div>
                <label>Roll</label>
                <input type="number" value={this.props.initiative} onChange={this.props.initiativeChange} />
            </div>
            <div>
                - OR -
            </div>
            <div>
                <label>Modifier</label>
                <input type="number" value={this.props.modifier} onChange={this.props.modifierChange} />
            </div>
        </div>
    }
}

export default RollerForm;