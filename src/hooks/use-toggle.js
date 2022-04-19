import React, { useState } from "react";

const useToggle = (active = false) => {
    const[isActive, setIsActive] = useState(active)
    return[isActive,setIsActive]
}

export default useToggle