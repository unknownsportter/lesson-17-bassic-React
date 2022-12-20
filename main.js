// const NewP = React.createElement('p',{name: 'p'}, 'Im here !');

// ReactDOM.render(NewP, document.getElementById('app'));

// const Button = React.createElement('button', {onClick: () => console.log('hey')}, 'clickme')
// ReactDOM.render(Button,document.getElementById('app'))

// const NewH1 = React.createElement('h1', { name: 'h1' }, 'h1 HERE');
// ReactDOM.render(NewH1, document.getElementById("app"))

// const NewInp = React.createElement('input', {PlaceHolder: 'type here'})
// ReactDOM.render(NewInp, document.getElementById("app"))

// const NewDiv = React.createElement(
//     'div',
//     { style: { backgroundColor: 'blue' } },
//     'somthing here in blue?'
// );
// ReactDOM.render(NewDiv, document.getElementById('app'));
// className!
const Sort = () => {
    return (
        <div className="sort">
            <div className="collection-sort">
                <label>Filter by:</label>
                <select>
                    <option value="/">All Jackets</option>
                    <option value="/">2016</option>
                    <option value="/">jacket</option>
                    <option value="/">Jackets</option>
                    <option value="/">layers</option>
                    <option value="/">Obermeyer</option>
                    <option value="/">Roxy</option>
                    <option value="/">womens</option>
                </select>
            </div>
        </div>
    );
};

const Filter = () => {
    return (
        <div className="collection-sort">
            <label>Sort by:</label>
            <select>
                <option value="/">Featured</option>
                <option value="/">Best Selling</option>
                <option value="/">Alphabetically, A-Z</option>
                <option value="/">Alphabetically, Z-A</option>
                <option value="/">Price, low to high</option>
                <option value="/">Price, high to low</option>
                <option value="/">Date, new to old</option>
                <option value="/">Date, old to new</option>
            </select>
        </div>
    );
};

const Nav = () => {
    return (
        <nav className="product-filter">
            <h1>Jackets</h1>
            <Sort />
            <Filter />
        </nav>
    );
};

const Prodacts = () => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
            </div>
            <div className="product-info">
                <h5>Winter Jacket</h5>
                <h6>$99.99</h6>
            </div>
        </div>
    );
};

const Section = () => {
    return (
        <section className="products">
            <Prodacts />
            <Prodacts />
            <Prodacts />
            <Prodacts />
            <Prodacts />
            <Prodacts />
            <Prodacts />
            <Prodacts />
            <Prodacts />
            <Prodacts />
        </section>
    );
};

const Main = () => {
    return (
        <div>
            <Nav />
            <Section />
        </div>
    );
};

ReactDOM.render(<Main />, document.getElementById('app'));
