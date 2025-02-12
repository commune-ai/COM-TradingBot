import { Segment } from "semantic-ui-react";
import styled from "styled-components";


const StyledSegment = styled(Segment)`
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    
    &.ui.segment {
        padding: ${(props: any) => props.padding ? props.padding : '25px'};
        padding-top: ${(props: any) => props.paddingTop ? props.paddingTop : 0};;
        padding-bottom: ${(props: any) => props.paddingBottom ? props.paddingBottom : 0};;
    }
`

export default StyledSegment
