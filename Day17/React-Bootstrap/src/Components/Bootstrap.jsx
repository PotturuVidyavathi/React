

export function Bootstrap(){
    return(
        <>   
            <button className="btn btn-primary">
                Click Here
            </button>
             
            <p className="text-decoration-underline">
                This text has a line underneath it.
            </p>

            <a className="icon-link icon-link-hover" style={{ "--bs-link-hover-color-rgb": "25, 135, 84" }} href="#">
                Icon link
                <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            
            </a>
        </>
    )
}


