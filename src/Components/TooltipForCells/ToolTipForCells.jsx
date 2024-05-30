    import './ToolTipForCells.css'

    const ToolTipForCells = ({contenido}) => {
        return (
            <div className="tooltip-container">{contenido}
                <div className="tooltip-text">
                    {contenido}
                </div>
            </div>
        )
    }

    export default ToolTipForCells;
