import React, {Fragment, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import DataTable from "react-data-table-component";
import numeral from "numeral";
import dateformat from "dateformat";

import {DATE_FORMAT, NUMERAL, RESULT} from "core/globals";
import Service from "services/merchants/DashboardService";

import "./Stats.css";

const columns = [
  {
    name: 'Date',
    selector: 'start_time',
    cell: row => {
      const date = !!row.date ? dateformat(new Date(row.date), "yyyy-mm-dd") : "";
      return date;
    },
    sortable: true,
  },
  // {
  //   name: 'End Time',
  //   selector: 'end_time',
  //   cell: row => {
  //     const date = !!row.date ? dateformat(new Date(row.date), "yyyy-mm-dd") : "";
  //     return date;
  //   },
  //   sortable: true,
  // },
  {
    name: 'Redemption',
    selector: 'redemption',
    sortable: true,
  },
  {
    name: 'Revenue',
    selector: 'revenue',
    cell: row => numeral(row.balance || 0).format(NUMERAL.FORMAT.FIXED_2),
    sortable: true,
  },
  {
    name: 'Cashback',
    selector: 'cashback',
    cell: row => numeral(row.pending || 0).format(NUMERAL.FORMAT.FIXED_2),
    sortable: true,
  },
  {
    name: 'Pending',
    selector: 'pending',
    cell: row => numeral(row.pending || 0).format(NUMERAL.FORMAT.FIXED_2),
    sortable: true,
  },
];

export default () => {
  const {auth: {user}} = useSelector(state => state);

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const loadData = e => {
    setIsLoading(true);
    Service.offersList({id: user.id})
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setItems(res.data);
        } else {
          setItems({});
        }
        setIsLoading(false);
      })
      .catch(err => {
        setItems({});
        setIsLoading(false);
      });
  };

  useEffect(e => {
    loadData();
  }, []);

  const payload = () => (
    <Fragment>
      <div>
        <div className="row">
          <DataTable
            title="Offers History"
            columns={columns}
            data={items}
            fixedHeader
            pagination
          />
        </div>
      </div>

    </Fragment>
  );

  return payload();
}
