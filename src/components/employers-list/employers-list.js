import EmployersListItem from "../employers-list-item/employers-list-item"
import './employers-list.css';

const EmployersList = ({data, onDelete, onIncreaseProp}) => {

    const elements = data.map(item => {
        const {id, ...itemPror} = item
        return (
            <EmployersListItem 
                key={id} 
                {...itemPror}
                onDelete={() => {onDelete(id)}}
                onIncreaseProp={(e) => {onIncreaseProp(id, e.currentTarget.getAttribute("data-prop"))}}
                />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;