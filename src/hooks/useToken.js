import { useState } from "react"

const useToken = () => {
    const [componentToken, setComponentToken] = useState()
    const [isGeneratingToken, setIsGeneratingToken] = useState(true)

    return {
        componentToken,
        setComponentToken,
        isGeneratingToken,
        setIsGeneratingToken,
    }
}

export default useToken