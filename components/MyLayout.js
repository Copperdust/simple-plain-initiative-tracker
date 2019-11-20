import Header from './Header';
import "../styles/main.scss"

const layoutStyle = {
    // margin: 20,
    padding: '0 20px',
    // border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;