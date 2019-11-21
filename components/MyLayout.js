import Header from './Header';
import "../node_modules/reset-css/sass/_reset.scss"
import "../node_modules/icono/sass/icono.scss"
import "../styles/main.scss"

const layoutStyle = {
    // margin: 20,
    padding: '0 20px',
    maxWidth: '920px',
    margin: '0 auto',
    // border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;