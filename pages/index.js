import Layout from '../components/MyLayout';
import RollerForm from '../components/RollerForm';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({ id, initiative, text, first, events }) => <li className={"initiativeTable-item " + ((first) ? "initiativeTable-item--first" : "")}>
    <span className="initiativeTable-inputWrapper">
        <input className="initiativeTable-input initiativeTable-input--initiative" value={initiative} onChange={(e) => events.editEntityInitiative(e, id)} />
    </span>
    <span className="initiativeTable-inputWrapper">
        <input className="initiativeTable-input initiativeTable-input--name" value={text} onChange={(e) => events.editEntityName(e, id)} />
    </span>
    <button className="initiativeTable-itemControl" onClick={() => (events.removeEntity(id))}>
        <span className="icono-crossCircle"></span>
    </button>
</li>);

const SortableList = SortableContainer(({ items, events }) => {
    var first = items.find(x => x !== undefined);
    return (
        <div className="initiativeTable">
            <div className="initiativeTable-headers">
                <span>Roll</span>
                <span>Name</span>
            </div>
            <hr />
            <ul className="initiativeTable-items">
                {items.map((entity, index) => (
                    <SortableItem
                        key={`item-${entity.id}`}
                        index={index}
                        id={entity.id}
                        initiative={entity.initiative}
                        text={entity.name}
                        first={entity.id == first.id}
                        events={events}
                    />
                ))}
            </ul>
        </div>
    );
});

const sortByInitiative = arr => (
    arr.sort((x, y) => {
        if (parseInt(x.initiative, 10) < parseInt(y.initiative, 10)) {
            return -1;
        }
        if (parseInt(x.initiative, 10) > parseInt(y.initiative, 10)) {
            return 1;
        }
        return 0;
    }).reverse()
);

class StandardButton extends React.Component {
    render() {
        return <button
            className={"standardButton " + this.props.className}
            onClick={this.props.onClick}
        >
            {this.props.children}
        </button>
    }
}

class FormTextInput extends React.Component {
    render() {
        var classes = "standardInputGroup";
        if (this.props.noMarginBottom)
            classes += " noMarginBottom";
        return <div className={classes}>
            <label>{this.props.label}</label>
            <input value={this.props.value} onChange={this.props.onChange} />
        </div>
    }
}

class InitiativeList extends React.Component {
    render() {
        const { items, onSortEnd, events } = this.props;
        return <section className="initiativeTracker-list">
            <SortableList items={items} onSortEnd={onSortEnd} events={events} />
        </section>
    }
}

class InitiativeSidebar extends React.Component {
    render() {
        const { name, nameChange, initiative, initiativeChange, modifier, modifierChange, addEntity, sortEntities, forward, backward } = this.props;
        return <section className="initiativeTracker-controls">
            <form>
                <FormTextInput
                    label="Name"
                    value={name}
                    onChange={nameChange}
                />
                <RollerForm
                    initiative={initiative}
                    initiativeChange={initiativeChange}
                    modifier={modifier}
                    modifierChange={modifierChange}
                />
            </form>
            <StandardButton className="success" onClick={() => addEntity(false)}>Add</StandardButton>
            <StandardButton onClick={sortEntities}>Sort</StandardButton>
            <hr />
            <StandardButton className="failure" onClick={backward}>Go Back</StandardButton>
            <StandardButton className="success" onClick={forward}>Advance</StandardButton>
        </section>
    }
}

class InitiativeTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            initiativeInput: '',
            modifierInput: '',
            entities: [],
        }

        this.addEntity = this.addEntity.bind(this);
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleInitiativeInputChange = this.handleInitiativeInputChange.bind(this);
        this.forward = this.forward.bind(this);
        this.backward = this.backward.bind(this);
        this.sortEntities = this.sortEntities.bind(this);
        this.removeEntity = this.removeEntity.bind(this);
        this.clearInputs = this.clearInputs.bind(this);

        // Load default values for inputs
        setTimeout(() => (this.clearInputs()), 10);
    }

    handleNameInputChange = (e) => {
        this.setState({ nameInput: e.target.value });
    }

    handleInitiativeInputChange = (e) => {
        var value = e.target.value;
        if (Number.isInteger(parseInt(e.target.value, 10))) {
            value = parseInt(e.target.value, 10);
            if (parseInt(value, 10) > 999) value = 999;
            if (parseInt(value, 10) < 1) value = 1;
        }
        this.setState({
            initiativeInput: value,
            modifierInput: '',
        });
    }

    handleModifierInputChange = (e) => {
        var value = e.target.value;
        if (Number.isInteger(parseInt(e.target.value, 10))) {
            value = parseInt(e.target.value, 10);
            if (parseInt(value, 10) > 999) value = 999;
            if (parseInt(value, 10) < -999) value = -999;
        }
        this.setState({
            modifierInput: value,
            initiativeInput: '',
        });
    }

    clearInputs = () => {
        var newState = {};
        newState.nameInput = '';
        newState.initiativeInput = '';
        newState.modifierInput = '0';
        this.setState(newState);
    }

    addEntity = (sort) => {
        var newState = {};
        var highest = 0;
        this.state.entities.forEach(item => {
            if (item.id >= highest) highest = item.id + 1;
        })

        var initiative = this.state.initiativeInput;

        if (initiative == '') {
            initiative = Math.floor(Math.random() * 20) + 1 + parseInt(this.state.modifierInput);
        }

        newState.entities = this.state.entities.concat({
            id: highest,
            name: this.state.nameInput,
            initiative: initiative,
        });
        if (sort) {
            newState.entities = sortByInitiative(newState.entities);
        }

        newState.nameInput = '';
        this.setState(newState);
    }

    sortEntities = () => {
        return this.setState({ entities: sortByInitiative(this.state.entities) })
    };

    removeEntity = id => {
        var newState = this.state.entities;
        newState.forEach((item, index) => {
            if (id == item.id)
                delete newState[index];
        });
        this.setState({ entities: newState });
    }

    editEntityName = (e, id) => {
        var newState = this.state.entities;
        newState.forEach((item, index) => {
            if (id == item.id)
                newState[index].name = e.target.value;
        });
        this.setState({ entities: newState });
    }

    editEntityInitiative = (e, id) => {
        var newState = this.state.entities;
        newState.forEach((item, index) => {
            if (id == item.id)
                newState[index].initiative = e.target.value;
        });
        this.setState({ entities: newState });
    }

    forward = () => {
        var newOrder = this.state.entities;
        newOrder.push(newOrder.shift());
        this.setState({ entities: newOrder });
    }

    backward = () => {
        var newOrder = this.state.entities;
        newOrder.unshift(newOrder.pop());
        this.setState({ entities: newOrder });
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ entities }) => ({
            entities: arrayMove(entities, oldIndex, newIndex),
        }));
    };

    render() {
        return (
            <div className="initiativeTracker">
                <InitiativeList
                    items={this.state.entities}
                    onSortEnd={this.onSortEnd}
                    events={{
                        removeEntity: this.removeEntity,
                        editEntityName: this.editEntityName,
                        editEntityInitiative: this.editEntityInitiative,
                    }}
                ></InitiativeList>
                <InitiativeSidebar
                    name={this.state.nameInput}
                    nameChange={this.handleNameInputChange}
                    initiative={this.state.initiativeInput}
                    initiativeChange={this.handleInitiativeInputChange}
                    modifier={this.state.modifierInput}
                    modifierChange={this.handleModifierInputChange}
                    addEntity={this.addEntity}
                    sortEntities={this.sortEntities}
                    forward={this.forward}
                    backward={this.backward}
                ></InitiativeSidebar>
            </div>
        );
    }
}

export default function Main() {
    return (
        <Layout>
            <InitiativeTracker></InitiativeTracker>
        </Layout>
    );
}