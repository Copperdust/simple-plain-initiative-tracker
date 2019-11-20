import Layout from '../components/MyLayout';
import { DragDropContext } from 'react-beautiful-dnd';

const TEST_ENTITIES = [
    {
        name: "Rivulet",
        initiative: Math.floor(Math.random() * 20) + 1 + 5,
    },
    {
        name: "Rimaru",
        initiative: Math.floor(Math.random() * 20) + 1 + 4,
    },
    {
        name: "Gesh",
        initiative: Math.floor(Math.random() * 20) + 1 + 3,
    },
    {
        name: "Skytree",
        initiative: Math.floor(Math.random() * 20) + 1 + 2,
    },
    {
        name: "NPC 1",
        initiative: Math.floor(Math.random() * 20) + 1,
    },
    {
        name: "NPC 2",
        initiative: Math.floor(Math.random() * 20) + 1,
    },
    {
        name: "NPC 3",
        initiative: Math.floor(Math.random() * 20) + 1,
    },
    {
        name: "NPC 4",
        initiative: Math.floor(Math.random() * 20) + 1,
    }
];

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

class InitiativeTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            initiativeInput: '',
            entities: [],
        }

        this.addEntity = this.addEntity.bind(this);
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleInitiativeInputChange = this.handleInitiativeInputChange.bind(this);
        this.forward = this.forward.bind(this);
        this.backward = this.backward.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);

        this.state.entities = this.sortEntities(TEST_ENTITIES);
    }

    handleNameInputChange = (e) => {
        this.setState({ nameInput: e.target.value });
    }

    handleInitiativeInputChange = (e) => {
        this.setState({ initiativeInput: e.target.value });
    }

    addEntity = (e, sort) => {
        e.preventDefault();
        var newState = {};
        newState.entities = this.state.entities.concat({
            name: this.state.nameInput,
            initiative: this.state.initiativeInput,
        });
        if (sort) {
            newState.entities = this.sortEntities(newState.entities);
        }
        this.setState(newState);
    }

    sortEntities = arr => (
        arr.sort((x, y) => {
            if (x.initiative < y.initiative) {
                return -1;
            }
            if (x.initiative > y.initiative) {
                return 1;
            }
            return 0;
        }).reverse()
    )

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

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            entities: items
        });
    }

    render() {
        var first = true;
        const items = this.state.entities.map((item, key) => (
            <tr key={key}>
                <td className="name">{item.name}</td>
                <td className="initative">{item.initiative}</td>
            </tr>
        ));

        return (
            <div>
                <div>
                    <table className="initiative-table">
                        <thead>
                            <th>Name</th>
                            <th>Initiative</th>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button onClick={this.forward}>Advance</button>
                    <button onClick={this.backward}>Go Back</button>
                </div>
                <form>
                    <label>
                        Entity Name: <input value={this.state.nameInput} onChange={this.handleNameInputChange} />
                    </label>
                    <label>
                        Entity Initiative: <input value={this.state.initiativeInput} onChange={this.handleInitiativeInputChange} />
                    </label>
                    <button onClick={(e) => this.addEntity(e, true)}>Add and Sort</button>
                    <button onClick={(e) => this.addEntity(e, false)}>Add</button>
                </form>
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