
import {InputSearch} from "../../../shared/components/index.ts";


export const Search: React.FC = () => {
    return (
        <InputSearch value={'ds'} onChange={(eve:React.ChangeEvent) => console.log(eve)} placeholder={'fdf'}/>
    )
}