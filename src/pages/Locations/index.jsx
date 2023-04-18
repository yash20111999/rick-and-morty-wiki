import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { CardViewer } from '../../organism';
import { DataContext } from '../../DataContext';
import { Dropdown } from '../../atoms';

const Locations = () => {
  const [data, setData] = useState({});
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState(0);
  const [id, setId] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
      setData(response.data);
      let a = await Promise.all(response?.data?.residents.map((character) => {
        return axios.get(`${character}`)
      }))
      setResult(a);
    };
    fetchData();

  }, [id]);

  useEffect(() => {
    const fetchTotalLocation = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/location/`);
      setTotal(response?.data?.info?.count);
    }
    fetchTotalLocation();
  })

  
  return (
    <div>
      <DataContext.Provider value={result} >
        <Dropdown name='Location' changeID={setId} total={total} />
        <CardViewer second/>
      </DataContext.Provider>
    </div>
  )
}

export default Locations
