import Layout from '../components/MyLayout';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

// initiative: Math.floor(Math.random() * 20) + 1 + 5,
const TEST_ENTITIES = [
    {
        name: "Rivulet",
        initiative: 5 + 1 + 5,
    },
    {
        name: "Rimaru",
        initiative: 10 + 1 + 4,
    },
    {
        name: "Gesh",
        initiative: 15 + 1 + 3,
    },
    {
        name: "Skytree",
        initiative: 20 + 1 + 2,
    },
    {
        name: "NPC 1",
        initiative: 3 + 1,
    },
    {
        name: "NPC 2",
        initiative: 8 + 1,
    },
    {
        name: "NPC 3",
        initiative: 13 + 1,
    },
    {
        name: "NPC 4",
        initiative: 17 + 1,
    }
];

const SortableItem = SortableElement(({ initiative, text }) => <li>
    <span>{initiative}</span>
    <span>{text}</span>
</li>);

const SortableList = SortableContainer(({ items }) => {
    return (
        <div className="initiativeTable">
            <div className="initiativeTable-headers">
                <span>Roll</span>
                <span>Name</span>
            </div>
            <ul className="initiativeTable-items">
                {items.map((entity, index) => (
                    <SortableItem key={`item-${entity.name}`} index={index} initiative={entity.initiative} text={entity.name} />
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
        newState.entities = this.state.entities.concat({
            name: this.state.nameInput,
            initiative: this.state.initiativeInput,
        });
        if (sort) {
            newState.entities = sortByInitiative(newState.entities);
        }
        this.setState(newState);
    }

    sortEntities = () => (
        this.setState({ entities: sortByInitiative(this.state.entities) })
    );

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
            <div>
                <div>
                    <SortableList items={this.state.entities} onSortEnd={this.onSortEnd} />
                </div>
                <div>
                    <button onClick={this.forward}>Advance</button>
                    <button onClick={this.backward}>Go Back</button>
                </div>
                <form>
                    <label>
                        Name: <input value={this.state.nameInput} onChange={this.handleNameInputChange} />
                    </label>
                    <label>
                        Roll: <input value={this.state.initiativeInput} onChange={this.handleInitiativeInputChange} />
                    </label>
                </form>
                <div>
                    <button onClick={() => this.addEntity(false)}>Add</button>
                    {/* <button onClick={() => this.addEntity(true)}>Add and Sort</button> */}
                    <button onClick={this.sortEntities}>Sort</button>
                </div>
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