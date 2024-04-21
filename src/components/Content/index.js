import {
    Block,
    TopBox,
    HeaderTwo,
    BottomBox
} from "./styled";

const Content = ({
    isLayout,
    isVertical,
    title,
    extraContentTop,
    extraContentBottom
}) => (
    <Block>
        <TopBox layout={isLayout} vertical={isVertical}>
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
