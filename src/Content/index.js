import "./style.css";

const Content = (props) => (
    <div className="list__block">
        <div className={`${props.topBox}`}>
            <h2 className="list__header">
                {props.title}
            </h2>
            {props.extraContentTop}
        </div>
        <div className={`${props.bottomBox}`}>
            {props.extraContentBottom}
        </div>
    </div>
);

export default Content;
