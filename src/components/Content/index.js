import "./style.css";

const Content = ({
    classNameTopBox,
    title,
    extraContentTop,
    classNameBottomBox,
    extraContentBottom
}) => (
    <div className="list__block">
        <div className={classNameTopBox}>
            <h2 className="list__header">
                {title}
            </h2>
            {extraContentTop}
        </div>
        <div className={classNameBottomBox}>
            {extraContentBottom}
        </div>
    </div>
);

export default Content;
