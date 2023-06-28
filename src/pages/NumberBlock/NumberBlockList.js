import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { adminData } from '../../store/Admin/Admin.slice';
import { getPartnerNumberBlockList as getNumberBlockAPI } from '../../store/Partner/Partner.extraReducer';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './NumberBlock.columns';

const NumberBlockList = () => {
  const admin = useSelector(adminData);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const handleRequest = ( {controller}) => {
    dispatch(
      getNumberBlockAPI({
        ...(!controller ? {} : { signal: controller?.signal }),
        partnerId: admin?.companyID
      }))
    .then((res) => {
      setData(res?.payload)
    })
  }

  useEffect(() => {
    const controller = new AbortController();
    handleRequest({ controller });
    
    return () => {
      controller.abort();
    };
  }, [])

  return (
    <Container>
      <h1>Number Blocks</h1>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Container>
  )
}

export default NumberBlockList;