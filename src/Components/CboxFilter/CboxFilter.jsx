import React from "react";

const CboxFilter = ({ options, onChange }) => {
    return (
        <div className="">
            <select id="" className="form-control" style={{ border: 'none' }} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CboxFilter;