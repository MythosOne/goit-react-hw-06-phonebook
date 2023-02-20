import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../redux/selectors';
import { setFilter } from '../redux/contactsSlice';
import { TitleFilter, ContainerFilter, Input } from './App.styled';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    console.log(filter, 'Filter');

    return (
        <ContainerFilter>
            <TitleFilter>Find contacts by name</TitleFilter>
            <Input
                type='text'
                value={filter}
                onChange={(event) => dispatch(setFilter(event.target.value))}
                placeholder='Enter Name'
            />
        </ContainerFilter>
    );
};