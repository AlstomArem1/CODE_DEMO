import { useContext } from "react";
import { AppContext } from "../../AppContext"
import "./pagination.css";

function Pagination() {
    const { pageTatalphae, setPage,prevPageProduct, nextPageProduct, page } = useContext(AppContext);
    return (
        <div className="pagination_products">
            <ul className="pagination pagaination-md justify-content-center">
                {/* <li className="page-item"><span className="page-link">&laquo;</span></li> */}
                <li className="page-item" ><a href="#newspt" className="page-link" onClick={prevPageProduct}>&lsaquo;</a></li>
                {pageTatalphae && pageTatalphae.map(value => (
                    <li key={value} className="page-item"><a href="#newspt" className={`page-link ${page === value ? "activepageproduct":""}`}
                    onClick={() => setPage(value)}
                    >{`${value}`}</a></li>
                ))}
                <li className="page-item" ><a href="#newspt" className="page-link" onClick={nextPageProduct}>&rsaquo;</a></li>
                {/* <li className="page-item"><span className="page-link">&raquo;</span></li> */}
            </ul>
        </div>
    )
}
export default Pagination
