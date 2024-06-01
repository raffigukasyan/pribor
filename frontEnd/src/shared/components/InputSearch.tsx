import styled from "styled-components";
import {SearchIcon} from "./index.ts";

import '../styles/components/InputSearch.css';

const Input = styled.input`
    padding: 1rem 3rem 1rem 1rem;
    width: 100%;
    background-color: #FFF;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
`

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 350px;
`

interface InputSearchProps {
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const InputSearch = ({placeholder, onChange, value}: InputSearchProps) => {
    return (
        <InputWrapper>
            <Input placeholder={placeholder} value={value} onChange={onChange} />
            <SearchIcon className="inputSearchIcon"/>
        </InputWrapper>
    )
}
