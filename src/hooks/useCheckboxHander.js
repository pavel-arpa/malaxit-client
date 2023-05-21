import { useState } from "react"

const useCheckboxHander = (defaultValue) => {
    const [checked, setChecked] = useState(defaultValue)

    const onChange = (e) => {
        setChecked(e.target.checked)
    }

    return {
        checked, onChange
    }
}

export default useCheckboxHander