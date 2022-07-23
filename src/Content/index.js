import "./style.css";

const Content = ({
    topBox,
    title,
    extraContentTop,
    bottomBox,
    extraContentBottom
}) => (
    <div className="list__block">
        <div className={`${topBox}`}>
            <h2 className="list__header">
                {title}
            </h2>
            {extraContentTop}
        </div>
        <div className={`${bottomBox}`}>
            {extraContentBottom}
        </div>
    </div>
);

export default Content;
