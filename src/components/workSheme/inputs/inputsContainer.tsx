import { useState, useRef } from "react"
import './inputsContainer.scss'
import AddFileIcon from '../../../assets/addFileIcon.svg?react';

const systemOptions = [
    { value: "2", label: "Sed ut perspiciatis" },
    { value: "3", label: "Nemo enim ipsam" },
    { value: "4", label: "Et harum quidem" },
    { value: "5", label: "Temporibus autem" },
    { value: "6", label: "Itaque earum rerum" },
]

const FileInput = () => {
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null
        setFileName(file ? file.name : '')
    }

    return (
        <label 
            className={`lInput file-input-wrapper ${fileName ? 'is-file-selected' : ''}`}
            htmlFor="custom-file-upload"
        >
            <input
                type="file"
                id="custom-file-upload"
                name="file"
                ref={fileInputRef}
                className="hidden-file-input"
                onChange={handleFileChange}
            />
            
            <div className="file-input-content">
                <span className="file-input-icon">
                    <AddFileIcon />
                </span>
                
                <span className="file-input-label">
                    {fileName || 'ПРИКРЕПИТЬ ФАЙЛ'}
                </span>
            </div>
        </label>
    );
};

export const InputsContainer = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [rangeValue, setRangeValue] = useState(75) 
    
    const displayLabel = systemOptions.find(opt => opt.value === selectedValue)?.label || "Выберите тип системы"

    const changeSelector = (value: string) => {
        setSelectedValue(value)
        setIsOpen(false)
    }

    return (
        <form className="inputs-layout">
            <div>
                <div className="top-row">
                    <div className='custom-dropdown-wrapper'>
                        <input type="hidden" name="systemType" value={selectedValue} />
                        <div 
                            className={`dropdown-header ${isOpen ? 'is-open' : ''} ${selectedValue ? 'is-selected' : ''}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className='header-label'>{displayLabel}</div>
                        </div>
                        {isOpen && (
                            <div className='dropdown-options-container'>
                                {systemOptions.map((option) => (
                                    <div 
                                        key={option.value}
                                        className={`dropdown-option ${option.value === selectedValue ? 'is-active' : ''}`}
                                        onClick={() => changeSelector(option.value)}
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <input 
                        placeholder='Ваш e-mail' 
                        className="lInput" 
                        type="email"
                        name="email"
                    />
                    <input 
                        placeholder='Ваше имя' 
                        className="lInput" 
                        type="text"
                        name="name"
                    />
                </div>

                <div className="bottom-row">
                    <div className='range-container'>
                        <input 
                            type="hidden" 
                            name="rangeValue" 
                            value={rangeValue} 
                        />
                        <div className='range-label'>
                            Sed ut perspiciatis, unde omnis iste natus 
                            <span className='range-value-display'>{rangeValue}%</span>
                        </div>
                        
                        <input 
                            type="range"
                            min="0"
                            max="100"
                            value={rangeValue}
                            onChange={(e) => setRangeValue(Number(e.target.value))}
                            className="custom-range-slider"
                        />
                    </div>

                    <FileInput />
                </div>
            </div>
            <button type="submit" className="button">ОТПРАВИТЬ</button>
        </form>
    )
}