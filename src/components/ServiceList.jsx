import {useSelector, useDispatch} from 'react-redux';
import { removeService,fillServiceField, filterServiceList} from '../redux/actions/actions';
export default function ServiceList() {
  const itemsState = useSelector(state => state.serviceList);
  const itemsFilterState = useSelector(state => state.serviceFilter)
  let items = itemsState;
  if(itemsFilterState.length >=1){
    items = itemsFilterState;
  }
  const dispatch = useDispatch();
  const handleChange = (name,value,id) => {
    dispatch(fillServiceField(name,value,id))};
  const handleRemove = (id) => {
    dispatch(removeService(id))
    dispatch(filterServiceList(itemsFilterState.filter(o=>o.id !== id)))
  };
  const handleFilter = (evt)=>{
    if(evt.target.value===''){
      dispatch(filterServiceList([]))
      return
    }
    const filtered = itemsState.filter((el) => el.name.toLowerCase().includes(evt.target.value.toLowerCase()))
    dispatch(filterServiceList(filtered))
  }

  return (
    <>
    <input name='search' onInput={(evt)=>handleFilter(evt)} className='filter'/><span>&#128270;</span>
    <ul>
    {items.map(o => (
      <li key={o.id}>
        {o.name} {o.price}
        <button onClick={() =>handleChange(o.name,o.price,o.id)}>&#9998;</button>
        <button onClick={() =>handleRemove(o.id)}>✕</button>
      </li>))}
    </ul>
    </>
    )
}