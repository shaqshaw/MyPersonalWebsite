import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';
import NavMenu from '../components/NavMenu';

function Books() {
    return(
        <div className="App">
            <NavMenu/>
            <h1 className="titles">Books</h1>
            <ListGroup>
                <ListGroup.Item className="Bio">
                    <a href="https://www.amazon.com/s?k=the+alchemist&ref=nb_sb_noss">The Alchemist</a>
                </ListGroup.Item>
                <ListGroup.Item className="Bio">
                    <a href="https://www.amazon.com/gp/product/0152023984?ref_=dbs_m_mng_rwt_calw_thcv_0&storeType=ebooks&qid=1671583210&sr=1-1">The Little Prince</a>
                </ListGroup.Item>
                <ListGroup.Item className="Bio">
                    <a href="https://www.amazon.com/gp/product/1878424319/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1">The Four Agreements</a>
                </ListGroup.Item>
                <ListGroup.Item className="Bio">
                    <a href="https://www.amazon.com/As-Man-Thinketh-James-Allen/dp/1441337393/ref=sr_1_5?crid=3LR5SR7FBVMGN&keywords=as+a+man+thinketh&qid=1671583297&s=books&sprefix=as+a+man+thinketh%2Cstripbooks%2C150&sr=1-5">As a Man Thinketh</a>
                </ListGroup.Item>
                <ListGroup.Item className="Bio">
                    <a href="https://www.amazon.com/Richest-Man-Babylon-Magic-Story/dp/1939438632/ref=sr_1_1?crid=2UAY41IUQWAHC&keywords=the+richest+man+in+babylon&qid=1671583342&s=books&sprefix=the+richest+%2Cstripbooks%2C191&sr=1-1">The Richest Man in Babylon</a>
                </ListGroup.Item>
                <ListGroup.Item className="Bio">
                    <a href="https://www.amazon.com/gp/product/1491973897/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1">The Manager's Path</a>
                </ListGroup.Item>
                <ListGroup.Item className="Bio">
                    <a href="https://www.amazon.com/gp/product/0140280197/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1">The 48 Laws of Power</a>
                </ListGroup.Item>
                <ListGroup.Item className="Bio">
                    <a href="https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612681123/ref=sr_1_1?crid=30Z9HLII4T7R3&keywords=rich+dad+poor+dad&qid=1671583534&s=books&sprefix=rich+dad+poor+da%2Cstripbooks%2C127&sr=1-1">Rich Dad Poor Dad</a>
                </ListGroup.Item>
                <ListGroup.Item className="Bio">
                    <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=sr_1_1?crid=34QTXL0WCZ6CO&keywords=atomic+habits&qid=1671583553&s=books&sprefix=atomic+habits%2Cstripbooks%2C146&sr=1-1">Atomic Habits</a>
                </ListGroup.Item>
                <ListGroup.Item className="Bio">
                    <a href="https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331/ref=sr_1_1?crid=2IE3LZD7B2L3U&keywords=think+and+grow+rich&qid=1671583572&s=books&sprefix=think+and+grow+rich%2Cstripbooks%2C130&sr=1-1">Think and Grow Rich</a>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Books;