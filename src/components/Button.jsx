export default function Button({textContext, handleToggle}) {
    return (
        <div>
            <button onClick={handleToggle}>{textContext}</button>
        </div>
    )
}