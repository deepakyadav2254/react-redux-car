import { useSelector } from 'react-redux';

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, term } }) => {
    return data
      .filter((car) => {
        return car.name.toLowerCase().includes(term.toLowerCase());
      })
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return <div className='car-value'>Total Cost: ${totalCost}</div>;
};

export default CarValue;
