import "./Style.css"

function RedFruits(){
    return(
        <div className="Body">
            <div className="Main">
                <div className="container1 red">
                    <h1 style={{color:"Red"}}>Red Color Fruits</h1>
                    <div className="Box">
                        <li>Apple...............Rs.120-200</li>
                        <li>Strawberry..........Rs.250-400</li>
                        <li>Pomegranate.........Rs.150-220</li>
                        <li>Cherry..............Rs.400-800</li>
                    </div>
                </div>

                <div className="container1 yellow">
                    <h1 style={{color:"Yellow"}}>Yello Color Fruits</h1>
                    <div className="Box">
                        <li>Banana...............Rs.40-70</li>
                        <li>Mango................Rs.80-200</li>
                        <li>Pineapple............Rs.50-90</li>
                        <li>Papaya...............Rs.40-70</li>
                    </div>
                </div>

                <div className="container1 green">
                    <h1 style={{color:"Green"}}>Red Color Fruits</h1>
                    <div className="Box">
                        <li>Green Apple.............Rs.150-220</li>
                        <li>Guava...................Rs.60-120</li>
                        <li>Kiwi....................Rs.250-400</li>
                        <li>Green Grapes............Rs.90-150</li>
                    </div>
                </div>

                <div className="container1 purple">
                    <h1 style={{ color: "purple" }}>Purple Color Fruits</h1>
                    <div className="Box">
                        <li>Black Grapes.........Rs.90–160</li>
                        <li>Plum.................Rs.120–200</li>
                        <li>Jamun................Rs.150–300</li>
                        <li>Blueberry............Rs.300–600</li>
                    </div>
                </div>
    
                <div className="container1 orange">
                    <h1 style={{ color: "orange" }}>Orange Color Fruits</h1>
                    <div className="Box">
                        <li>Orange...............Rs.60–100</li>
                        <li>Mandarin.............Rs.70–120</li>
                        <li>Apricot..............Rs.180–300</li>
                        <li>Persimmon............Rs.150–250</li>
                    </div>
                </div>

                <div className="container1 white">
                    <h1 style={{ color: "gray" }}>White Color Fruits</h1>
                    <div className="Box">
                        <li>Banana...............Rs.40–70</li>
                        <li>Coconut..............Rs.30–60</li>
                        <li>Pear................Rs.120–200</li>
                        <li>Lychee...............Rs.180–350</li>
                    </div>
                </div>

                <div className="container1 brown">
                    <h1 style={{ color: "saddlebrown" }}>Brown Color Fruits</h1>
                    <div className="Box">
                        <li>Dates...............Rs.250–500</li>
                        <li>Fig..................Rs.300–600</li>
                        <li>Kiwi (Brown Skin)....Rs.250–400</li>
                        <li>Tamarind.............Rs.120–250</li>
                    </div>
                </div>

                <div className="container1 blue">
                    <h1 style={{ color: "steelblue" }}>Blue Color Fruits</h1>
                    <div className="Box">
                        <li>Blueberry.............Rs.300–600</li>
                        <li>Blue Grapes..........Rs.120–200</li>
                        <li>Black Currant........Rs.250–450</li>
                        <li>Elderberry...........Rs.400–700</li>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RedFruits;

export function Footer(){
    return(
        <>
            <p className="copy">
                © 2025 Fruit Color Store. All rights reserved.
            </p>
        </>
    )
}