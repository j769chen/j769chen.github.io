const pStyle = {
    fontSize: '20px'
};

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p class="animated fadeIn" style={pStyle}>Welcome to my page!</p>
        );
    }
}
  
ReactDOM.render(<Welcome />, document.querySelector('#welcome_container'));

/*class Navigation extends React.Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (

        );
    }
} */