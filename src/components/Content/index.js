import { Block, TopBox, HeaderTwo, BottomBox } from "./styled";

const Content = ({
    isDirection,
    isVertical,
    title,
    extraContentTop,
    extraContentBottom
}) => (
    <Block>
        <TopBox direction={isDirection} vertical={isVertical}>
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
