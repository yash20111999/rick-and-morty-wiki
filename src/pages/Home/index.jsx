import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { ActivityHeader, CardViewer } from '../../organism';
import { DataContext } from '../../DataContext';
import { Pagination } from '../../molecules';


const Home = () => {

  const [data, setData] = useState({});
  const setPage = (e) => {
    setQuery({
      ...query,
      page: e,
    })
  }

  const [query, setQuery] = useState({
    page: 1,
    gender: '',
    status: '',
    searchVal: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${query.page}&name=${query.searchVal}&status=${query.status}&gender=${query.gender}`);
      setData(response.data);
    };
    fetchData();
  }, [query]);

  
  return (
    <div>
      <DataContext.Provider value={data?.results} >
        <ActivityHeader query={query} setQuery={setQuery} />
        <CardViewer />
        <Pagination currentPage={query.page} totalPages={data?.info?.pages} onPageChange={setPage} />
      </DataContext.Provider>
    </div>
  )
}

export default Home
