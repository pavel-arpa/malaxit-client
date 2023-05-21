import { Spinner } from "@chakra-ui/react"

const FullscreenSpinner = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: window.innerHeight
        }}>
            <Spinner size='xl' />
        </div>
    )
}
export default FullscreenSpinner