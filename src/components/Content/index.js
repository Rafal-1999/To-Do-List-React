import { Block, TopBox, HeaderTwo, BottomBox } from "./styled";

const Content = ({
    isVertical,
    title,
    extraContentTop,
    isLayout,
    isBlock,
    extraContentBottom
}) => (
    <Block>
        <TopBox vertical={isVertical}>
            <HeaderTwo>
                {title}
            </HeaderTwo>
            {extraContentTop}
        </TopBox>
        <BottomBox layout={isLayout} block={isBlock}>
            {extraContentBottom}
        </BottomBox>
    </Block>
);

export default Content;
