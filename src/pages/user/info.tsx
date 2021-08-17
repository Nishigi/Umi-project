import { useParams } from "umi";

export default () => {
    const { id } = useParams()
    return (
        <div>info react-----{id}</div>
    )
}