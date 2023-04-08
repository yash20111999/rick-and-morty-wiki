import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { CardViewer } from '../../organism';
import { DataContext } from '../../DataContext';
import { Dropdown } from '../../atoms';


const Episodes = () => {
  const [data, setData] = useState({});
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState(0);
  const [id, setId] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
      setData(response.data);
      let a = await Promise.all(response.data.characters.map((character) => {
        return axios.get(`${character}`)
      }))
      setResult(a);
    };
    fetchData();

  }, [id]);

  useEffect(() => {
    const fetchTotalEpisode = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/`);
      setTotal(response?.data?.info?.count);
    }
    fetchTotalEpisode();
  })

  console.log(result,data,total,  'inepi')

  
  return (
    <div>
      <DataContext.Provider value={result} >
        <Dropdown name='Episode' changeID={setId} total={total} />
        <CardViewer second/>
      </DataContext.Provider>
    </div>
  )
}

export default Episodes
