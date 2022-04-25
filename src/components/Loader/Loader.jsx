import {Rings} from 'react-loader-spinner'
import {useSelector} from 'react-redux'
import './Loader.scss'

export const Loader = () => {

    const loading = useSelector(state => state.loadingReducer.loading)
    console.log(loading)
    return (
        <div className="loader">
            <Rings
                visible = {loading}
            />
        </div>
    )
}