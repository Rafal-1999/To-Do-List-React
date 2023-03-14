import { Block, TopBox, HeaderTwo, BottomBox } from "./styled";

const Content = ({
    title,
    extraContentTop,
    extraContentBottom
}) => (
    <Block>
        <TopBox vertical>
            <HeaderTwo>
                {title}
            </HeaderTwo>
            {extraContentTop}
        </TopBox>
        <BottomBox>
            {extraContentBottom}
        </BottomBox>
    </Block>

    // Kod sprzed zmiany na styled-components.
    // <div className="list__block">
    //     <div className={classNameTopBox}>
    //         <h2 className="list__header">
    //             {title}
    //         </h2>
    //         {extraContentTop}
    //     </div>
    //     <div className={classNameBottomBox}>
    //         {extraContentBottom}
    //     </div>
    // </div>
);

export default Content;
