import { Block, TopBox, HeaderTwo, BottomBox } from "./styled";

const Content = ({
    isVertical,
    title,
    extraContentTop,
    extraContentBottom
}) => (
    <Block>
        <TopBox vertical={isVertical}>
            <HeaderTwo>
                {title}
            </HeaderTwo>
            {extraContentTop}
        </TopBox>
        <BottomBox>
            {extraContentBottom}
        </BottomBox>
    </Block>
);

export default Content;
