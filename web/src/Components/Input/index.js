import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Container } from './styles';

const Input = ({
    userInput,
    types,
    placeholder,
    value,
    label,
    isRequired,
    hasIcon,
}) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) =>{
        const userOnChange = e.currentTarget.value;
        userInput?.(userOnChange)
    }

    return(
        <Container>
            <label>{label}</label>
            <input
                type={showPassword ? 'text' : types}
                value={value}
                onChange={handleChange}
                required={isRequired}
                placeholder={placeholder}
            />
            {hasIcon && (showPassword ? 
                <AiOutlineEye onClick={() => setShowPassword(!showPassword)} size={30}/> 
            : 
                <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} size={30}/>
            )}
        </Container>
    );
}

export default Input;