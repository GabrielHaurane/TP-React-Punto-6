import { Button, Card } from "react-bootstrap";


const ItemColor = ({color}) => {
    return (
        <>
            <Card.Header>{color}</Card.Header>
            <Card.Body className="fondoBody">
                <div className="d-flex justify-content-center">
                    <div
                    style={{
                        width: "100px",
                        height: "100px",
                        background: `${color}`,
                        border: "dashed 1px",
                    }}>
                    </div>
                </div>
            </Card.Body>
            
        </>

    );
};

export default ItemColor;