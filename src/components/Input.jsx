export default function Input({label, value, onChange, type}) {
    return (
        <div>
            <label>
            {label}
                <input 
                    type={type} 
                    value={value} 
                    onChange={onChange} />
            </label>
        </div>
    )
}