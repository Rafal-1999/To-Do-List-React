import "./style.css";

const Block = (props) => (
    <div className="list__block">
        <div className={`${props.boxClass1}`}>
            <h2 className="list__header">
                {props.title}
            </h2>
            {props.extraContent1}
        </div>
        <div className={`${props.boxClass2}`}>
            {props.extraContent2}
        </div>
    </div>
);

export default Block;