import Layout from '../components/MyLayout';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

// initiative: Math.floor(Math.random() * 20) + 1 + 5,
const TEST_ENTITIES = [
    {
        id: 1,
        name: "Rivulet",
        initiative: 5 + 1 + 5,
    },
    {
        id: 2,
        name: "Rimaru",
        initiative: 10 + 1 + 4,
    },
    {
        id: 3,
        name: "Gesh",
        initiative: 15 + 1 + 3,
    },
    {
        id: 4,
        name: "Skytree",
        initiative: 20 + 1 + 2,
    },
    {
        id: 5,
        name: "NPC 1",
        initiative: 3 + 1,
    },
    {
        id: 6,
        name: "NPC 2",
        initiative: 8 + 1,
    },
    {
        id: 7,
        name: "NPC 3",
        initiative: 13 + 1,
    },
    {
        id: 8,
        name: "NPC 4",
        initiative: 17 + 1,
    }
];

const SortableItem = SortableElement(({ id, initiative, text, first, removeEntity }) => <li className={"initiativeTable-item " + ((first) ? "initiativeTable-item--first" : "")}>
    <span>{initiative}</span>
    <span>{text}</span>
    <button className="initiativeTable-itemControl" onClick={() => { console.log("test?"); removeEntity(id) }}>
        <span className="icono-crossCircle"></span>
    </button>
</li>);

const SortableList = SortableContainer(({ items, removeEntity }) => {
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
                        first={!index}
                        removeEntity={removeEntity}
                    />
                ))}
            </ul>
        </div>
    );
});

const sortByInitiative = arr => (
    arr.sort((x, y) => {
        if (x.initiative < y.initiative) {
            return -1;
        }
        if (x.initiative > y.initiative) {
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

class InitiativeTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            initiativeInput: '',
            entities: [],
            // items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
        }

        this.addEntity = this.addEntity.bind(this);
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleInitiativeInputChange = this.handleInitiativeInputChange.bind(this);
        this.forward = this.forward.bind(this);
        this.backward = this.backward.bind(this);
        this.sortEntities = this.sortEntities.bind(this);
        this.removeEntity = this.removeEntity.bind(this);

        this.state.entities = sortByInitiative(TEST_ENTITIES);
    }

    handleNameInputChange = (e) => {
        this.setState({ nameInput: e.target.value });
    }

    handleInitiativeInputChange = (e) => {
        this.setState({ initiativeInput: e.target.value });
    }

    addEntity = (sort) => {
        var newState = {};
        var highest = 0;
        this.state.entities.forEach(item => {
            if (item.id >= highest) highest = item.id + 1;
        })
        newState.entities = this.state.entities.concat({
            id: highest,
            name: this.state.nameInput,
            initiative: this.state.initiativeInput,
        });
        newState.nameInput = '';
        newState.initiativeInput = '';
        if (sort) {
            newState.entities = sortByInitiative(newState.entities);
        }
        this.setState(newState);
    }

    sortEntities = () => {
        return this.setState({ entities: sortByInitiative(this.state.entities) })
    };

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

    removeEntity = id => {
        var newState = this.state.entities;
        newState.forEach((item, index) => {
            if (id == item.id)
                delete newState[index];
        });
        this.setState({ entities: newState });
    }

    render() {
        return (
            <div className="initiativeTracker">
                <section className="initiativeTracker-list">
                    <SortableList items={this.state.entities} onSortEnd={this.onSortEnd} removeEntity={this.removeEntity} />
                </section>
                <section className="initiativeTracker-controls">
                    <form>
                        <FormTextInput
                            label="Name"
                            value={this.state.nameInput}
                            onChange={this.handleNameInputChange}
                        />
                        <FormTextInput
                            label="Roll"
                            value={this.state.initiativeInput}
                            onChange={this.handleInitiativeInputChange}
                            noMarginBottom
                        />
                    </form>
                    <StandardButton className="success" onClick={() => this.addEntity(false)}>Add</StandardButton>
                    <StandardButton onClick={this.sortEntities}>Sort</StandardButton>
                    <hr />
                    <StandardButton className="failure" onClick={this.backward}>Go Back</StandardButton>
                    <StandardButton className="success" onClick={this.forward}>Advance</StandardButton>
                </section>
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