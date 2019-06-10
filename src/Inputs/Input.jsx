import * as React from "react";
import styled from 'styled-components';
import { styledCondition, transition } from '@Utils/Mixins';
import { LabelLayout } from '@Layouts';

const Input = props => {
    return (
        <LabelLayout { ...props }>
            <InputElement { ...props }/>
        </LabelLayout>
    )
}

const InputElement = styled.input`
    ${ transition(['background-color', 'opacity', 'box-shadow']) }
    font-size: 0.85rem;
    font-weight: bold;
    outline: none;
    border: none;


    // Disabled
    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    // Theme Stuff
    ${({ theme }) => `
        padding: ${ theme.dimensions.padding.default };
        border-radius: ${ theme.dimensions.radius };
        font-family: ${ theme.font.family };
        &:focus {
            box-shadow: ${ theme.depth[1] };
        }
    `}

    // Background color
    ${({ theme, error, success }) => `
        background-color: ${
            styledCondition(
                error, theme.colors.input.error,
                success, theme.colors.input.success,
                theme.colors.input.default
            )
        };
    `}
`;

export default Input;
